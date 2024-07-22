import React from 'react'
import skills from './data/skills.json'



const Skills = () => {
  return (
    <>
    <div className="skills w-[900px]  " id="skills">
      <h1 className='text-3xl ml-[120px]'>SKILLS</h1>
      <div className="items flex justify-center items-center flex-wrap m-auto ml-[20vw] w-[700px]" >
      {skills.map((data)=>{
       return (
       <>
       
            <div data-aos="flip-left" data-aos-duration="1000" className="item  " key={data.id}>
            <img className='w-[60px] ml-[60px]' src={`/assets/${data.imageSrc}`} alt="" />
              
                <h2>{data.title}</h2>
            </div>
          
            
        </>
          
      )
      
      
      })}
        </div>
</div>
        </>
    
    
  )
}

export default Skills
