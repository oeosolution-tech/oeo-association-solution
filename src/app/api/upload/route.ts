import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { PrismaClient } from "@prisma/client";
import { writeFile } from "fs/promises";
import path from "path";

const prisma = new PrismaClient();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export const POST = async (req: NextRequest) => {
  try {
    const data = await req.formData();
    const file: File | null = data.get("receipt") as File;
    const name = data.get("name") as string;

    if (!file || !name) return NextResponse.json({ error: "Name & receipt required" }, { status: 400 });

    // Save image
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filename = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.]/g, "_")}`;
    const filepath = path.join(process.cwd(), "public/uploads", filename);
    await writeFile(filepath, buffer);

    // AI reads receipt
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent([
      "Extract ONLY depositor name and exact amount in Naira from this Nigerian bank receipt. Reply ONLY valid JSON: {\"depositor\":\"Name\",\"amount\":number}",
      { inlineData: { data: buffer.toString("base64"), mimeType: file.type } }
    ]);

    let json = { depositor: "Unknown", amount: 0 };
    try {
      json = JSON.parse(result.response.text().replace(/```/g, "").trim());
    } catch (e) {}

    // Save member + receipt
    const member = await prisma.member.upsert({
      where: { name },
      update: {},
      create: { name, phone: Date.now().toString(), balance: 0 }
    });

    await prisma.receipt.create({
      data: {
        memberId: member.id,
        imageUrl: `/uploads/${filename}`,
        amount: json.amount,
        depositor: json.depositor,
        status: "ai_processed"
      }
    });

    // Credit balance instantly (Paystack verification comes later)
    await prisma.member.update({
      where: { id: member.id },
      data: { balance: { increment: json.amount } }
    });

    return NextResponse.json({
      success: true,
      name,
      depositor: json.depositor,
      amount: json.amount,
      message: "Credit added instantly!"
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
};