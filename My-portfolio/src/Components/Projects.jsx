import "./Projects.css"
import Firstphoto from "../assets/Hiking.jpg"

function Projects() {
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
        <div className="second">
          <div className="project-num">01</div>
          <div className="second1-div">
            <img src={Firstphoto} alt="Project" />
          </div>
          <div className="second2-div">
            <div className="h2-i">
              <h2>Project Name</h2>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </div>
            <div>
              <p>Projects built to showcase clean design, functionality, and practical web development experience.</p>
            </div>
          </div>
        </div>

        <div className="second">
          <div className="project-num">02</div>
          <div className="second1-div">
            <img src={Firstphoto} alt="Project" />
          </div>
          <div className="second2-div">
            <div className="h2-i">
              <h2>Project Name</h2>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </div>
            <div>
              <p>Projects built to showcase clean design, functionality, and practical web development experience.</p>
            </div>
          </div>
        </div>

        <div className="second">
          <div className="project-num">03</div>
          <div className="second1-div">
            <img src={Firstphoto} alt="Project" />
          </div>
          <div className="second2-div">
            <div className="h2-i">
              <h2>Project Name</h2>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </div>
            <div>
              <p>Projects built to showcase clean design, functionality, and practical web development experience.</p>
            </div>
          </div>
        </div>

        <div className="second">
          <div className="project-num">04</div>
          <div className="second1-div">
            <img src={Firstphoto} alt="Project" />
          </div>
          <div className="second2-div">
            <div className="h2-i">
              <h2>Project Name</h2>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </div>
            <div>
              <p>Projects built to showcase clean design, functionality, and practical web development experience.</p>
            </div>
          </div>
        </div>
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
