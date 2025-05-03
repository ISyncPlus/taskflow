import React from 'react'
import LeftSidebar from '../components/LeftSidebar'
import { Outlet } from 'react-router'
import RightSideBar from '../components/RightSideBar'
import ScrollToTop from '../components/ScrollToTop'
const MainLayout = () => {
  return (
    <div className='flex'>
        <ScrollToTop/>
        
        <LeftSidebar />

        <div>
        <Outlet/>
        </div>

        <RightSideBar/>
        
    </div>
  )
}

export default MainLayout
