import React, { useEffect, useRef } from 'react'
import nisha  from './data/nisha.jpg'  
import pdf from '../pdf/Resume.pdf'
import Typed from 'typed.js'
const Home = () => {
  const typedRef = useRef(null)
  useEffect(()=>{
    const options = {
       strings:["Welcome To My Profile", "I am Nisha Naveed", "I am a Software Engineer"," I am a Machine Learning Engineer", " I am a Frontend Developer"],
       typeSpeed:50,
       backSpeed:50,
       loop:true
    }
    const typed = new Typed(typedRef.current,options)
    return ()=>{
      typed.destroy()
    }
  },[])
 
  return (
    <>
    <div className='flex items-center justify-between h-[80vh]' id='home'>
<div data-aos="fade-up-right" data-aos-duration="1000" className=" box rounded-md  w-[620px] p-[30px]  border-2 border-yellow-400 text-center ml-[90px]">
        <h1 ref={typedRef} className="text-4xl mb-8 ">
          
        </h1>
        <a href={pdf} download={"Resume.pdf"}  className= " p-[15px]   border-yellow-400 border-2 hover:bg-yellow-500 hover:border-white hover:text-black  "> Download Resume</a>
     </div>
     <div data-aos="fade-up-left" data-aos-duration="1000" className="  flex justify-between items-center "> 
        <img src={nisha}  className ="box1 w-[250px]  rounded-full h-[250px] mr-[90px] border-4 border-yellow-400 " />
     </div>
   
     </div>
      </>
  )
}

export default Home
 