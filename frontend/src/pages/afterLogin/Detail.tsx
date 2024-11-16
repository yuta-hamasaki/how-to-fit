import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link, useParams} from 'react-router-dom';

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

const Detail = () => {
  let {id} = useParams()
  const [data, setData] = useState<Menu>()

useEffect(()=>{
  const getData = async()=>{
    try{
      const res = await fetch(`/api/menus/${id}`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
      })
      const data = await res.json()
      console.log(data)
      setData(data)
    }catch(err){
      console.error(err)
    }
  }
  getData()
})
  return (
    <div className='flex flex-col justify-center items-center '>
      <img src={data?.image} alt="img" height={100} className="w-[80%]"/>
      <h1 className='font-bold text-2xl'>{data?.title}</h1>
      <p className='text-slate-800'>
      {data?.describe}
      </p>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${data?.url}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      ></iframe>
    </div>

  )
}

export default Detail
