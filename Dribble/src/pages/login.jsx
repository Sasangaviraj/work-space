import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

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
           
                   <div className="w-full lg:pl-[50px] bg-white min-h-screen flex items-center px-4">
                    <div className="flex flex-col mx-auto justify-center items-start w-full max-w-[450px]">
                        <h1 className='text-2xl font-bold mb-4 w-full text-left'>Sign in to Dribbble</h1>
                        <button className='text-black text-sm mt-4 font-semibold border border-gray-300 bg-white rounded-full px-10 py-4 flex gap-4 items-center justify-center w-full cursor-pointer'>
                            <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google" className="w-4 h-4" />
                            Sign up with Google
                        </button>

                        <div className="flex items-center my-4 w-full">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span className="mx-2 text-gray-500 text-sm text-nowrap">or sign in with email</span>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>

                        <div className='w-full'>
                            <div className="flex flex-col gap-3 mb-4 w-full">
                                <p className='text-sm font-semibold'>Username or Email</p>
                                <input type="text" placeholder=''className='text-sm border border-gray-300 hover:border-rose-300 w-full rounded-2xl py-4 px-6'/>
                            </div>

                            <div className="flex flex-col gap-3 w-full">
                                <div className="flex items-center justify-between">
                                    <p className='text-sm font-semibold'>Password</p>
                                    <a href="#" className='underline text-sm'>Forgot?</a>
                                </div>
                                    <input type="password" placeholder='' className='text-sm border border-gray-300 hover:border-rose-300 w-full rounded-2xl py-4 px-6 mb-8'/>
                            </div>

                        
                        </div>

                         <div className="flex flex-col gap-3 mb-4 w-full">
                               
                                <input type="text" placeholder='Sing Up'className='text-sm bg-black font-bold cursor-pointer text-white text-center text-white  w-full rounded-full py-4 px-6'/>
                            </div>

                        <div className="text-gray-500 text-xs w-full text-center space-y-3">
                            <p className="mt-4 text-xs">
                                Don't have an account? <a href="#" className="underline font-medium" onClick={()=>navigate('/sing-up')}>Sign up</a>
                            </p>
                        </div>

                     </div>
                  </div>
            </div>
        </div>
    )
}

export default Login