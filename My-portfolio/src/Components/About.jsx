import "./About.css"

function About() {
  return (
    <div className="parent-about" id="about-section">
      <div className="about-container">
        <div className="words">
          <p className="words-label">About Me</p>
          <h1 className="h1-1">Crafting <em>Digital</em><br />Experiences</h1>
          <div className="stat-row">
            <div className="stat-item">
              <div className="stat-num">2+</div>
              <div className="stat-label">Years Building</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">10+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">∞</div>
              <div className="stat-label">To Learn</div>
            </div>
          </div>
        </div>
        <div className="about">
          <p>Hi! I'm Christian Iradukunda — a passionate front-end developer based in Kigali, Rwanda.
            I love turning ideas into clean, responsive, and user-friendly websites. Currently building
            my skills in HTML, CSS, and React, with a strong interest in creating smooth layouts and
            engaging user experiences.</p>
          <br />
          <p>I enjoy learning new design trends, experimenting with animations, and improving my code
            every day. My goal is to grow into a professional front-end developer who can build modern
            and impactful web projects that make a real difference.</p>
        </div>
      </div>
    </div>
  )
}

export default About;
