import React from 'react'
import project from './data/project.json'

const Projects = () => {
    return (
      <>
        <div className="container projects ml-[45px]  text-2xl my-3" id="projects">
          <h1>PROJECTS</h1>
          <div className="   row flex justify-center my-4   items-center ">
            {project.map((data) => (
              <>
                <div
                  key={data.id}
                  className="my-4 text-lg mx-6 "
                >
                  <div data-aos="flip-right" data-aos-duration="1000"
                    className="card bg-dark text-light"
                    style={{
                      width: "18rem",
                      border: "1px solid yellow",
                      boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
                    }}
                   
                  >
                    <div className="img flex justify-center my-6 align-center ">
                      <img
                        src={data.imageSrc}
                        className="card-img-top"
                        alt="..."
                        style={{
                          width: "250px",
                          height: "200px",
                          border: "2px solid yellow",
                          borderRadius: "10px",
                        }}
                      />
                    </div>
                    <div className="card-body  mb-4 text-center">
                      <h5 className="card-title">{data.title}</h5>
                      <p className="card-text m-1">{data.description}</p>
                      <a href={data.demo} className="btn bg-blue-600 rounded px-2 p mx-3">
                        Demo
                      </a>
                      <a href={data.source} className="btn rounded px-2  bg-yellow-400">
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </>
    );
  };




export default Projects
