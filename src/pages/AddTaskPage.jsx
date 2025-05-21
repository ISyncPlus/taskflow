import React from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { useOutletContext } from 'react-router';

const AddTaskPage = () => {
    const { setTodos } = useOutletContext();
    const [title, setTitle] = useState('');
    const [firstTag, setFirstTag] = useState('');
    const [secondTag, setSecondTag] = useState('');
    const navigate = useNavigate();

    const submitForm = async (e) => {

        e.preventDefault();

        const newTask = {
            title,
            firstTag,
            secondTag,
            checked: false,
        };

        const res = await fetch('https://mock-todos-back-1.onrender.com/todos', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(newTask),
            });

            if(res.ok){
                const addedTask = await res.json();
                setTodos((prev)=> [...prev, addedTask]);
            }

        toast.success('Task Added Successfully!');

        navigate('/todos');
          }
    
  return (
    <div className="bg-[#F9F8FF] max-w-[803px] mx-auto h-screen p-6 overflow-y-scroll scrollbar-thin 2xl:h-full flex justify-center items-center">

        <form onSubmit={submitForm} className="bg-white border border-[#E6E4F0] py-5 px-10 rounded-lg w-[80%] mx-auto">
            <header className='text-2xl text-center font-[500] mb-5'>
                Add Task
            </header>
            <section>
                <label htmlFor="title" className="text-md font-medium text-slate-800">Task Title</label>
                <input type="text" name="title" id="title" value={title} placeholder="e.g Complete Sidebar Component" onChange={(e)=>{setTitle(e.target.value)}} className="block border border-[#E6E4F0] rounded-lg shadow-sm px-3 py-2  w-full mt-2 mb-3" required aria-required/>

                {/* Tag 1 */}
                <label htmlFor="firstTag" className='text-md font-medium text-slate-800'>Tag 1</label>
                <select name="firstTag" id="firstTag" value={firstTag}  onChange={(e)=>{setFirstTag(e.target.value)}} required className="block border border-[#E6E4F0] rounded-lg shadow-sm px-3 py-2 w-full mt-2 mb-3">
                    <option value="" disabled hidden>Select a Tag</option>
                    <option value="Sport">Sport</option>
                    <option value="Selfcare">Selfcare</option>
                    <option value="Set-up">Set-up</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Learning">Learning</option>
                    <option value="Other">Other</option>
                </select>

                {/* Tag 2 */}
                <label htmlFor="secondTag" className='text-md font-medium text-slate-800'>Tag 2</label>
                <select name="secondTag" id="secondTag" value={secondTag} onChange={(e)=>{setSecondTag(e.target.value)}} required className="block border border-[#E6E4F0] rounded-lg shadow-sm px-3 py-2  w-full mt-2 mb-3">
               
                    <option value="" disabled hidden>Select a Tag</option>
                    <option value="Sport">Sport</option>
                    <option value="Selfcare">Selfcare</option>
                    <option value="Set-up">Set-up</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Learning">Learning</option>
                    <option value="Other">Other</option>
                </select>

            </section>

            <button type="submit" className="py-1 px-3 border rounded-lg w-full bg-[#5577FF]  text-white mt-2 transition-colors duration-300 hover:cursor-pointer hover:bg-[#4f6eed] active:bg-[#5577FF]">Add Task</button>

        </form>
       
      
    </div>
  )
}

export default AddTaskPage
