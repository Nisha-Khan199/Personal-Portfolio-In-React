import React from 'react'
import experience from './data/experience.json'


const Experience = () => {
  return (
  <>
  <div className="container ml-[110px] ex w-[900px]" id="experience">
<h1 className='text-4xl'>Experience</h1>
{
  experience.map((data)=>{
    return (
      <>
      <div data-aos="zoom-in" data-aos-duration="1000" key={data.id} className='ex-items ml-[120px] p-[20px] border-2 my-10 rounded-sm border-yellow-400  m-[25px] w-[800px] flex  items-center text-center'>
        <div className="left">
          <img className="w-[60px] mr-[110px] h-[60px]" src={`/assets/${data.imageSrc}`}alt="" />
         
        </div>
        <div className="right  ">
          <h1 className='text-2xl'> {data.role}</h1>
          <h4> <span className="text-green-300 text-lg">{data.startDate}{""} {data.endDate}{""}  </span> <span className="text-yellow-300 text-lg">{data.location}</span></h4>
          <h5 className="text-yellow-300">{data.experience[0]}</h5>
          <h5 className="text-yellow-300">{data.experience[1]}</h5>
          
          </div>
       
          </div>
          </>
       
             
          )
        
          
        })}
      
      </div>
   
  


  </>
  )
}


export default Experience
