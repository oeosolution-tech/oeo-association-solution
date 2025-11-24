export default function Visit() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-8xl font-bold mb-16 text-yellow-400">OEO Visit Fee</h1>
        <div className="bg-white w-96 h-96 mx-auto rounded-3xl flex items-center justify-center text-8xl font-bold shadow-2xl">
          QR CODE HERE
        </div>
        <p className="text-8xl text-yellow-400 mt-20 animate-pulse">₦5,000</p>
      </div>
    </div>
  );
}