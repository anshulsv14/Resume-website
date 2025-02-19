import React from 'react'

import { Outlet } from 'react-router-dom'
import TopNav from './components/Topmenu'
import Footer from './components/Footer'


const Layout = () => {
  return (
    <>
     <TopNav/>
      <Outlet />
     <Footer/>
    
    </>
  )
}

export default Layout