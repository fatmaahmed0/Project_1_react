import { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './component/Layout/Layout'
import About from './component/About/About'
import Portfolio from './component/Portfolio/Portfolio'
import Contact from './component/Contact/Contact'
import Home from './component/Home/Home'
function App() {
let x= createBrowserRouter([
  {path:'' ,element:<Layout/> ,children:[
    {index:true,element:<Home/>},
    {path:'about',element:<About/>},
    {path:'portfolio',element:<Portfolio/>},
    {path:'contact',element:<Contact/>},
  ]}
])
  return <RouterProvider router={x}></RouterProvider>
}

export default App
