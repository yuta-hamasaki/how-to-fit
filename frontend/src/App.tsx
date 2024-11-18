import './App.css';
import { Link } from 'react-router-dom';
import { PlayCircle, Users, Dumbbell } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="space-y-4 max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-gray-900">
                Find the best training videos
                <span className="text-orange-500"> for you!</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-[700px] mx-auto">
                HowToFit - Your personal fitness journey starts here. Discover curated workout videos tailored to your goals.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 w-full max-w-md justify-center">
              <Link 
                to="/signup" 
                className="w-full md:w-auto"
              >
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-full font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                  Get Started
                </button>
              </Link>
              <Link 
                to="/login" 
                className="w-full md:w-auto"
              >
                <button className="w-full border-2 border-gray-900 hover:bg-gray-100 text-gray-900 py-3 px-8 rounded-full font-semibold text-lg transition-all duration-200">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose HowToFit?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              トレーニング動画を簡単に見つけ、効果的なワークアウトを始めましょう。
              あなたの目標達成をサポートする機能が揃っています。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <PlayCircle className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Selected Videos
              </h3>
              <p className="text-gray-600">
                厳選されたYouTubeトレーニング動画で、効果的なワークアウトを見つけることができます。初心者から上級者まで、あなたのレベルに合わせた動画をご用意しています。
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Community Support
              </h3>
              <p className="text-gray-600">
                同じ目標を持つユーザーとつながり、モチベーションを高めましょう。経験豊富なトレーナーのアドバイスも受けられます。
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Dumbbell className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Diverse Workouts
              </h3>
              <p className="text-gray-600">
                筋トレ、ヨガ、有酸素運動など、様々なトレーニングメニューをご用意。あなたの好みや目的に合わせて選択できます。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-orange-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Ready to start your fitness journey?
          </h2>
          <Link to="/signup">
            <button className="bg-white text-orange-500 py-3 px-8 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg">
              Start Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default App;