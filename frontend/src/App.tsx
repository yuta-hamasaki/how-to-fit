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
                  Find the best training videos for you!
                </h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  HowToFit. - A platform that makes it easy to find the best workout videos for your fitness goals.
                </p>
              </div>
              <div className="w-full flex md:flex-row flex-col justify-center items-center">
                <Link to="/signup" className='text-white bg-orange-400 py-2 px-5 font-bold rounded-full m-2 w-[70%] md:w-[150px]'>
                  <button >Register</button>
                </Link>
                <Link to="/login" className="border border-gray-600 text-gray-600 py-2 px-5 font-bold rounded-full m-2 w-[70%] md:w-[150px]">
                  <button>Login</button>
                </Link>
              </div>
            </div>
          </div>
    </section>
      {/* about */}
      <div className="w-full flex flex-col justify-center items-center p-6 border border-blue-200 text-center">
        <h2 className="font-bold text-2xl">Features</h2>
        <p className='text-[16px] text-gray-600'>
          このアプリはbra bra bra blablalbalbalbalblabalbalblbalblablablab
        </p>
        <div className="flex flex-wrap items-center justify-center">
          <div className="
          flex
          justify-center 
          items-center 
          flex-col
          bg-slate-200 
          m-2 
          rounded-md
          w-[300px]
          ">
            <PlayCircle/>
            <h3 className="text-[17px]">Selected Video</h3>
            <p className="text-sm text-gray-500">You can find recommended trainning videos from Youtube.</p>
          </div>
          <div className="
          flex
          justify-center 
          items-center 
          flex-col
          bg-slate-200 
          m-2 
          rounded-md
          w-[300px]
          ">
            <Users/>
            <h3 className="text-[17px]">user</h3>
            <p className="text-sm text-gray-500">aikfjnisjn</p>
          </div>
          <div className="
          flex
          justify-center 
          items-center 
          flex-col
          bg-slate-200 
          m-2 
          rounded-md
          w-[300px]
          ">
            <Dumbbell/>
            <h3 className="text-[17px]">Lot of trainings</h3>
            <p className="text-sm text-gray-500">nsvljhbglsfjhsnljkrgn</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;