import './App.css';
import { Link } from 'react-router-dom';
import { Search, PlayCircle, Users, Dumbbell } from 'lucide-react'
function App() {

  return (
    <div className='flex justify-center items-center flex-col'>
    {/* hero */}
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 ">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center justify-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-xl md:text-2xl lg:text-3xl/none">
                  あなたに最適なトレーニング動画を見つけよう
                </h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  FitnessFinder - あなたのフィットネス目標に合わせた、最高のトレーニング動画を簡単に探せるプラットフォーム
                </p>
              </div>
              <div className="w-full flex md:flex-row flex-col justify-center items-center">
                <Link to="/signup" className='text-white bg-orange-400 py-2 px-5 font-bold rounded-full m-2 w-[70%] md:w-[150px]'>
                  <button >はじめる</button>
                </Link>
                <Link to="/login" className="border border-gray-600 text-gray-600 py-2 px-5 font-bold rounded-full m-2 w-[70%] md:w-[150px]">
                  <button>ログイン</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      {/* about */}
      <div className="border border-blue-200">
        <h2>What's How to Use</h2>
      </div>

    </div>
  );
}

export default App;