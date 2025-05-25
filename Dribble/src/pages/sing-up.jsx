import React from 'react'
import google from '../assets/google.png'
import {  useNavigate } from 'react-router'

const SingUp = () => {
  return (
    <div className='w-full'>
        <SingUpMain/>

    </div>
  )
}

export default SingUp


const SingUpMain = ()=>{

    const navigate = useNavigate();
    return(
        <div className="w-full lg:pl-4 ">
            <div className="w-full relative">
                {/* left side */}
                <div className="hidden lg:block bg-blue-500 fixed top-0 left-0 w-[400px] z-[99] overflow-x-hidden overflow-y-auto h-screen">
                    <div className="hidden lg:flex flex-col justify-between fixed top-0 left-0 w-[400px] h-full bg-blue-950 text-white">
                        <div className="p-10 flex flex-col ">
                            <h1 className="text-4xl font-sembold mb-75"><span className='font-bold'>WIX</span> STUDIO</h1>
                            <div className="">
                                <h2 className="text-xl font-medium">The new Figma to Wix Studio plugin</h2>
                                <a href="#" className="text-sm mt-2 inline-block underline">Learn more →</a>
                            </div>
                        </div>
                        <img 
                            src="https://cdn.dribbble.com/uploads/61393/original/1ec5a9f0608ddd0c5f806f4782779930.jpg?1742324786"
                            alt="Wix Studio"
                            className="w-full object-cover"
                        />
                    </div>
                </div>

                {/* rightside */}
           
                    <div className="w-full lg:pl-[50px] min-h-screen bg-white flex items-center px-4">
                        <div className="flex flex-col items-center justify-center w-full max-w-[450px] mx-auto">
                            <h1 className='text-2xl font-bold mb-6 text-left w-full'>Sign up to Dribbble</h1>

                            <button className='text-white text-sm font-semibold bg-black rounded-full px-10 py-4 flex gap-4 items-center justify-center w-full mb-4 cursor-pointer hover:bg-blue-950'>
                                <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google" className="w-4 h-4" />
                                Sign up with Google
                            </button>

                            <div className="flex items-center my-4 w-full">
                                <div className="flex-grow border-t border-gray-300"></div>
                                <span className="mx-2 text-gray-500 text-sm">or</span>
                                <div className="flex-grow border-t border-gray-300"></div>
                            </div>

                            <button className="border border-gray-300 rounded-full text-black px-10 py-3 w-full mb-6">
                            Continue with email
                            </button>

                            <div className="text-gray-500 text-xs lg:text-sm text-center w-full mb-4">
                                By creating an account you agree with our 
                                <a href="#" className='underline'> Terms of Service</a>, 
                                <a href="#" className='underline'> Privacy Policy</a>, and our default 
                                <a href="#" className='underline'> Notification Settings.</a>
                            </div>

                            <div className="text-center text-xs lg:text-sm  text-gray-700">
                                Already have an account? <a href="#" className="underline" onClick={()=> navigate('/login')}>Sign In</a>
                            </div>
                        </div>
                     </div>

                    
            
            </div>


        </div>
    )
}