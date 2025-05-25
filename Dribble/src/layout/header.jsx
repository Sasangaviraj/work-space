import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";

import { FiBook, FiBookmark, FiSearch, FiTag } from 'react-icons/fi';
import { FaArrowTrendUp } from "react-icons/fa6";
import { PiStarHalfBold } from "react-icons/pi";

const Header = () => {
    const [isExploreOpen,setIsExploreOpen] = useState(false);
    const [isHireOpen,setIsHireOpen] = useState(false);
    const [isMenuOpen,setIsMenuOpen] = useState(false);

    const navigate = useNavigate();
    
<svg xmlns="http://www.w3.org/2000/svg" width="210" height="59" viewBox="0 0 210 59" fill="none">
    
</svg>
  return (
    <div className='sticky top-0 left-0 z-[100] bg-white p-4 lg:px-6 lg:py-4 md:px-6  flex justify-between items-center'>
        {/* Desktop Left */}
        <div className=" flex gap-20 ">
            {/* logo */}
            <div className="hidden md:block">
                <img
                    src="https://cdn.gymshark.com/images/branding/gs-icon-text.svg"
                    className=" h-5 object-contain"
                />
            </div>

            <div className=" gap-4 font-semibold  cursor-pointer hidden md:hidden  lg:flex ">
                {/* explore link */}
                <div className="relative">
                    <div className="flex gap-1 items-center hover:text-gray-400  "
                        onClick={()=>setIsExploreOpen(!isExploreOpen)}
                        >
                        <p className=' '> Explore</p>
                        <MdKeyboardArrowDown />
                    </div>
                    {isExploreOpen && (
                            <div className="absolute left-0 mt-2  bg-white w-[250px] h-[400px]  shadow-lg rounded-lg p-4">
                                <div className="mb-2">
                                    <div className="flex gap-1 items-center justify-start hover:text-gray-400 cursor-pointer ">
                                        <FaArrowTrendUp className='w-5 h-5 text-black stroke-2 group-hover:text-gray-400'/>
                                        <p className="p-2  cursor-pointer font-Mons-Sans font-semibold text-sm">Popular</p>
                                    </div>
                                    <div className="flex gap-1 items-center justify-start hover:text-gray-400 cursor-pointer ">
                                        <PiStarHalfBold className='w-5 h-5 text-black stroke-2 group-hover:text-gray-400'/>
                                        <p className="p-2  cursor-pointer font-Mons-Sans font-semibold text-sm">New and NoteWorthy</p>
                                    </div>
                                </div>

                                <hr className='border-gray-300 mb-2 font-thin ' />

                                <ul className=" flex-row gap-2  text-sm ">
                                    <li className="p-2  cursor-pointer">Product Animation</li>
                                    <li className="p-2  cursor-pointer">Web Design</li>
                                    <li className="p-2  cursor-pointer">Animation</li>
                                    <li className="p-2  cursor-pointer">Branding</li>
                                    <li className="p-2  cursor-pointer">Illustration</li>
                                    <li className="p-2  cursor-pointer">Mobie</li>
                                    <li className="p-2  cursor-pointer">Typograpghy</li>
                                    <li className="p-2  cursor-pointer">Print</li>
                                </ul>


                                
                            </div>
                    )}
                </div>
                
                {/* hire a design link */}
                <div className="relative">
                    <div className="flex gap-1 items-center hover:text-gray-400"
                        onClick={()=>setIsHireOpen(!isHireOpen)}
                        >
                        <p>Hire a designer</p>
                        <MdKeyboardArrowDown/>
                    </div>
                    {isHireOpen && (
                        <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg p-4 w-[220px] h-[170px] gap-2 ">
                            <div className="flex gap-1 items-center justify-start  hover:text-gray-400 transition duration-300">
                                <FiSearch className='w-5 h-5 text-black stroke-2 group-hover:text-gray-400'/>
                                <p className="p-2  cursor-pointer font-Mons-Sans font-semibold text-sm">Browse Freelancers</p>
                            </div>
                            <div className="flex gap-1 items-center justify-start hover:text-gray-400">
                                <FiTag className='w-5 h-5 text-black stroke-2'/>
                                <p className="p-2  cursor-pointer font-Mons-Sans font-semibold text-sm">Purchase Services</p>
                            </div>
                            <div className="flex gap-1 items-center justify-start hover:text-gray-400">
                                <FiBook className='w-5 h-5 text-black stroke-2'/>
                                <p className="p-2  cursor-pointer font-Mons-Sans font-semibold text-sm">Submit a Project Brief</p>
                            </div>
                            <div className="flex gap-1 items-center justify-start hover:text-gray-400">
                                <FiBookmark className='w-5 h-5 text-black stroke-2'/>
                                <p className="p-2  cursor-pointer font-Mons-Sans font-semibold text-sm">Post a Full Time Job</p>
                            </div>
                           
                        </div>
                    )}
                </div>

               
                <p className=" hover:text-gray-400">Find Jobs </p>
                <p className="  hover:text-gray-400">Blogs </p>
                
                

            </div>
        </div>
        {/* Mobile Left */}
        <div className=" flex gap-4 absolute left-0 p-2 items-center  md:hidden ">
            <div className=" block ">
                <HiMenuAlt2
                onClick={()=>setIsMenuOpen(!isMenuOpen)} 
                className='text-3xl' />
            </div>
            {isMenuOpen && (
                <div className="absolute bg-white border-t border-gray-200 left-0 mt-4 top-10 z-10 h-[250px] w-screen ">
                    <div>
                         <div className="relative mt-4 px-4 flex flex-col gap-3">

                            <div className="flex gap-1 items-center hover:text-gray-400  "
                                onClick={()=>setIsExploreOpen(!isExploreOpen)}
                                >
                                <p className=' font-semibold'> Explore</p>
                                <MdKeyboardArrowDown className='font-semibold' />
                            </div>
                            {isExploreOpen && (
                                    <div className="absolute left-0 mt-6  bg-white w-screen h-[400px]  shadow-lg rounded-lg p-4 z-50">
                                        <div className="mb-2">
                                            <div className="flex gap-1 items-center justify-start hover:text-gray-400 cursor-pointer ">
                                                <FaArrowTrendUp className='w-5 h-5 text-black stroke-2 group-hover:text-gray-400'/>
                                                <p className="p-2  cursor-pointer font-Mons-Sans font-semibold text-sm">Popular</p>
                                            </div>
                                            <div className="flex gap-1 items-center justify-start hover:text-gray-400 cursor-pointer ">
                                                <PiStarHalfBold className='w-5 h-5 text-black stroke-2 group-hover:text-gray-400'/>
                                                <p className="p-2  cursor-pointer font-Mons-Sans font-semibold text-sm">New and NoteWorthy</p>
                                            </div>
                                        </div>

                                        <hr className='border-gray-300 mb-2 font-thin ' />

                                        <ul className=" flex-row gap-2  text-sm ">
                                            <li className="p-2  cursor-pointer">Product Animation</li>
                                            <li className="p-2  cursor-pointer">Web Design</li>
                                            <li className="p-2  cursor-pointer">Animation</li>
                                            <li className="p-2  cursor-pointer">Branding</li>
                                            <li className="p-2  cursor-pointer">Illustration</li>
                                            <li className="p-2  cursor-pointer">Mobie</li>
                                            <li className="p-2  cursor-pointer">Typograpghy</li>
                                            <li className="p-2  cursor-pointer">Print</li>
                                        </ul>


                                        
                                    </div>
                            )}

                            {/* hire a design link */}
                            <div className="relative">
                                <div className="flex gap-1 items-center hover:text-gray-400"
                                    onClick={()=>setIsHireOpen(!isHireOpen)}
                                    >
                                    <p className='font-semibold'>Hire a designer</p>
                                    <MdKeyboardArrowDown className='font-semibold'/>
                                </div>
                                {isHireOpen && (
                                    <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg p-4 w-[220px] h-[170px] gap-2 ">
                                        <div className="flex gap-1 items-center justify-start  hover:text-gray-400 transition duration-300">
                                            <FiSearch className='w-5 h-5 text-black stroke-2 group-hover:text-gray-400'/>
                                            <p className="p-2  cursor-pointer font-Mons-Sans font-semibold text-sm">Browse Freelancers</p>
                                        </div>
                                        <div className="flex gap-1 items-center justify-start hover:text-gray-400">
                                            <FiTag className='w-5 h-5 text-black stroke-2'/>
                                            <p className="p-2  cursor-pointer font-Mons-Sans font-semibold text-sm">Purchase Services</p>
                                        </div>
                                        <div className="flex gap-1 items-center justify-start hover:text-gray-400">
                                            <FiBook className='w-5 h-5 text-black stroke-2'/>
                                            <p className="p-2  cursor-pointer font-Mons-Sans font-semibold text-sm">Submit a Project Brief</p>
                                        </div>
                                        <div className="flex gap-1 items-center justify-start hover:text-gray-400">
                                            <FiBookmark className='w-5 h-5 text-black stroke-2'/>
                                            <p className="p-2  cursor-pointer font-Mons-Sans font-semibold text-sm">Post a Full Time Job</p>
                                        </div>
                                    
                                    </div>
                                )}
                            </div>

                            <p className=" hover:text-gray-400 font-semibold">Find Jobs </p>

                            <p className="  hover:text-gray-400 font-semibold">Blogs </p>

                        </div>
                    </div>

                </div>
            )}



            {/* logo */}
            <div className="block  ">
                <img
                    src="https://cdn.gymshark.com/images/branding/gs-icon-text.svg"
                    className=" h-5 object-contain"
                />
            </div>
        </div>




        {/* Desktop Right */}
        <div className="flex gap-2 items-center ">
            <button className='bg-white hover:bg-gray-400 font-semibold rounded-4xl py-3 px-6  cursor-pointer hidden  md:hidden'
                onClick={()=> navigate('sing-up')}>
                Sing up
            </button>
            <button className='bg-gray-900 hover:bg-gray-400 hover:border-gray-400 text-white font-semibold  rounded-4xl py-2 px-5 lg:py-3 lg:px-6 cursor-pointer ' 
                onClick={()=>navigate('/login')}>
                Log in
            </button>
        </div>
        {/* Mobile Right */}
    </div>
  )
}

export default Header