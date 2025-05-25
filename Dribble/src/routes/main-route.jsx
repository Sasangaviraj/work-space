import React from 'react'
import { Route } from 'react-router';
import { BrowserRouter, Routes } from 'react-router-dom'
import Home from '../pages/home';
import About from '../pages/about';
import RootLayout from '../layout/root-layout';
import SingUp from '../pages/sing-up';
import Login from '../pages/login';



const MainRoute = () => {
  return(
   <BrowserRouter>
    <Routes>
      <Route Component={RootLayout}>
          <Route path='/' Component={Home} />
          <Route path='about' Component={About} />
      </Route>
      <Route path='sing-up' Component={SingUp}/>
      <Route path='login' Component={Login}/>
       
       
    </Routes>
  </BrowserRouter>
  );
}

export default  MainRoute