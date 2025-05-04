import React from 'react'
import HomePage from './pages/HomePage'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router'
import MainLayout from './layout/MainLayout'
import ProjectsPage from './pages/ProjectsPage'
import NotFoundPage from './pages/NotFoundPage'
import UnderConstruction from './components/UnderConstruction'
const App = () => {
    const router = createBrowserRouter
    (
      createRoutesFromElements(
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<HomePage/>}/>
          
          <Route path="/overview" element={<UnderConstruction/>}/>
          <Route path="/calendar" element={<UnderConstruction/>}/>
          <Route path="/analytics" element={<UnderConstruction/>}/>
          <Route path="/activity" element={<UnderConstruction/>}/>
          <Route path="/projects" element={<ProjectsPage/>}/>


          <Route path="*" element={<NotFoundPage/>}/>

        </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App
