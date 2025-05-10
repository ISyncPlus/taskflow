import React from 'react'
import { IoEllipsisHorizontal } from "react-icons/io5";
const LatestProjects = () => {
  return (
    <div>
        <section className='mt-7 font-medium'>
            <p className="flex gap-1.5 text-[#56555C] items-center">
                    <img src="/Time-Square.svg" alt="clock" className="w-4.5 h-4.5"/>
                    <span className='text-[1rem]'>Latest</span>
                </p>

                <article className="grid grid-cols-3 gap-5">

                    {/* Latest 1 */}
                    <figure className='w-62 h-57 flex flex-col border-[#E6E4F0] rounded-lg p-3 bg-[#FFFFFF]'>
                        <img src="/Latest-1.png" alt="latest-1" className="w-57 h-28" />

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
                        <img src="/Latest-2.png" alt="latest-2" className="w-57 h-28" />

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
                        <img src="/Latest-3.png" alt="latest-3" className="w-57 h-28" />

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
                        <img src="/Latest-4.png" alt="latest-4" className="w-57 h-28" />

                        <p className="flex mt-4">
                            <img src="/archtech.png" alt="cloth icon" className="w-9.5 h-9.5 mr-2 rounded-full"/>
                            
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
                        <img src="/Latest-5.png" alt="latest-5" className="w-57 h-28" />

                        <p className="flex mt-4">
                            <img src="/orixon.png" alt="cloth icon" className="w-9.5 h-9.5 mr-2 rounded-full"/>
                            
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
                        <img src="/Latest-6.png" alt="latest-6" className="w-57 h-28" />

                        <p className="flex mt-4">
                            <img src="/unicom.png" alt="cloth icon" className="w-9.5 h-9.5 mr-2 rounded-full"/> 
                            
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

export default LatestProjects
