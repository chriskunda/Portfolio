import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'

import "./Nav.css"
function Nav() {
  return( 
  

  <nav>
    <div className="chris">
     <i className="fa-solid fa-bars"></i>
    </div>    
    <div className="links">
      <a href="#body">Home</a>
      <a href="#project-section">Projects</a>
      <a href="#skills-section">Skills</a>
      <a href="#contact-section">Contact</a>
    </div>
    {/* <div className="nav-button">
      <button className="buto">Contact</button>
    </div> */}
  </nav>

  )
}

export default Nav;