import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './component/Layout/Layout'
import About from './component/About/About'
import Portfolio from './component/Portfolio/Portfolio'
import Contact from './component/Contact/Contact'
import Home from './component/Home/Home'
function App() {
  const [count, setCount] = useState(0)
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
