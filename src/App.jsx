import React from 'react'
import HomePage from './pages/HomePage'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router'
import MainLayout from './layout/MainLayout'
import ProjectsPage from './pages/ProjectsPage'
import NotFoundPage from './pages/NotFoundPage'
import UnderConstructionPage from './pages/UnderConstructionPage'
import AddTaskPage from './pages/AddTaskPage'
import AddNotePage from './pages/AddNotePage'
import EditNotePage from './pages/EditNotePage'

const App = () => {
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
          <Route path="/todos/add" element={<AddTaskPage/>}/>
          <Route path="/notes/add" element={<AddNotePage/>}/>
          <Route path="/notes/edit-note/:id" element={<EditNotePage/>}/>


          <Route path="*" element={<NotFoundPage/>}/>

        </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App
