import React from 'react'
import { Outlet } from 'react-router'
const HomePage = () => {
  return (
    <div className='w-[803px] flex justify-center mt-[40vh]'>
      <section className='flex flex-col items-center justify-center'>
        <img src="/logo.svg" alt="logo" className='h-15 w-15 mb-4'/>    
          <h3 className='font-bold text-2xl mb-1'>Welcome Back, Muhammed Ali!</h3>
            <p className='text-[#82808F]'>What task are you working on today?</p>
        
      </section>
        
      
    </div>
  )
}

export default HomePage
