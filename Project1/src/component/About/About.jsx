
export default function About() {
  return (
    <div className='bg-teal-500 flex flex-col items-center text-white py-16 lg:py-36 '>
      <h1 className='uppercase text-3xl lg:text-4xl text-white font-bold'>about component</h1>
      <div className="flex items-center justify-center mt-5">
          <div className="bg-white h-1 w-24"></div>
          <i className="fa-solid fa-meteor text-white text-xl  pl-6 pr-10"></i>
          <div className="bg-white h-1 w-24"></div>
        </div>
        <div className="flex flex-col mx-3 px-12 lg:flex-row  lg:px-42 mt-4">
          <p className='lg:mr-6 mb-4'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          <p className='pr-10'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
      
    </div>
  )
}
