import React from 'react'
import { Outlet } from 'react-router'
import { useState, useEffect } from 'react'
import RightMenu from '../components/RightMenu'
import ScrollToTop from '../components/ScrollToTop'
import Sidebar from '../components/Sidebar'
import { ToastContainer } from 'react-toastify'
import SwitchToPc from '../media/switch-to-pc.gif'
const MainLayout = () => {

  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  const [notes, setNotes] = useState([]);

 const [isFull, setIsFull] = useState(false);
  const toggleFull =()=> {
    setIsFull((prev)=> !prev);
  };

  useEffect( () => {
    const fetchTodos = async () => {
      try{
        const res = await fetch('https://mock-todos-back-1.onrender.com/todos');
        const data = await res.json();
        setTodos(data);
      }catch(error){
        console.log('Error Fetching Data', error);
      }finally{
        setLoading(false);
      }
    }
    fetchTodos();
  }, []);

  useEffect( () => {
    const fetchNotes = async () => {
      try{
        const res = await fetch('https://mock-todos-back-1.onrender.com/notes');
        const data = await res.json();
        setNotes(data);
      }catch(error){
        console.log('Error Fetching Data:', error);
      }finally{
        setLoading(false);
      }
    }
    fetchNotes();
  }, []);
  return (
    <div>
      <section className="md:hidden flex flex-col justify-center items-center h-screen">
        <img src={SwitchToPc} alt="switchtopc" className="" />
        <figcaption className="text-2xl font-Jakarta">Please Switch To PC To View</figcaption>
      </section>

      <main className='hidden md:flex max-h-[1024px] max-w-[1440px] min-w-[1130px] h-screen mx-auto scrollbar-thin scroll-smooth'>
        <ScrollToTop/>
        <ToastContainer />
        
        <aside className={`transition-all duration-300 ease-in-out overflow-hidden ${isFull ? 'w-[257px]' : 'w-[90px]'}`}>
          <Sidebar isFull={isFull} setIsFull={setIsFull} toggleFull={toggleFull}/>
        </aside>

        <main className="flex-1 overflow-y-scroll scrollbar-thin overflow-x-clip">
        <Outlet context={{todos, notes, setTodos, setNotes, isFull, loading }}/>
        </main>

      <aside className="w-[340px] overflow-y-scroll scrollbar-thin">
         <RightMenu todos={todos} setTodos={setTodos} loading={loading} notes={notes} setNotes={setNotes} />
      </aside>
       
        
    </main>
    </div>
  )
}

export default MainLayout
