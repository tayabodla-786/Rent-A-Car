import React from 'react'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Home from '../pages/Home/Home.jsx'
import About from '../pages/About/About.jsx'
import Contact from '../pages/Contact/Contact.jsx'
import Services from '../pages/Services/Services.jsx'
import MainLayout from '../components/MainLayout.jsx'





const Routes = () => {

    const router = createBrowserRouter([
        {
      path: "/",
      element: <MainLayout />,
      children: [

        {index:true , element: <Home/>},
        {path:"/About" , element: <About/>},
        {path:"/Contact" , element: <Contact/>},
        {path:"/Services" , element: <Services/>},
      ],
    },
    ]) 



  return (
   
    <RouterProvider  router = {router} />

  )
}

export default Routes
