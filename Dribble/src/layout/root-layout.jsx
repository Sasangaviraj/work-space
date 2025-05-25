import React from 'react'
import { Outlet } from 'react-router'
import Footer from './footer'
import Header from './header'


const RootLayout = () => {
  return (
    <div className='relative w-full'>
        <Header/>
        <Outlet />
        <Footer/>
        
        
    </div>
  )
}

export default RootLayout