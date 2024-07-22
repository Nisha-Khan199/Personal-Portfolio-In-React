import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className=" flex  justify-between items-center  border-b-2 w-full h-[70px]  " data-aos="fade-down" data-aos-duration="1000" >
<div className ="pl-10 text-lg hover:border-b-2  hover:border-yellow-600" >Portfolio</div>
<div className="flex gap-10 text-l pr-8 ">
    <a  className="hover:border-b-2 hover:border-yellow-600" href="#home">Home</a>
    <a   className="hover:border-b-2 hover:border-yellow-600"  href="#experience">Experience</a>
    <a     className="hover:border-b-2 hover:border-yellow-600" href="#skills">Skills </a>
    <a    className="hover:border-b-2 hover:border-yellow-600" href="#projects"> Projects</a> 
    <a  className="hover:border-b-2 hover:border-yellow-600" href="#contact">Contact Me</a>
</div>


      </div>
    </div>
  )
}

export default Navbar
