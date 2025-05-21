import React from 'react'
import { PiCaretRightBold } from 'react-icons/pi'
import { FiFileText } from "react-icons/fi";
import { FiSidebar } from "react-icons/fi";
import { FaGear } from "react-icons/fa6";
import { FaRegSquare } from "react-icons/fa6";
import { NavLink } from 'react-router';
import { useState } from 'react';
import { LuNotepadText } from "react-icons/lu";
import { LuListTodo } from "react-icons/lu";
import { HiFolderMinus } from "react-icons/hi2";
import { MdAutoGraph } from "react-icons/md";
import { RiPieChart2Fill } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";

const Sidebar = ({ isFull, setIsFull, toggleFull }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => {
        setIsOpen((prev)=> !prev);
    };

  return (

    <div>
        <aside className={`flex flex-col overflow-hidden h-screen 2xl:h-full pt-3 pb-4 px-5 border-r-1 border-[#E6E4F0] overflow-y-scroll overflow-x-clip scrollbar-thin`}>
            <div className="mb-7">
                <FiSidebar onClick={()=> toggleFull()} className='h-7 w-8 stroke-[#4e4e50] hover:cursor-pointer' />
            </div>
           

            <NavLink to="/" className='flex items-center'>
                <img src="/logo.svg" alt="TaskFlow" className="inline"/>
                <h1 className={`${!isFull ? 'hidden' : 'inline'} text-2xl ml-2 font-[500]`}>TaskFlow</h1>
            </NavLink>

                {/* Section 1 */}
            <section className="flex flex-col gap-2 mt-7 mb-5 text-[#9896A3] pr-3 w-full flex-1 ">

                <section onClick={()=> toggleOpen()} className={`${ !isFull ? 'pointer-events-none' : ''} flex items-center w-49 p-1 hover:cursor-pointer`}>
                <img src="/Category.svg" alt="Overview" className={`${!isFull ? 'ml-1' : ''} w-5.5 h-5.5`} />
                <p  className={`${!isFull ? 'hidden' : ''} ml-2 text-[16px] mt-1 hover:opacity-85 hover:cursor-pointer`}>
                    Overview  
                </p>
                <p><PiCaretRightBold className={`mt-1 text-lg transform translate-x-23 transition-transform duration-300 ${!isFull ? 'hidden' : ''} ${isOpen ? 'rotate-90' : ''} `}/></p>
                </section>
                {/* <hr className={` ${isFull ? 'hidden' : 'w-12 text-[#E6E4F0] transform -translate-x-1.5 mt-2'}`}/> */}

                    {/* overview content */}
                
                <div className={`transition-all ease-in-out duration-300 origin-top ${!isOpen || !isFull ? 'hidden' : 'flex'}  flex-col gap-2`}> 
                    <NavLink to="calendar"  className={({ isActive })=>
                    `flex items-center w-53 p-1  transition-all duration-200  py-[11px] px-2.5 transform -translate-x-1.5 ${isActive ? 'bg-[#5577FF] text-white rounded-lg' : 'text-[#9896A3]'}`
                    }>
                        <FaCalendarAlt className="w-5 h-5" />
                        <p className="ml-2 text-[16px] mt-1 hover:opacity-85 hover:cursor-pointer">
                            Calendar  
                        </p>
                
                
                    </NavLink>

                    <NavLink to="analytics"  className={({ isActive })=>
                    `flex items-center w-53 p-1  transition-all duration-200  py-[11px] px-2.5 transform -translate-x-1.5 ${isActive ? 'bg-[#5577FF] text-white rounded-lg' : 'text-[#9896A3]'}`
                    }>
                        <RiPieChart2Fill className="w-5.5 h-5.5" />
                        <p className="ml-2 text-[16px] mt-1 hover:opacity-85 hover:cursor-pointer">
                            Analytics 
                        </p>
                    
                    </NavLink>

                    <NavLink to="activity"  className={({ isActive })=>
                    `flex items-center w-53 p-1  transition-all duration-200  py-[11px] px-2.5 transform -translate-x-1.5 ${isActive ? 'bg-[#5577FF] text-white rounded-lg' : 'text-[#9896A3]'}`
                    }>
                        <MdAutoGraph className="w-6.5 h-6.5" />
                        <p className="ml-2 text-[16px] mt-1 hover:opacity-85 hover:cursor-pointer">
                            Activity  
                        </p>
                    
                    
                    </NavLink>

                    <NavLink to="/projects" className={({ isActive })=>
                    `flex items-center w-53 p-1  transition-all duration-200  py-[11px] px-2.5 transform -translate-x-1.5 ${isActive ? 'bg-[#5577FF] text-white rounded-lg' : 'text-[#9896A3]'}`
                    }>
                        <HiFolderMinus className="w-5.5 h-5.5" />
                        <p className="ml-2 text-[16px] mt-1 hover:opacity-85 hover:cursor-pointer">
                            Projects  
                        </p>
                    
                    </NavLink>

                    <NavLink to="/todos/add" className={({ isActive })=>
                    `flex items-center w-53 p-1  transition-all duration-200  py-[11px] px-2.5 transform -translate-x-1.5 ${isActive ? 'bg-[#5577FF] text-white rounded-lg' : 'text-[#9896A3]'}`
                    }>
                        <LuListTodo className="w-6 h-6" />
                        <p className="ml-2 text-[16px] mt-1 hover:opacity-85 hover:cursor-pointer">
                            Add Todo  
                        </p>
                    
                    </NavLink>

                    
                    <NavLink to="/notes/add" className={({ isActive })=>
                    `flex items-center w-53 p-1  transition-all duration-200  py-[11px] px-2.5 transform -translate-x-1.5 ${isActive ? 'bg-[#5577FF] text-white rounded-lg' : 'text-[#9896A3]'}`
                    }>
                        <LuNotepadText className="w-6 h-6" />
                        <p className="ml-2 text-[16px] mt-1 hover:opacity-85 hover:cursor-pointer">
                            Add Note  
                        </p>
                    
                    </NavLink>

                </div>
                
            </section>

            {/* Projects Section */}
            <section className="max-w-[14rem]">
                <header className={`${!isFull ? 'hidden' : ''} w-full border-t-1 border-[#E6E4F0] flex justify-between items-center pt-3 mb-5`}>
                    
                <h3 className="text-[#D3D2DC] text-[1rem]">
                PROJECTS
                </h3>
                <img src="/Add.svg" alt="add-more" className="w-4 h-4 hover:cursor-pointer hover:scale-110 transition-all duration-500" />
                </header>

                <main className={`${isFull ? '' : 'border-t-[2px] border-b-[2px] border-[#E6E4F0] py-4 px-1'} flex flex-col gap-3.5`}>
                <figure className="flex justify-between items-center h-8">
                    <div className="flex items-center">
                    <img src="/Rectangle 2.svg" alt="flower-img" className="w-8 h-8 rounded-2xl"/>
                    <p className={`ml-1 transition-all duration-300 origin-left ${!isFull ? 'scale-x-0' : 'scale-x-100'}`}>Flower Shop</p>

                    </div>
                    
                    <div className={`${!isFull ? 'hidden' : ''} flex items-center`}>
                    
                    <p className="flex-2 text-[0.75rem] text-[#9896A3] inline ml-1">23</p>

                    </div>

                </figure>

                <figure className="flex justify-between items-center h-8">
                    <div className="flex items-center">
                    <img src="/Rectangle 3.svg" alt="cloth-img" className="w-8 h-8 rounded-2xl"/>
                    <p className={`${!isFull ? 'hidden' : ''} ml-1`}>Cloth</p>

                    </div>
                    
                    <div className={`${!isFull ? 'hidden' : ''} flex items-center`}>
                    <img src="/Video.svg" alt="camera-icon" className="w-5.5 h-5.5 "/>
                    <p className="flex-2 text-[0.75rem] text-[#9896A3] inline ml-1">345</p>

                    </div>

                </figure>

                <figure className="flex justify-between items-center h-8">
                    <div className="flex items-center">
                    <img src="/Rectangle 4.svg" alt="gamer-img" className="w-8 h-8 rounded-2xl"/>
                    <p className={`transition-all duration-300 origin-left ${!isFull ? 'scale-x-0' : 'scale-x-100'} ml-1`}>Gamer Boy</p>

                    </div>
                    
                    <div className={`${!isFull ? 'hidden' : ''} flex items-center`}>
                    <img src="/Wallet.svg" alt="wallet-icon" className="w-5.5 h-5.5 "/>
                    <p className="flex-2 text-[0.75rem] text-[#9896A3] inline ml-1">568</p>

                    </div>

                </figure>
                </main>
            </section>

            {/* Tasks Section */}
            {/* Tasks */}
            <section className="flex-2 max-w-[14rem] mt-5">
                <header className={`${!isFull ? 'hidden' : ''} w-full border-t-1 border-[#E6E4F0] flex justify-between items-center pt-3 mb-5`}>
                <h3 className="text-[#D3D2DC]">
                TASKS
                </h3>
                <img src="/Add.svg" alt="add-more" className="w-4 h-4 hover:cursor-pointer hover:scale-110 transition-all duration-500" />
                </header>

                <main className="flex flex-col gap-2.5">

                <figure className="flex justify-between items-center h-8">
                    <div className='flex items-center'>
                    <FiFileText className={`${!isFull ? 'transform translate-x-1' : ''} fill-[#ffd6e8] stroke-[#ff80b9] w-5.5 h-6 ml-1`}/>
                    <p className={`${!isFull ? 'hidden' : ''} text-[#9896A3] ml-1`}>Manage Finances</p>
                    </div>

                    <p className={`${!isFull ? 'hidden' : ''} text-xs text-[#9896A3]`}>52</p>
                </figure>

                <figure className="flex justify-between items-center h-8">
                    <div className='flex items-center'>
                    <FiFileText className={`${!isFull ? 'transform translate-x-1' : ''} fill-[#d4f1fd] stroke-[#57d5ff] w-5.5 h-6 ml-1`}/>
                    <p className={`${!isFull ? 'hidden' : ''} text-[#9896A3] ml-1`}>Integrate ChatGPT</p>
                    </div>

                    <p className={`${!isFull ? 'hidden' : ''} text-xs text-[#9896A3]`}>15</p>
                </figure>

                <figure className="flex justify-between items-center h-8">
                    <div className='flex items-center'>
                    <FiFileText className={`${!isFull ? 'transform translate-x-1' : ''} fill-[#dbd5fc] stroke-[#8876f3] w-5.5 h-6 ml-1`}/>
                    <p className={`${!isFull ? 'hidden' : ''} text-[#9896A3] ml-1`}>Redesign the logo</p>
                    </div>

                    <p className={`${!isFull ? 'hidden' : ''} text-xs text-[#9896A3]`}>5</p>
                </figure>

                <figure className="flex justify-between items-center h-8">
                    <div className='flex items-center'>
                    <FiFileText className={`${!isFull ? 'transform translate-x-1' : ''} fill-[#bff8e8] stroke-[#42e0b4] w-5.5 h-6 ml-1`}/>
                    <p className={`${!isFull ? 'hidden' : ''} text-[#9896A3] ml-1`}>Invest in DOGE</p>
                    </div>

                    <p className={`${!isFull ? 'hidden' : ''} text-xs text-[#9896A3]`}>5</p>
                </figure>
                </main>
                <section/>

                {/* Profile */}
                <section className={`border rounded-sm border-[#E6E4F0] p-2 mt-47 ml-2 ${!isFull ? 'w-16.5' : 'w-57'} transform -translate-x-5`}>
                <main className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <figure className="relative w-12 h-12">
                            <img src="/profile.png" alt="profile" className="w-12 h-12 relative"/>
                            <div className="border-white absolute bottom-0 -right-1 border-2 rounded-sm rounded-b-none bg-white transform translate-y-1">
                            <FaRegSquare className="fill-[#00B884] bg-[#00B884] rounded-xs w-3 h-3 transform "/>

                            </div>  
                        </figure>
                        
                        <div className={`${!isFull ? 'hidden' : ''}`}>
                            <p className="font-[500]">Muhammed Ali</p>
                            <p className="text-[#A0A0A3] font-[400]">Free Account</p>
                        </div>
                    
                    </div>
                    <FaGear className={`${!isFull ? 'hidden' : ''}`}/>

                </main>

                </section>
                
            </section>
      </aside>
      
    </div>
  )
}

export default Sidebar
