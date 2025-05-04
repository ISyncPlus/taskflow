import React from 'react'
import { IoDocumentText } from "react-icons/io5";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { useState } from 'react';
const RightMenu = () => {
  const [list1, setList1] = useState(false);
  const [list2, setList2] = useState(false);
  const [list3, setList3] = useState(false);
  const [list4, setList4] = useState(false);
  return (
    <div>
            <aside className="w-[353px] h-full border-l-1 border-[#E6E4F0] py-7.5 pl-4 pr-6 overflow-y-scroll">

              <header className="flex justify-between items-center border-b border-[#E6E4F0] pb-2">
                <section className="flex items-center">
                  <img src="/Category.svg" alt="Overview" className='w-5.5 h-5.5 mr-1 text-[#56555C]' />
                  <p className="underline underline-offset-2 text-[#56555C] text-[1rem]">
                    Todos
                  </p>

                </section>

                <img src="/Add.svg" alt="add-more" className="w-4 h-4 hover:cursor-pointer hover:scale-110 transition-all duration-500" />
              </header>

              <article className="flex flex-col gap-1 mt-3.5 mb-4">
                {/* List 1 */}
                <section className="py-3 px-2.5 border border-[#E6E4F0] rounded-xl bg-[#F9F8FF]">
                  <h1 className="flex items-center">
                    <input type="checkbox" name="list" id="" onClick={() => setList1(prev => !prev)} className="hover:cursor-pointer"/>
                    <p className={`font-medium relative ml-2 text-sm after:content-[''] after:absolute after:h-[0.5px] after:bg-[#5577FFCC] after:top-1/2 after:w-full after:transition-all after:duration-400 after:left-0 ${list1 ? 'after:scale-x-100 text-[#5577FFCC]' : 'after:scale-x-0 text-black'} `}>
                      Donate $500 to the charity
                    </p>
                  </h1>

                  <p className="flex justify-between items-center">
                  <section className="mt-2">
                    <button className="text-[#FFC800] text-xs bg-[#FFC8004D] py-1 px-2.5 rounded-full font-[600]">Donations</button>
                    <button className="text-[#00B884] text-xs bg-[#00B88433] py-1 px-2.5 rounded-full ml-1 font-[600]">Social</button>

                  </section>

                  <section className="text-[#BBBABE] text-xs">
                    May 20, 2025
                  </section>

                  </p>


                </section>

                {/* List 2 */}
                <section className="py-3 px-2.5 border border-[#E6E4F0] rounded-xl bg-[#F9F8FF]">
                  <h1 className="flex items-center">
                    <input type="checkbox" name="list" id="" onClick={() => setList2(prev => !prev)} className="hover:cursor-pointer"/>
                    <p className={`font-medium relative ml-2 text-sm after:content-[''] after:absolute after:h-[0.5px] after:bg-[#5577FFCC] after:top-1/2 after:w-full after:transition-all after:duration-400 after:left-0 ${list2 ? 'after:scale-x-100 text-[#5577FFCC]' : 'after:scale-x-0 text-black'} `}>
                      Do 500 pushups
                    </p>
                  </h1>

                  <p className="flex justify-between items-center">
                  <section className="mt-2">
                    <button className="text-[#49CCF9] text-xs bg-[#49CCF94D] py-1 px-2.5 rounded-full font-[600]">Sport</button>
                    <button className="text-[#FD71AF] text-xs bg-[#FD71AF33] py-1 px-2.5 rounded-full ml-1 font-[600]">Selfcare</button>

                  </section>

                  <section className="text-[#BBBABE] text-xs">
                    May 20, 2025
                  </section>

                  </p>


                </section>

                {/* List 3 */}
                <section className="py-3 px-2.5 border border-[#E6E4F0] rounded-xl bg-[#F9F8FF]">
                  <h1 className="flex items-center">
                    <input type="checkbox" name="list" id="" onClick={() => setList3(prev => !prev)} className="hover:cursor-pointer"/>
                    <p className={`font-medium relative ml-2 text-sm after:content-[''] after:absolute after:h-[0.5px] after:bg-[#5577FFCC] after:top-1/2 after:w-full after:transition-all after:duration-400 after:left-0 ${list3 ? 'after:scale-x-100 text-[#5577FFCC]' : 'after:scale-x-0 text-black'} `}>
                      Buy new headset
                    </p>
                  </h1>

                  <p className="flex justify-between items-center">
                  <section className="mt-2">
                    <button className="text-[#7B68EE] text-xs bg-[#7B68EE4D] py-1 px-2.5 rounded-full font-[600]">Shopping</button>
                    <button className="text-[#00B884] text-xs bg-[#00B88433] py-1 px-2.5 rounded-full ml-1 font-[600]">Set-up</button>

                  </section>

                  <section className="text-[#BBBABE] text-xs">
                    May 20, 2025
                  </section>

                  </p>

                </section>

                {/* List 4 */}
                <section className="py-3 px-2.5 border border-[#E6E4F0] rounded-xl bg-[#F9F8FF]">
                  <h1 className="flex items-center">
                    <input type="checkbox" name="list" id="" onClick={() => setList4(prev => !prev)} className="hover:cursor-pointer"/>
                    <p className={`font-medium relative ml-2 text-sm after:content-[''] after:absolute after:h-[0.5px] after:bg-[#5577FFCC] after:top-1/2 after:w-full after:transition-all after:duration-400 after:left-0 ${list4 ? 'after:scale-x-100 text-[#5577FFCC]' : 'after:scale-x-0 text-black'} `}>
                      Clean the room
                    </p>
                  </h1>

                  <p className="flex justify-between items-center">
                  <section className="mt-2">
                    <button className="text-[#5577FF] text-xs bg-[#5577FF4D] py-1 px-2.5 rounded-full font-[600]">Selfcare</button>

                  </section>

                  <section className="text-[#BBBABE] text-xs">
                    May 20, 2025
                  </section>

                  </p>

                </section>
              </article>

              <article>
                <header className="flex items-center border-b border-[#E6E4F0] pb-2">
                  <img src="/notes.svg" alt="notes-icon" className="w-5.5 h-5.5 mr-1"/>
                  <p className="text-[#56555C] font-medium underline underline-offset-2 ">Notes</p>
                </header>
                
                {/* Note 1 */}
                <figure className="py-3 px-4 border border-[#E6E4F0] bg-white shadow-md rounded-xl mb-3">
                  <section className="flex items-center justify-between">
                    <h1 className='flex gap-1 items-center'>
                    <IoDocumentText className='fill-[#85848b]'/>
                    <p className="text-[#A3A3A3] text-xs">May 14, 2025</p>
                  </h1>

                  <IoEllipsisHorizontal className="fill-[#56555C]"/>
                  </section>

                  <section className="mt-2 flex flex-col gap-1 pr-2">
                    <h1 className='font-[600] text-sm'>
                      ChatGPT Tricks for business marketing
                    </h1>
                    <p className="text-[#999999] text-xs">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ducimus nihil cum nulla in, aliquid natus molestias libero repellendus minus laborum vero quidem, vitae nostrum minima quas, sint error perferendis.
                    </p>
                    <section className="flex items-center gap-1">
                      <p className="text-[#FD71AF] text-xs font-[600] px-2.5 py-1 bg-[#FD71AF4D] rounded-full">Tech</p>
                      <p className="text-[#00B884] text-xs font-[600] px-2.5 py-1 bg-[#00B8844D] rounded-full">AI</p>
                    </section>

                  </section>
                </figure>

                  {/* Note 2 */}
                <figure className="py-3 px-4 border border-[#E6E4F0] bg-white shadow-md rounded-xl mb-3">
                  <section className="flex items-center justify-between">
                    <h1 className='flex gap-1 items-center'>
                    <IoDocumentText className='fill-[#85848b]'/>
                    <p className="text-[#A3A3A3] text-xs">May 18, 2025</p>
                  </h1>

                  <IoEllipsisHorizontal className="fill-[#56555C]"/>
                  </section>

                  <section className="mt-2 flex flex-col gap-1 pr-2">
                    <h1 className='font-[600] text-sm'>
                      Notes on becoming a successful entrepreneur
                    </h1>
                    <p className="text-[#999999] text-xs">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ducimus nihil cum nulla in, aliquid natus molestias libero repellendus minus laborum vero quidem, vitae nostrum minima quas, sint error perferendis.
                    </p>
                    <section className="flex items-center gap-1">
                      <p className="text-[#49CCF9] text-xs font-[600] px-2.5 py-1 bg-[#49CCF94D] rounded-full">Learning</p>
                      <p className="text-[#5577FF] text-xs font-[600] px-2.5 py-1 bg-[#5577FF4D] rounded-full">Self-improvement</p>
                    </section>

                  </section>
                </figure>

                  {/* Note 3 */}
                <figure className="py-3 px-4 border border-[#E6E4F0] bg-white shadow-md rounded-xl mb-3">
                  <section className="flex items-center justify-between">
                    <h1 className='flex gap-1 items-center'>
                    <IoDocumentText className='fill-[#85848b]'/>
                    <p className="text-[#A3A3A3] text-xs">May 27, 2025</p>
                  </h1>

                  <IoEllipsisHorizontal className="fill-[#56555C]"/>
                  </section>

                  <section className="mt-2 flex flex-col gap-1 pr-2">
                    <h1 className='font-[600] text-sm'>
                      What my life goals are and what I'm currently doing to achieve them
                    </h1>
                    <p className="text-[#999999] text-xs">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ducimus nihil cum nulla in, aliquid natus molestias libero repellendus minus laborum vero quidem, vitae nostrum minima quas, sint error perferendis.
                    </p>
                    <section className="flex items-center gap-1">
                      <p className="text-[#FD71AF] text-xs font-[600] px-2.5 py-1 bg-[#FD71AF4D] rounded-full">Profitable</p>
                      <p className="text-[#5577FF] text-xs font-[600] px-2.5 py-1 bg-[#5577FF4D] rounded-full">1Person</p>
                      <p className="text-[#00B884] text-xs font-[600] px-2.5 py-1 bg-[#00B8844D] rounded-full">AI</p>
                    </section>

                  </section>
                </figure>

              </article>
                
            </aside>
      
    </div>
  )
}

export default RightMenu
