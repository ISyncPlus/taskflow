import React from 'react'
import { HiOutlineFolderRemove } from "react-icons/hi";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { BsStopCircleFill } from "react-icons/bs";
const Projects = () => {
  return (
    <div className="bg-[#F9F8FF] w-[803px] h-screen p-6 overflow-y-scroll scrollbar-thin 2xl:h-full">
            {/* Projects Folder */}
            <section className=" font-medium">
                <h1 className="text-[rgb(86,85,92)] text-[1rem]">
                Welcome Back! Muhammed
                </h1>

                <p className="flex gap-1.5 text-[#56555C] items-center mt-7">
                    <HiOutlineFolderRemove className='inline w-5 h-5'/> <span className='text-[1rem]'>Folders</span>
                </p>

                <article className="grid grid-cols-3 gap-5.5 mt-3">

                    {/* Folder 1 */}
                    <figure className="relative w-62 h-43 flex flex-col">
                        <div className="h-[3rem] transform translate-y-5 w-[49.2%] border border-b-white
                        border-[#E6E4F0]
                        rounded-tl-xl
                        bg-[#FFFFFF] clip-side relative">
                            <div className="absolute w-[1.25rem]
                            h-[3rem] bg-white
                            right-[2.14rem]
                            top-[0.037rem]
                            transform
                            rotate-[223deg]
                            rounded-tr-[50px] border-l-0
                            border-r-0
                            border-t-0
                            border-[0.0833rem] border-[#E6E4F0]
                            "></div>
                        </div>

                        <div className="h-[85.8%] rounded-bl-xl rounded-br-xl rounded-tr-xl 
                        border border-[#E6E4F0] bg-[#FFFFFF] p-5.5 shadow-xs">
                            
                            <section className="flex gap-2 items-center">
                            <BsStopCircleFill className="w-[24px] h-[24px] fill-[#FD71AF]" />
                            <span className='text-[1rem] text-[#82808F]'>
                                Team Projects
                            </span>

                            </section> 

                            <section className="flex justify-between items-center mt-13">
                                <p className="text-[0.75rem] text-[#A3A3A3]">April 23, 2025</p>

                                <IoEllipsisHorizontal className="text-[#56555C]" />

                            </section>
                        </div>
                    </figure>

                    {/* Folder 2 */}
                    <figure className="relative w-62 h-43 flex flex-col">
                        <div className="h-[3rem] transform translate-y-5 w-[49.2%] border border-b-white
                        border-[#E6E4F0]
                        rounded-tl-xl
                        bg-[#FFFFFF] clip-side relative">
                            <div className="absolute w-[1.25rem]
                            h-[3rem] bg-white
                            right-[2.14rem]
                            top-[0.037rem]
                            transform
                            rotate-[223deg]
                            rounded-tr-[50px] border-l-0
                            border-r-0
                            border-t-0
                            border-[0.0833rem] border-[#E6E4F0]
                            "></div>
                        </div>

                        <div className="h-[85.8%] rounded-bl-xl rounded-br-xl rounded-tr-xl 
                        border border-[#E6E4F0] bg-[#FFFFFF] p-5.5 shadow-xs">
                            
                            <section className="flex gap-2 items-center">
                            <BsStopCircleFill className="w-[24px] h-[24px] fill-[#00B884]" />
                            <span className='text-[1rem] text-[#82808F]'>
                                Collaborations
                            </span>

                            </section> 

                            <section className="flex justify-between items-center mt-13">
                                <p className="text-[0.75rem] text-[#A3A3A3]">April 7, 2025</p>

                                <IoEllipsisHorizontal className="text-[#56555C]" />

                            </section>
                        </div>
                    </figure>

                        {/* Folder 3 */}
                    <figure className="relative w-62 h-43 flex flex-col">
                        <div className="h-[3rem] transform translate-y-5 w-[49.2%] border border-b-white
                        border-[#E6E4F0]
                        rounded-tl-xl
                        bg-[#FFFFFF] clip-side relative">
                            <div className="absolute w-[1.25rem]
                            h-[3rem] bg-white
                            right-[2.14rem]
                            top-[0.037rem]
                            transform
                            rotate-[223deg]
                            rounded-tr-[50px] border-l-0
                            border-r-0
                            border-t-0
                            border-[0.0833rem] border-[#E6E4F0]
                            "></div>
                        </div>

                        <div className="h-[85.8%] rounded-bl-xl rounded-br-xl rounded-tr-xl 
                        border border-[#E6E4F0] bg-[#FFFFFF] p-5.5 shadow-xs">
                            
                            <section className="flex gap-2 items-center">
                            <BsStopCircleFill className="w-[24px] h-[24px] fill-[#FFC800]" />
                            <span className='text-[1rem] text-[#82808F]'>
                                Personal Projects
                            </span>

                            </section> 

                            <section className="flex justify-between items-center mt-13">
                                <p className="text-[0.75rem] text-[#A3A3A3]">May 4, 2025</p>

                                <IoEllipsisHorizontal className="text-[#56555C]" />

                            </section>
                        </div>
                    </figure>

                    {/* Folder 4 */}
                    <figure className="relative w-62 h-43 flex flex-col">
                        <div className="h-[3rem] transform translate-y-5 w-[49.2%] border border-b-white
                        border-[#E6E4F0]
                        rounded-tl-xl
                        bg-[#FFFFFF] clip-side relative">
                            <div className="absolute w-[1.25rem]
                            h-[3rem] bg-white
                            right-[2.14rem]
                            top-[0.037rem]
                            transform
                            rotate-[223deg]
                            rounded-tr-[50px] border-l-0
                            border-r-0
                            border-t-0
                            border-[0.0833rem] border-[#E6E4F0]
                            "></div>
                        </div>

                        <div className="h-[85.8%] rounded-bl-xl rounded-br-xl rounded-tr-xl 
                        border border-[#E6E4F0] bg-[#FFFFFF] p-5.5 shadow-xs">
                            
                            <section className="flex gap-2 items-center">
                            <BsStopCircleFill className="w-[24px] h-[24px] fill-[#49CCF9]" />
                            <span className='text-[1rem] text-[#82808F]'>
                                Charities
                            </span>

                            </section> 

                            <section className="flex justify-between items-center mt-13">
                                <p className="text-[0.75rem] text-[#A3A3A3]">May 7, 2025</p>

                                <IoEllipsisHorizontal className="text-[#56555C]" />

                            </section>
                        </div>
                    </figure>

                    {/* Folder 5 */}
                    <figure className="relative w-62 h-43 flex flex-col">
                        <div className="h-[3rem] transform translate-y-5 w-[49.2%] border border-b-white
                        border-[#E6E4F0]
                        rounded-tl-xl
                        bg-[#FFFFFF] clip-side relative">
                            <div className="absolute w-[1.25rem]
                            h-[3rem] bg-white
                            right-[2.14rem]
                            top-[0.037rem]
                            transform
                            rotate-[223deg]
                            rounded-tr-[50px] border-l-0
                            border-r-0
                            border-t-0
                            border-[0.0833rem] border-[#E6E4F0]
                            "></div>
                        </div>

                        <div className="h-[85.8%] rounded-bl-xl rounded-br-xl rounded-tr-xl 
                        border border-[#E6E4F0] bg-[#FFFFFF] p-5.5 shadow-xs">
                            
                            <section className="flex gap-2 items-center">
                            <BsStopCircleFill className="w-[24px] h-[24px] fill-[#7B68EE]" />
                            <span className='text-[1rem] text-[#82808F]'>
                                Self-improvement
                            </span>

                            </section> 

                            <section className="flex justify-between items-center mt-13">
                                <p className="text-[0.75rem] text-[#A3A3A3]">May 7, 2025</p>

                                <IoEllipsisHorizontal className="text-[#56555C]" />

                            </section>
                        </div>
                    </figure>

                    {/* Folder 6 */}
                    <figure className="relative w-62 h-43 flex flex-col">
                        <div className="h-[3rem] transform translate-y-5 w-[49.2%] border border-b-white
                        border-[#E6E4F0]
                        rounded-tl-xl
                        bg-[#FFFFFF] clip-side relative">
                            <div className="absolute w-[1.25rem]
                            h-[3rem] bg-white
                            right-[2.14rem]
                            top-[0.037rem]
                            transform
                            rotate-[223deg]
                            rounded-tr-[50px] border-l-0
                            border-r-0
                            border-t-0
                            border-[0.0833rem] border-[#E6E4F0]
                            "></div>
                        </div>

                        <div className="h-[85.8%] rounded-bl-xl rounded-br-xl rounded-tr-xl 
                        border border-[#E6E4F0] bg-[#FFFFFF] p-5.5 shadow-xs">
                            
                            <section className="flex gap-2 items-center">
                            <BsStopCircleFill className="w-[24px] h-[24px] fill-[#5577FF]" />
                            <span className='text-[1rem] text-[#82808F]'>
                                Influencing &amp; Brand
                            </span>

                            </section> 

                            <section className="flex justify-between items-center mt-13">
                                <p className="text-[0.75rem] text-[#A3A3A3]">May 10, 2025</p>

                                <IoEllipsisHorizontal className="text-[#56555C]" />

                            </section>
                        </div>
                    </figure>

                </article>

            </section>

            {/* Latest projects */}
            <section className='mt-7 font-medium'>
            <p className="flex gap-1.5 text-[#56555C] items-center">
                    <img src="/Time-Square.svg" alt="clock" className="w-4.5 h-4.5"/>
                    <span className='text-[1rem]'>Latest</span>
                </p>

                <article className="grid grid-cols-3 gap-5">

                    {/* Latest 1 */}
                    <figure className='w-62 h-57 flex flex-col border-[#E6E4F0] rounded-lg p-3 bg-[#FFFFFF]'>
                        <img src="../src/img/Latest-1.png" alt="latest-1" className="w-57 h-28" />

                        <p className="flex mt-4">
                            <img src="/Rectangle 3.svg" alt="cloth icon" className="w-9.5 h-9.5 mr-2"/>
                            
                            <section className="flex flex-col flex-1 ">
                                <div className="flex justify-between">
                                    <p>
                                        Cloth<span className="text-lg">&trade;</span> 
                                    </p>

                                    <IoEllipsisHorizontal className="text-[#56555C] mr-2"/>
                                </div>
                                <p className="text-xs text-[#56555C]">
                                    Lorem ipsum dolor sit amet 
                                </p>
                            </section>
                        </p>

                        <section className="flex gap-1 mt-3">
                            <button className="bg-[#ffe5f1] text-[#FD71AF] text-xs py-1 px-2.5 rounded-xl">Profitable</button>
                            <button className="bg-[#c6fdee] text-[#00B884] text-xs py-1 px-2.5 rounded-xl">Ai</button>
                            <button className="bg-[#d4dcfd] text-[#5577FF] text-xs py-1 px-2.5 rounded-xl">1Person</button>
                        </section>
                    </figure>

                    {/* Latest 2 */}
                    <figure className='w-62 h-57 flex flex-col border-[#E6E4F0] rounded-lg p-3 bg-[#FFFFFF]'>
                        <img src="../src/img/Latest-2.png" alt="latest-2" className="w-57 h-28" />

                        <p className="flex mt-4">
                            <img src="/Rectangle 2.svg" alt="flower icon" className="w-9.5 h-9.5 mr-2"/>
                            
                            <section className="flex flex-col flex-1 ">
                                <div className="flex justify-between">
                                    <p>
                                        Flower Shop
                                    </p>

                                    <IoEllipsisHorizontal className="text-[#56555C] mr-2"/>
                                </div>
                                <p className="text-xs text-[#56555C]">
                                    Lorem ipsum dolor sit amet 
                                </p>
                            </section>
                        </p>

                        <section className="flex gap-1 mt-3">
                            <button className="bg-[#ffe5f1] text-[#FD71AF] text-xs py-1 px-2.5 rounded-xl">Small Business</button>
                            
                        </section>
                    </figure>

                    {/* Latest 3 */}
                    <figure className='w-62 h-57 flex flex-col border-[#E6E4F0] rounded-lg p-3 bg-[#FFFFFF]'>
                        <img src="../src/img/Latest-3.png" alt="latest-3" className="w-57 h-28" />

                        <p className="flex mt-4">
                            <img src="/Rectangle 4.svg" alt="gamer icon" className="w-9.5 h-9.5 mr-2"/>
                            
                            <section className="flex flex-col flex-1 ">
                                <div className="flex justify-between">
                                    <p>
                                        Gamer Boy<span className="text-lg">&trade;</span> 
                                    </p>

                                    <IoEllipsisHorizontal className="text-[#56555C] mr-2"/>
                                </div>
                                <p className="text-xs text-[#56555C]">
                                    Lorem ipsum dolor sit amet 
                                </p>
                            </section>
                        </p>

                        <section className="flex gap-1 mt-3">
                            <button className="bg-[#ffe5f1] text-[#FD71AF] text-xs py-1 px-2.5 rounded-xl">Games</button>
                            <button className="bg-[#c6fdee] text-[#00B884] text-xs py-1 px-2.5 rounded-xl">Insane Earner</button>
                            
                        </section>
                    </figure>

                    {/* Latest 4 */}
                    <figure className='w-62 h-57 flex flex-col border-[#E6E4F0] rounded-lg p-3 bg-[#FFFFFF]'>
                        <img src="../src/img/Latest-4.png" alt="latest-4" className="w-57 h-28" />

                        <p className="flex mt-4">
                            <img src="../src/img/archtech.png" alt="cloth icon" className="w-9.5 h-9.5 mr-2 rounded-full"/>
                            
                            <section className="flex flex-col flex-1 ">
                                <div className="flex justify-between">
                                    <p>
                                        ArchTech<span className="text-lg">&trade;</span> 
                                    </p>

                                    <IoEllipsisHorizontal className="text-[#56555C] mr-2"/>
                                </div>
                                <p className="text-xs text-[#56555C]">
                                    Lorem ipsum dolor sit amet 
                                </p>
                            </section>
                        </p>

                        <section className="flex gap-1 mt-3">
                            <button className="bg-[#ffe5f1] text-[#FD71AF] text-xs py-1 px-2.5 rounded-xl">Science</button>
                            <button className="bg-[#c6fdee] text-[#00B884] text-xs py-1 px-2.5 rounded-xl">Tech</button>
                            <button className="bg-[#d4dcfd] text-[#5577FF] text-xs py-1 px-2.5 rounded-xl">Great idea</button>
                        </section>
                    </figure>

                    {/* Latest 5 */}
                    <figure className='w-62 h-57 flex flex-col border-[#E6E4F0] rounded-lg p-3 bg-[#FFFFFF]'>
                        <img src="../src/img/Latest-5.png" alt="latest-5" className="w-57 h-28" />

                        <p className="flex mt-4">
                            <img src="../src/img/orixon.png" alt="cloth icon" className="w-9.5 h-9.5 mr-2 rounded-full"/>
                            
                            <section className="flex flex-col flex-1 ">
                                <div className="flex justify-between">
                                    <p>
                                        Orixon 
                                    </p>

                                    <IoEllipsisHorizontal className="text-[#56555C] mr-2"/>
                                </div>
                                <p className="text-xs text-[#56555C]">
                                    Lorem ipsum dolor sit amet 
                                </p>
                            </section>
                        </p>

                        <section className="flex gap-1 mt-3">
                            <button className="bg-[#ffe5f1] text-[#FD71AF] text-xs py-1 px-2.5 rounded-xl">Creative</button>
                            <button className="bg-[#c6fdee] text-[#00B884] text-xs py-1 px-2.5 rounded-xl">Product</button>
                            <button className="bg-[#d4dcfd] text-[#5577FF] text-xs py-1 px-2.5 rounded-xl">Startup</button>
                        </section>
                    </figure>

                    {/* Latest 6 */}
                    <figure className='w-62 h-57 flex flex-col border-[#E6E4F0] rounded-lg p-3 bg-[#FFFFFF]'>
                        <img src="../src/img/Latest-6.png" alt="latest-6" className="w-57 h-28" />

                        <p className="flex mt-4">
                            <img src="../src/img/unicom.png" alt="cloth icon" className="w-9.5 h-9.5 mr-2 rounded-full"/> 
                            
                            <section className="flex flex-col flex-1 ">
                                <div className="flex justify-between">
                                    <p>
                                        Uni.com
                                    </p>

                                    <IoEllipsisHorizontal className="text-[#56555C] mr-2"/>
                                </div>
                                <p className="text-xs text-[#56555C]">
                                    Lorem ipsum dolor sit amet 
                                </p>
                            </section>
                        </p>

                        <section className="flex gap-1 mt-3">
                            <button className="bg-[#ffe5f1] text-[#FD71AF] text-xs py-1 px-2.5 rounded-xl">Profitable</button>
                            <button className="bg-[#c6fdee] text-[#00B884] text-xs py-1 px-2.5 rounded-xl">Ai</button>
                            <button className="bg-[#d4dcfd] text-[#5577FF] text-xs py-1 px-2.5 rounded-xl">1 Person</button>
                        </section>
                    </figure>

                </article>

            </section>
    </div>
  )
}

export default Projects
