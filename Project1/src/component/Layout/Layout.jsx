import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Layout() {
  return (
    <div>
      <Navbar/>
      <main className='pt-25'>
      <Outlet></Outlet>

      </main>
      <Footer/>
    </div>
  )
}
