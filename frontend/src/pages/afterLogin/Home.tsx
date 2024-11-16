import React ,{useState, useEffect}from 'react'
import Card from '../../components/cards'
import axios from 'axios';
import { Link} from 'react-router-dom';

type Category = "Chest"| "Back"| "Abs"| "Legs"| "Others"
interface Menu {
  id:string;
  title?: string;
  describe?: string;
  image?: string;
  imageAlt?: string;
  onClick?: () => void;
  className?: string;
  hoverable?: boolean;
  url?: string,
  category?: Category,
  variant?:'bordered' | 'elevated';
}



const Home = () => {
const [data, setData] = useState<Menu[]>()

useEffect(()=>{
  const getData = async()=>{
    try{
      const res = await axios.get('api/menus/')
      return setData(res.data)
    }catch(err){
      console.error(err)
    }
  }
  getData()
})
  return (
    <section className="">
      <div className='p-10 w-full flex justify-center items-center bg-green-50'>
        <h1 className="text-3xl">Welcome to <span className='font-bold text-5xl'>HowToFit<span className='text-red-500 text-8xl'>.</span></span></h1>
      </div>
      <div className='p-10 w-full flex justify-center items-center space-x-3 space-y-3 flex-wrap'>
      {data?.map((item) => (
        <Link to={`${item.id}`}>
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              describe={item.describe}
              image={item.image}
              variant={item.variant || 'elevated'}
            />
          </Link>
        ))}

      </div>
  
    </section>
  )
}

export default Home
