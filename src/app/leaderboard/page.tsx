export default function Leaderboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 p-16">
      <h1 className="text-9xl font-bold text-center mb-20 text-cyan-300">NFT Diamond Badges</h1>
      <div className="grid md:grid-cols-3 gap-16 max-w-7xl mx-auto">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-16 text-center transform hover:scale-105 transition">
          <p className="text-9xl">1st</p>
          <h2 className="text-5xl mt-4">Dr. Mrs. Adebayo</h2>
          <p className="text-7xl text-yellow-400 mt-6">₦12.5M</p>
        </div>
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-16 text-center transform hover:scale-105 transition">
          <p className="text-9xl">2nd</p>
          <h2 className="text-5xl mt-4">Chief Opute</h2>
          <p className="text-7xl text-yellow-400 mt-6">₦8.3M</p>
        </div>
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-16 text-center transform hover:scale-105 transition">
          <p className="text-9xl">3rd</p>
          <h2 className="text-5xl mt-4">Engr. John</h2>
          <p className="text-7xl text-yellow-400 mt-6">₦6.1M</p>
        </div>
      </div>
    </div>
  );
}