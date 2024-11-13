import React from 'react'
import Card from '../../components/cards'

type Category = "Chest"| "Back"| "Abs"| "Legs"| "Others"
interface CardProps {
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
  return (
    <section className="">
      <div className='p-10 w-full flex justify-center items-center bg-green-50'>
        <h1 className="text-3xl">Welcome to <span className='font-bold text-5xl'>HowToFit<span className='text-red-500 text-8xl'>.</span></span></h1>
      </div>
      <div className='p-10 w-full flex justify-center items-center space-x-3 space-y-3 flex-wrap'>
        <Card
        id={"nfsjdnfjk"}
        title={"hello title"}
        describe={"kdfnlsdjnliknjgilsujnviu"}
        image={"https://images.unsplash.com/photo-1721332153282-3be1f363074d?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        variant={'elevated'}
        />
                <Card
                id={"nfsjdnfjk"}
        title={"hello title"}
        describe={"kdfnlsdjnliknjgilsujnviu"}
        image={"https://images.unsplash.com/photo-1721332153282-3be1f363074d?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        variant={'elevated'}
        />

<Card
id={"nfsjdnfjk"}
        title={"hello title"}
        describe={"kdfnlsdjnliknjgilsujnviu"}
        image={"https://images.unsplash.com/photo-1721332153282-3be1f363074d?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        variant={'elevated'}
        />
                <Card
                id={"nfsjdnfjk"}
        title={"hello title"}
        describe={"kdfnlsdjnliknjgilsujnviu"}
        image={"https://images.unsplash.com/photo-1721332153282-3be1f363074d?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        variant={'elevated'}
        />
                <Card
                id={"nfsjdnfjk"}
        title={"hello title"}
        describe={"kdfnlsdjnliknjgilsujnviu"}
        image={"https://images.unsplash.com/photo-1721332153282-3be1f363074d?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        variant={'elevated'}
        />
      </div>
  
    </section>
  )
}

export default Home
