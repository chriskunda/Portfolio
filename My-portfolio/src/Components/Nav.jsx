import "./Nav.css"
function Nav() {

  const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
    <nav>
      <div className="nav-logo">C.I</div>
      <div className="links">
        <a className='As' href="" onClick={(e) => { e.preventDefault(); scrollToSection("body-section") }}>Home</a>
        <a className='As' href="" onClick={(e) => { e.preventDefault(); scrollToSection("about-section") }}>About</a>
        <a className='As' href="" onClick={(e) => { e.preventDefault(); scrollToSection("project-section") }}>Projects</a>
        <a className='As' href="" onClick={(e) => { e.preventDefault(); scrollToSection("skills-section") }}>Skills</a>
        <a className='As' href="" onClick={(e) => { e.preventDefault(); scrollToSection("contact-section") }}>Contact</a>
      </div>
    </nav>
  )
}

export default Nav;
