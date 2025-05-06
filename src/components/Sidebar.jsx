import React from 'react'
import { PiCaretDownBold } from 'react-icons/pi'
import { FiFileText } from "react-icons/fi";
import { FaGear } from "react-icons/fa6";
import { FaRegSquare } from "react-icons/fa6";
import { NavLink } from 'react-router';

const Sidebar = () => {
  return (

    <div>
        <aside className="flex flex-col w-[257px] h-screen 2xl:h-full pt-7 pb-4 pl-8 border-r-1 border-[#E6E4F0] overflow-y-scroll scrollbar-thin">
            <NavLink to="/" className='flex items-center'>
                <img src="/logo.svg" alt="TaskFlow" className="inline"/>
                <h1 className="text-2xl inline ml-2 font-[500]">TaskFlow</h1>
            </NavLink>

                {/* Section 1 */}
            <section className="flex flex-col gap-2 my-7 text-[#9896A3] pr-10 w-26.5 flex-1">

                <NavLink to="/overview" className="flex items-center w-49 p-1">
                <img src="/Category.svg" alt="Overview" className='w-5.5 h-5.5' />
                <p className="ml-2 text-[16px] mt-1 hover:opacity-85 hover:cursor-pointer">
                    Overview  
                </p>
                <p><PiCaretDownBold className='mt-1 text-lg transform translate-x-21'/></p>
                </NavLink>

                <NavLink to="calendar" className='flex items-center w-49 p-1'>
                <img src="/Calendar.svg" alt="Calendar" className='w-5.5 h-5.5' />
                <p className="ml-2 text-[16px] mt-1 hover:opacity-85 hover:cursor-pointer">
                    Calendar  
                </p>
                
                
                </NavLink>

                <NavLink to="analytics" className='flex items-center w-49 p-1'>
                <img src="/Graph.svg" alt="Analytics" className='w-5.5 h-5.5' />
                <p className="ml-2 text-[16px] mt-1 hover:opacity-85 hover:cursor-pointer">
                    Analytics 
                </p>
                
                </NavLink>

                <NavLink to="activity" className='flex items-center w-49 p-1'>
                <img src="/Activity.svg" alt="Activity" className='w-5.5 h-5.5' />
                <p className="ml-2 text-[16px] mt-1 hover:opacity-85 hover:cursor-pointer">
                    Activity  
                </p>
                
                
                </NavLink>

                <NavLink to="/projects" className='flex items-center w-53 p-1 bg-[#5577FF] rounded-lg text-white py-[11px] px-2.5 transform -translate-x-1.5'>
                <img src="/Folder.svg" alt="folder-icon" className='w-5.5 h-5.5' />
                <p className="ml-2 text-[16px] mt-1 hover:opacity-85 hover:cursor-pointer">
                    Projects  
                </p>
                
                </NavLink>
                
            </section>

            {/* Projects Section */}
            <section className="max-w-[12.375rem]">
                <header className="w-full border-t-1 border-[#E6E4F0] flex justify-between items-center pt-3 mb-5">
                <h3 className="text-[#D3D2DC] text-[1rem]">
                PROJECTS
                </h3>
                <img src="/Add.svg" alt="add-more" className="w-4 h-4 hover:cursor-pointer hover:scale-110 transition-all duration-500" />
                </header>

                <main className="flex flex-col gap-2.5">
                <figure className="flex justify-between items-center h-8">
                    <div className="flex items-center">
                    <img src="/Rectangle 2.svg" alt="flower-img" className="w-8 h-8 rounded-2xl"/>
                    <p className="ml-1">Flower Shop</p>

                    </div>
                    
                    <div className="flex items-center">
                    
                    <p className="flex-2 text-[0.75rem] text-[#9896A3] inline ml-1">23</p>

                    </div>

                </figure>

                <figure className="flex justify-between items-center h-8">
                    <div className="flex items-center">
                    <img src="/Rectangle 3.svg" alt="cloth-img" className="w-8 h-8 rounded-2xl"/>
                    <p className="ml-1">Cloth</p>

                    </div>
                    
                    <div className="flex items-center">
                    <img src="/Video.svg" alt="camera-icon" className="w-5.5 h-5.5 "/>
                    <p className="flex-2 text-[0.75rem] text-[#9896A3] inline ml-1">345</p>

                    </div>

                </figure>

                <figure className="flex justify-between items-center h-8">
                    <div className="flex items-center">
                    <img src="/Rectangle 4.svg" alt="gamer-img" className="w-8 h-8 rounded-2xl"/>
                    <p className="ml-1">Gamer Boy</p>

                    </div>
                    
                    <div className="flex items-center">
                    <img src="/Wallet.svg" alt="wallet-icon" className="w-5.5 h-5.5 "/>
                    <p className="flex-2 text-[0.75rem] text-[#9896A3] inline ml-1">568</p>

                    </div>

                </figure>
                </main>
            </section>

            {/* Tasks Section */}
            {/* Tasks */}
            <section className="flex-2 max-w-[12.375rem] mt-5">
                <header className="w-full border-t-1 border-[#E6E4F0] flex justify-between items-center pt-3 mb-5">
                <h3 className="text-[#D3D2DC]">
                TASKS
                </h3>
                <img src="/Add.svg" alt="add-more" className="w-4 h-4 hover:cursor-pointer hover:scale-110 transition-all duration-500" />
                </header>

                <main className="flex flex-col gap-2.5">

                <figure className="flex justify-between items-center h-8">
                    <div className='flex items-center'>
                    <FiFileText className="fill-[#ffd6e8] stroke-[#ff80b9] w-5.5 h-6"/>
                    <p className='text-[#9896A3] ml-1'>Manage Finances</p>
                    </div>

                    <p className='text-xs text-[#9896A3]'>52</p>
                </figure>

                <figure className="flex justify-between items-center h-8">
                    <div className='flex items-center'>
                    <FiFileText className="fill-[#d4f1fd] stroke-[#57d5ff] w-5.5 h-6"/>
                    <p className='text-[#9896A3] ml-1'>Integrate ChatGPT</p>
                    </div>

                    <p className='text-xs text-[#9896A3]'>15</p>
                </figure>

                <figure className="flex justify-between items-center h-8">
                    <div className='flex items-center'>
                    <FiFileText className="fill-[#dbd5fc] stroke-[#8876f3] w-5.5 h-6"/>
                    <p className='text-[#9896A3] ml-1'>Redesign the logo</p>
                    </div>

                    <p className='text-xs text-[#9896A3]'>5</p>
                </figure>

                <figure className="flex justify-between items-center h-8">
                    <div className='flex items-center'>
                    <FiFileText className="fill-[#bff8e8] stroke-[#42e0b4] w-5.5 h-6"/>
                    <p className='text-[#9896A3] ml-1'>Invest in DOGE</p>
                    </div>

                    <p className='text-xs text-[#9896A3]'>5</p>
                </figure>
                </main>
                <section/>

                {/* Profile */}
                <section className="border rounded-sm border-[#E6E4F0] p-2 mt-47 w-56 transform -translate-x-5">
                <main className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <figure className="relative w-12 h-12">
                            <img src="./src/img/profile.png" alt="profile" className="w-12 h-12 relative"/>
                            <div className="border-white absolute bottom-0 -right-1 border-2 rounded-sm rounded-b-none bg-white transform translate-y-1">
                            <FaRegSquare className="fill-[#00B884] bg-[#00B884] rounded-xs w-3 h-3 transform "/>

                            </div>  
                        </figure>
                        
                        <div>
                            <p className="font-[500]">Muhammed Ali</p>
                            <p className="text-[#A0A0A3] font-[400]">Free Account</p>
                        </div>
                    
                    </div>
                    <FaGear/>

                </main>

                </section>
                
            </section>
      </aside>
      
    </div>
  )
}

export default Sidebar
