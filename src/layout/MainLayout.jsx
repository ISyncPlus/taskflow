import React from 'react'
import { Outlet } from 'react-router'
import { useState, useEffect } from 'react'
import RightMenu from '../components/RightMenu'
import ScrollToTop from '../components/ScrollToTop'
import Sidebar from '../components/Sidebar'
import { ToastContainer } from 'react-toastify'
const MainLayout = () => {

  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  const [notes, setNotes] = useState([]);

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
    <div className='flex max-h-[1024px] max-w-[1440px] mx-auto scrollbar-thin overflow-x-scroll scroll-smooth'>
        <ScrollToTop/>
        <ToastContainer />
        
        <Sidebar />

        <main>
        <Outlet context={{ setTodos, setNotes }}/>
        </main>

        <RightMenu todos={todos} setTodos={setTodos} loading={loading} notes={notes} setNotes={setNotes} />
        
    </div>
  )
}

export default MainLayout
