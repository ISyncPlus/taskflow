import React from 'react'
import LeftSidebar from '../components/LeftSidebar'
import { Outlet } from 'react-router'
import RightSideBar from '../components/RightSideBar'
import ScrollToTop from '../components/ScrollToTop'
const MainLayout = () => {
  return (
    <div className='flex max-h-[1024px]'>
        <ScrollToTop/>
        
        <LeftSidebar />

        <main>
        <Outlet/>
        </main>

        <RightSideBar/>
        
    </div>
  )
}

export default MainLayout
