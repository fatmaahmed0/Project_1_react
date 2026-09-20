import React from 'react'
import avatar from "../../assets/images/avataaars.svg";
export default function Home() {
  return (
    <div className='bg-teal-500  flex flex-col items-center'>
      <div className="w-[50%] lg:w-[20%]  pt-12 ">
        <img src={avatar} alt="hhh" />
      </div>
      <div className="mt-6 pb-12">
        <h1 className='uppercase text-3xl lg:text-4xl text-white font-semibold'>start Framework</h1>
        <div className="flex items-center justify-center mt-5">
          <div className="bg-white h-1 w-24"></div>
          <i className="fa-solid fa-meteor text-white text-xl  pl-6 pr-10"></i>
          <div className="bg-white h-1 w-24"></div>
        </div>
        <h3 className='text-white mt-4 text-center '>Graphic Artist - Web Designer - Illustrator</h3>
      </div>
    </div>
  )
}
