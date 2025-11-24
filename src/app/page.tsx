import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white">
      <nav className="bg-black/70 backdrop-blur-xl p-8 shadow-2xl border-b border-purple-500/30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center md:justify-start gap-8 text-2xl font-semibold">
          <div className="text-5xl font-bold tracking-wider">OEO EMPIRE</div>
          <div className="flex flex-wrap gap-10">
            <Link href="/" className="hover:text-purple-300 transition">Dashboard</Link>
            <Link href="/upload" className="hover:text-green-400 transition">Receipt AI</Link>
            <Link href="/visit" className="hover:text-yellow-400 transition">Visit Fee</Link>
            <Link href="/leaderboard" className="hover:text-cyan-400 transition">NFT Badges</Link>
          </div>
        </div>
      </nav>

      <main className="text-center pt-32 px-8">
        <h1 className="text-9xl font-bold mb-8 animate-pulse">₦48,920,000</h1>
        <p className="text-5xl text-purple-200 mb-6">Self-Updating • Zero Manual Entry • AI-Powered</p>
        <p className="text-7xl text-green-400 mt-20 animate-bounce">EMPIRE IS 100% LIVE</p>
      </main>
    </div>
  );
}