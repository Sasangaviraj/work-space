import React from 'react'
import { FaBookmark, FaEye, FaHeart } from "react-icons/fa";

const MiddleCart = ({image,title,tag,logo,likes,views}) => {
  return (
    <div className='rounded-2xl lg:h-[350px] :w-[460px]  bg-white px-6 py-3'>
      <div className=" ">
        <div className='relative group overflow-hidden rounded-xl  cursor-pointer'>
            <img src={image}
            alt="" 
            className='w-full h-[300px] object-cover transition-tranform duration-300    ' />

            {/*the overlay image hover  */}
            <div className="absolute inset-0 flex  p-4 justify-between items-end
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">

                  <div className="text-sm font-semibold text-white ">
                    <p>Brand Name</p> 

                  </div>

                  <div className="flex  justify-end items-end gap-2 ">
                    <button className="bg-white rounded-full p-3 h-10 w-10 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200">
                          <FaBookmark size={20} className="text-gray-800" />
                    </button>

                    
                    <button className="bg-white rounded-full p-3 h-10 w-10 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200">
                      <FaHeart size={20} className="text-gray-800" />
                    </button>
                  </div>
            </div>


        </div>

        
    
       

       <div className=" flex justify-between  items-center mt-2 px-1">
          <div className='flex gap-2 items-center justify-center '>
            <img src={logo} alt="" className='w-5 h-5 bg-blue-300 rounded-full p-1 '/>
              <p className='text-xs font-semibold '>{title}</p>
              <p className='text-xs text-white font-semibold bg-gray-400 px-2 py-0.5 rounded-lg  '>{tag}</p>
          </div>

          <div className="flex items-center  text-xs text-gray-500 space-x-2 ">
          <div className="flex items-center">
            <FaHeart size={16} className="mr-1  hover:text-rose-400 cursor-pointer" /> {likes}
          </div>
          <div className="flex items-center">
            <FaEye size={16} className="mr-1" /> {views}
          </div>
        </div>
       </div>

      </div>
      </div>
        

    
  )
}

export default MiddleCart ;