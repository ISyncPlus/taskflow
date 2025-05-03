import React from 'react'
import Sidebar from './components/LeftSidebar'
import HomePage from './pages/HomePage'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router'
import MainLayout from './layout/MainLayout'
import RightSideBar from './components/RightSideBar'
import ProjectsPage from './Pages/ProjectsPage'
const App = () => {
    const router = createBrowserRouter
    (
      createRoutesFromElements(
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="/projects" element={<ProjectsPage/>}/>

        </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App
