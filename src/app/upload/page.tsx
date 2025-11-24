export default function Upload() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center p-8">
      <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-16 max-w-lg w-full text-center">
        <h1 className="text-6xl font-bold mb-12 text-green-400">Upload Receipt → AI Credits</h1>
        <form className="space-y-8">
          <input placeholder="Your Full Name" required className="w-full p-6 rounded-xl bg-white/20 text-xl text-white placeholder-purple-300" />
          <input type="file" accept="image/*" capture="environment" required className="w-full p-6 rounded-xl bg-white/20 text-white file:bg-purple-600 file:px-6 file:py-3 file:rounded-lg" />
          <button className="w-full bg-green-600 hover:bg-green-700 text-3xl font-bold py-6 rounded-xl transition transform hover:scale-105">
            Credit Balance Instantly
          </button>
        </form>
        <p className="mt-8 text-2xl text-yellow-300">Gemini AI reads receipt → credits automatically</p>
      </div>
    </div>
  );
}