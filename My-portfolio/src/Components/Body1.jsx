import "./Body1.css"

function Body() {
  return (
    <div className="body-section" id="body">
      <div className="names">
        <div className="names-introduction">
          <p className="he">Frontend Developer</p>
          <h1 className="head1">Christian<br />Iradukunda</h1>
          <p>Building interfaces that feel as good as they look —<br />clean code, thoughtful design, real results.</p>
        </div>
        <div className="but">
          <button className="butt" onClick={() => window.open('/cv.pdf')}>View my CV</button>
          <button className="butt" style={{ background: 'transparent', color: 'var(--text)', border: '0.5px solid var(--border-strong)' }}
            onClick={() => document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' })}>
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  )
}

export default Body;
