import "./Projects.css"
import Firstphoto from "../assets/Hiking.jpg"

function Projects() {
    return(
        <div className="proj" id="project-section">
            <h2>My Work.</h2>
            <div className="div-container">

                <div className="first">

                    <div className="fisrt1-div"><img className="firstphoto" src={Firstphoto} alt="" /></div>

                    <div className="first2-div">
                        <div className="cardlink1">
                            <i className="fa-solid fa-link"></i>
                        </div>
                        <div className="tembera-words">
                            <h1>TEMBERA</h1>
                            <p>Discover unforgettable destinations, rich cultures, and unique 
                            experiences from around the world. Our tourism website helps travelers 
                            explore top attractions, plan trips easily, and create lasting memories.</p>
                        </div>
                    </div>
                </div>

                <div className="second">
                    <div className="second1-div"></div>
                    <div className="second2-div"></div>
                </div>
                <div className="third">
                    <div className="third1-div"></div>
                    <div className="third2-div"></div>
                </div>
                <div className="fourth">
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Projects;