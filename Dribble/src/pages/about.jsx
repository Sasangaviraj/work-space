import React, { useState } from 'react'
import { FaHeart } from 'react-icons/fa6'

const About = () => {
  const [count,setCount] =useState(0)
  const [like,setLike] = useState(1)

  const Decrement =()=>{
    setCount(count-1)
  }

  const Increment =()=>{
    setCount(count+1)
  }
  
  const LoveBirds =()=>{
      setLike(like+1)
  }
  



  return (
    <div className=' items-center justify-center grid   gap-4'>
      <div className="flex-row bg-rose-400">
      <h1 className='text-white w-[300px] justify-center items-center p-8  font-bold font-Mons-Sans bg-rose-300 mb-2'>Viraj & Shachini Happy Day!</h1>
      <div className="flex gap-2 items-center justify-center">
        <FaHeart className='text-red-600 w-5 h-5 justify-start'/>
        <p>{like}</p>
      </div>
      
      </div>
       
        <button
        onClick={Decrement}
        className="bg-rose-300 shadow-amber-200 w-[150px] cursor-pointer">In</button>
        <button 
        onClick={Increment}
        className="bg-rose-300 shadow-amber-200 w-[150px] cursor-pointer">Out</button>
        <button 
        onClick={LoveBirds}
        className="bg-red-500 w-[300px] rounded-full text-white font-Mons-Sans items-center p-8  cursor-pointer">Happy Wedding Life Viraj & Shachini</button>
        <p className='bg-rose-300 text-white w-[150px]'>{count}</p>
    </div>
  )
}

export default About