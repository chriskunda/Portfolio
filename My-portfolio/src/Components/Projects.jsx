import "./Projects.css"
import Firstphoto from "../assets/Hiking.jpg"

function Projects() {
    return(
        <div className="proj" id="project-section">

            <h1>My Work.</h1>

            <div className="Ps">
            <p>A showcase of projects that reflect my skills in front-end development, clean design, and building practical, user-focused web experiences.</p>
            </div>

            <div className="div-container">

                <div className="second">

                    <div className="second1-div">

                        <img src={Firstphoto} alt="" />

                    </div>
                    <div className="second2-div">
                        <div className="h2-i">
                        <h2>Project name</h2>
                        <i className="fa-solid fa-link"></i>
                        </div>
                        <div>
                        <p>Projects built to showcase clean design, functionality, 
                            and practical web development experience.</p>
                        </div>
                        
                    </div>
                </div>

                <div className="second">
                    <div className="second1-div">

                        <img src={Firstphoto} alt="" />

                    </div>
                    <div className="second2-div">
                        <div className="h2-i">
                        <h2>Project name</h2>
                        <i className="fa-solid fa-link"></i>
                        </div>
                        <div>
                        <p>Projects built to showcase clean design, functionality, and practical web development experience.</p>
                        </div>
                        
                    </div>
                </div>

                <div className="second">
                    <div className="second1-div">

                        <img src={Firstphoto} alt="" />

                    </div>
                    <div className="second2-div">
                        <div className="h2-i">
                        <h2>Project name</h2>
                        <i className="fa-solid fa-link"></i>
                        </div>
                        <div>
                        <p>Projects built to showcase clean design, functionality, and practical web development experience..</p>
                        </div>
                        
                    </div>
                </div>

                <div className="second">
                    <div className="second1-div">

                        <img src={Firstphoto} alt="" />

                    </div>
                    <div className="second2-div">
                        <div className="h2-i">
                        <h2>Project name</h2>
                        <i className="fa-solid fa-link"></i>
                        </div>
                        <div>
                        <p>Projects built to showcase clean design, functionality, and practical web development experience.</p>
                        </div>
                        
                    </div>
                </div>

                <div className="second">
                    <div className="second1-div">

                        <img src={Firstphoto} alt="" />

                    </div>
                    <div className="second2-div">
                        <div className="h2-i">
                        <h2>Project name</h2>
                        <i className="fa-solid fa-link"></i>
                        </div>
                        <div>
                        <p>Projects built to showcase clean design, functionality, and practical web development experience.</p>
                        </div>
                        
                    </div>
                </div>

                <div className="second">
                    <div className="second1-div">

                        <img src={Firstphoto} alt="" />

                    </div>
                    <div className="second2-div">
                        <div className="h2-i">
                        <h2>Project name</h2>
                        <i className="fa-solid fa-link"></i>
                        </div>
                        <div>
                        <p>Projects built to showcase clean design, functionality, and practical web development experience.</p>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Projects;