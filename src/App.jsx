import React from 'react'
import HomePage from './pages/HomePage'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router'
import MainLayout from './layout/MainLayout'
import ProjectsPage from './pages/ProjectsPage'
import NotFoundPage from './pages/NotFoundPage'
import UnderConstructionPage from './pages/UnderConstructionPage'
import AddTaskPage from './pages/AddTaskPage'
const App = () => {
  
  const addTask = async(newTask) => { 
    const res = await fetch('https://mock-todos-back-1.onrender.com/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTask),
    });
    return;
  }

  const deleteTask = async (id)=> {
    const res = await fetch(`https://mock-todos-back-1.onrender.com/todos/${id}`,{
      method: 'DELETE'
    });
    return;
  }
    const router = createBrowserRouter
    (
      createRoutesFromElements(
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<HomePage/>}/>
          
          <Route path="/overview" element={<UnderConstructionPage/>}/>
          <Route path="/calendar" element={<UnderConstructionPage/>}/>
          <Route path="/analytics" element={<UnderConstructionPage/>}/>
          <Route path="/activity" element={<UnderConstructionPage/>}/>
          <Route path="/projects" element={<ProjectsPage/>}/>
          <Route path="/todos/add" element={<AddTaskPage addTaskSubmit={addTask}/>}/>


          <Route path="*" element={<NotFoundPage/>}/>

        </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App
