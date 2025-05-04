import React from 'react'
import { Outlet } from 'react-router'
import RightMenu from '../components/RightMenu'
import ScrollToTop from '../components/ScrollToTop'
import Sidebar from '../components/Sidebar'
const MainLayout = () => {
  return (
    <div className='flex max-h-[1024px]'>
        <ScrollToTop/>
        
        <Sidebar />

        <main>
        <Outlet/>
        </main>

        <RightMenu/>
        
    </div>
  )
}

export default MainLayout
