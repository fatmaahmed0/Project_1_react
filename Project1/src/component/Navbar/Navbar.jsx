import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export default function Navbar() {
  return (

<nav class="bg-cyan-800 fixed top-0 left-0  z-50 w-full flex flex-row items-center md:py-9 py-8 text-white uppercase ">
  <div class="max-w-screen-xl w-full not-only:w flex flex-wrap items-center ">
    {/* <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse"> */}
         <div className='w-[50%] text-white text-2xl md:text-3xl md:pl-24 ml-3 font-bold'>
            <Link to='' >Start Framework</Link>
          </div>
    {/* </a> */}
    <button data-collapse-toggle="navbar-multi-level-dropdown" type="button" class="inline-flex items-end p-2  w-[40%] h-10 justify-end text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none " aria-controls="navbar-multi-level-dropdown" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/></svg>
    </button>
    <div class="hidden w-full md:flex md:justify-end md:w-auto" id="navbar-multi-level-dropdown">
      <ul class="md:w-[30%] ml-6 md:ml-36 md:justify-around gap-y-2.5 md:gap-0 md:items-center font-bold  flex flex-col p-0 mt-4 rounded-base bg-neutral-secondary-soft md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-neutral-primary">
        <li>
          <NavLink to='about'>About</NavLink>
          {/* <a href="#" class="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0" aria-current="page">Home</a> */}
        </li>
        <li>
         <NavLink to='portfolio'>Portfolio</NavLink></li>
        <li>
          <NavLink to='contact'>Contact</NavLink>
          {/* <a href="#" class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Pricing</a> */}
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

// Navbar
// <div className='fixed top-0 left-0 right-0 z-50 bg-cyan-800 w-full flex flex-row items-center py-9 text-white uppercase'>
//     <div className='w-[50%] text-white text-3xl pl-24 font-bold'>
//         <Link to='' >Start Framework</Link>
//     </div>
//   <ul className='w-[30%] flex flex-row ml-48 justify-around items-center font-bold'>
//     <li>
//         <NavLink to='about'>About</NavLink>
        
//     </li>
//     <li>
//         <NavLink to='portfolio'>Portfolio</NavLink>
//     </li>
//     <li>
//         <NavLink to='contact'>Contact</NavLink>
//     </li>
//   </ul>
// </div>