import { useState } from "react"
import "./Projects.css"
import Firstphoto from "../assets/Hiking.jpg"
import project1 from "../assets/project1.png"

function Projects() {

  const [cards] = useState([
    {num: '01', image: project1, name: "E-commerce", 
    description:"Designed and developed an Auto Accessories Hub website. an e-commerce platform for new and used tyres, car accessories, and online wheel alignment booking.",
    link: "https://autoaccessorieshub.netlify.app/"}
  ])

  return (
    <div className="proj" id="project-section">
      <div className="projects-header">
        <div>
          <p className="proj-label">Portfolio</p>
          <h1><em>Selected</em> Work</h1>
        </div>
        <div className="Ps">
          <p>Real projects. Real problems solved.</p>
        </div>
      </div>

      
      <div className="div-container">

        {cards.map(card => (

        <div className="second">
          <div className="project-num">{card.num}</div>
          <div className="second1-div">
            <img src={card.image} alt="Project" />
          </div>
          <div className="second2-div">
            <div className="h2-i">
              <h2>{card.name}</h2>
              <a href={card.link}>
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
            <div>
              <p>{card.description}</p>
            </div>
          </div>
        </div>

        ))}

      </div> 

      <div className="project-button-container">
        <button className="project-button" onClick={() => window.open("https://github.com/chriskunda")}>
          <i className="fa-brands fa-github"></i>&nbsp; Visit My GitHub
        </button>
      </div>
    </div>
  )
}

export default Projects;
