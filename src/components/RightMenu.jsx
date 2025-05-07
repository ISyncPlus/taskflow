import React from 'react'
import initialTodos from '../todos.json'
import { IoDocumentText } from "react-icons/io5";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { useState } from 'react';
import { Link } from 'react-router';
const RightMenu = () => {
const [todos, setTodos] = useState(initialTodos);
const toggleChecked = (id) => {
  setTodos(prev =>
    prev.map(todo =>
      todo.id == id ? { ...todo, checked: !todo.checked } : todo
    )
  );
};


  return (
    <div>
      <aside className="w-[353px] h-[100vh] border-l-1 border-[#E6E4F0] py-7.5 pl-4 pr-6 overflow-y-scroll scrollbar-thin 2xl:h-full">

        <header className="flex justify-between items-center border-b border-[#E6E4F0] pb-2">
          <section className="flex items-center">
            <img src="/Category.svg" alt="Overview" className='w-5.5 h-5.5 mr-1 text-[#56555C]' />
            <p className="underline underline-offset-2 text-[#56555C] text-[1rem]">
              Todos
            </p>

          </section>
          <Link to="/todos/add">
          <img src="/Add.svg" alt="add-more" className="w-4 h-4 hover:cursor-pointer hover:scale-110 transition-all duration-500" />
          </Link>
          
        </header>

        <article className="flex flex-col gap-1 mt-3.5 mb-4">
          {/* List 1 jsx*/}
          {todos.map((todo)=> (
              <section className="py-3 px-2.5 border border-[#E6E4F0] rounded-xl bg-[#F9F8FF]">
              <h1 className="flex items-center">
                <input type="checkbox" name="list" onClick={()=> toggleChecked(todo.id)}    className="hover:cursor-pointer" />
                <p className={`font-medium relative ml-2 text-sm after:content-[''] after:absolute after:h-[0.5px] after:bg-[#5577FFCC] after:top-1/2 after:w-full after:transition-all after:duration-400 after:left-0 ${todo.checked ? 'after:scale-x-100 text-[#5577FFCC]' : 'after:scale-x-0 text-black'} `}>
                  {todo.title}
                </p>
              </h1>
  
              <p className="flex justify-between items-center">
                <section className="mt-2">
                  <button className="text-[#5577FF] text-xs bg-[#5577FF4D] py-1 px-2.5 rounded-full font-[600]">{todo.firstTag}</button>
                  <button className={`text-[#00B884] text-xs bg-[#00B88433] py-1 px-2.5 rounded-full ml-1 font-[600] ${todo.secondTag == '' ? 'hidden' : ''}`}>{todo.secondTag}</button>
  
                </section>
  
                <section className="text-[#BBBABE] text-xs">
                  May 20, 2025
                </section>
  
              </p>
  
  
            </section>
          ))

          }
        
        {/* Notes */}
        </article>

        <article>
          <header className="flex items-center border-b border-[#E6E4F0] pb-2">
            <img src="/notes.svg" alt="notes-icon" className="w-5.5 h-5.5 mr-1" />
            <p className="text-[#56555C] font-medium underline underline-offset-2 ">Notes</p>
          </header>

          {/* Note 1 */}
          <figure className="py-3 px-4 border border-[#E6E4F0] bg-white shadow-md rounded-xl mb-3">
            <section className="flex items-center justify-between">
              <h1 className='flex gap-1 items-center'>
                <IoDocumentText className='fill-[#85848b]' />
                <p className="text-[#A3A3A3] text-xs">May 14, 2025</p>
              </h1>

              <IoEllipsisHorizontal className="fill-[#56555C]" />
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
                <IoDocumentText className='fill-[#85848b]' />
                <p className="text-[#A3A3A3] text-xs">May 18, 2025</p>
              </h1>

              <IoEllipsisHorizontal className="fill-[#56555C]" />
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
                <IoDocumentText className='fill-[#85848b]' />
                <p className="text-[#A3A3A3] text-xs">May 27, 2025</p>
              </h1>

              <IoEllipsisHorizontal className="fill-[#56555C]" />
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
