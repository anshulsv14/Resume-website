import React from 'react'

import { Outlet } from 'react-router-dom'
import TopNav from './components/Topmenu'


const Layout = () => {
  return (
    <>
     <TopNav/>
      <Outlet />

    
    </>
  )
}

export default Layout