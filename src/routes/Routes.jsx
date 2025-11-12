import React from 'react'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Home from '../pages/Home/Home.jsx'
import About from '../pages/About/AboutUs.jsx'
import Footer from '../pages/Contact/Footer.jsx'
import MainLayout from '../components/MainLayout.jsx'
import Contact from '../pages/Contact/Footer.jsx'

const Routes = () => {

    const router = createBrowserRouter([
        {
      path: "/",
      element: <MainLayout />,
      children: [

        {path:"/", element: <Home/>},
        {path:"/About" , element: <About/>},
        {path:"/Contact" , element: <Contact/>},
      ],
    },
    ]) 

  return (
   
    <RouterProvider  router = {router} />

  )
}

export default Routes
