import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'

import "./Nav.css"
function Nav() {
  return( 
  

  <nav>
    <div className="chris">
     <i className="fa-solid fa-bars burger-icon"></i>
    </div>    
    <div className="links">
      <a className='As' href="#body">Home</a>
      <a className='As' href="#project-section">Projects</a>
      <a className='As' href="#skills-section">Skills</a>
      <a className='As' href="#contact-section">Contact</a>
    </div>
    <div className="portfolio-h1">
      <h1>Poltfolio.</h1>
    </div>
  </nav>

  )
}

export default Nav;