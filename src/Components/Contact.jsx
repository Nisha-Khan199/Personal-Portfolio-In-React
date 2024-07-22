import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaSquareUpwork } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      
      <div className="container contact h-[60vh]" id="contact">
<h1 className='ml-[12vh] text-2xl mt-[5vw]'>CONTACT ME</h1>
<div data-aos="zoom-in-up" data-aos-duration="1000"  className="icon" >
  <a href='https://www.linkedin.com/in/nisha-naveed-5068a02ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target="_blank" className="iconitem"><FaLinkedin className='icons'  /></a>
  <a  href="mailto:khannishanaveed@gmail.com" className="iconitem"><MdEmail className='icons'/></a>
  <a className="iconitem"><IoLogoWhatsapp className='icons' /></a>
  <a href='https://github.com/Nisha-Khan199/Task-List-' className="iconitem"><FaSquareUpwork className='icons' /></a>
  <a href='https://github.com/Nisha-Khan199/Task-List-' className="iconitem"><FaGithub className='icons'  /></a>
</div>
      </div>
    </>
  )
}

export default Contact
