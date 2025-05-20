import React from 'react'
import { HiOutlineFolderRemove } from "react-icons/hi";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { BsStopCircleFill } from "react-icons/bs";
import LatestProjects from './LatestProjects';
import { useOutletContext } from 'react-router';
const Projects = () => {
    const { isFull } = useOutletContext();
  return (
    <div className="bg-[#F9F8FF] h-screen scrollbar-thin 2xl:h-full">
            {/* Projects Folder */}
            <section className=" font-medium mb-7">
                <h1 className="text-[rgb(86,85,92)] text-[1rem] ml-3 mt-5">
                Welcome Back! Muhammed
                </h1>

                <p className="flex gap-1.5 text-[#56555C] items-center mt-7 ml-3">
                    <HiOutlineFolderRemove className='inline w-5 h-5'/> <span className='text-[1rem]'>Folders</span>
                </p>

                <article className={`grid ${ isFull ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'} place-items-center gap-3 mt-3`}>

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
            <LatestProjects />
    </div>
  )
}

export default Projects
