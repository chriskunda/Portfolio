import "./Skills.css"

function Skills() {
    return(
            <div className="parent-skills" id="skills-section">
                <div className="skills">
                    <h2>Tools that create my Projects</h2>
                    <div className="tools">
                        <div>
                            <i class="fa-brands fa-html5"></i>
                            <h2>HTML</h2>
                        </div>
                        <div>
                            <i class="fa-brands fa-css3-alt"></i>
                            <h2>CSS</h2>
                        </div>
                        <div>
                            <i class="fa-brands fa-react"></i>
                            <h2>REACT</h2>
                        </div>
                        <div>
                            <i class="fa-brands fa-figma"></i>
                            <h2>FIGMA</h2>
                        </div>
                        
                    </div>
                </div>
            </div>
    )
}

export default Skills;