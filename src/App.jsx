import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Experience from './Components/Experience'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Aos from "aos"
import "aos/dist/aos.css"


const App = () => {
useEffect(()=>{
Aos.init();
},[])
  return (
    <div>
      <Navbar/>
      <div className="container">
      <Home/>
    <Experience/><Skills></Skills>
    <Projects/>
    <Contact></Contact>
      </div>
     
    </div>
  )
}

export default App