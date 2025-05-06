import React from 'react'
import { Outlet } from 'react-router'
import RightMenu from '../components/RightMenu'
import ScrollToTop from '../components/ScrollToTop'
import Sidebar from '../components/Sidebar'
const MainLayout = () => {
  return (
    <div className='flex max-h-[1024px] max-w-[1440px] mx-auto scrollbar-thin overflow-x-scroll scroll-smooth'>
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
