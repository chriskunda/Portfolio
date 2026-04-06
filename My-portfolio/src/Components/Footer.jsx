import "./Footer.css"

const Footer = () => {
  return (
    <footer className="foot">
      <p className="foot-p">© {new Date().getFullYear()} Christian Iradukunda. Crafted with intent.</p>
      <div className="foot-links">
        <a href="https://github.com/chriskunda" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://www.instagram.com/ikristian2.0/" target="_blank" rel="noreferrer">Instagram</a>
      </div>
    </footer>
  );
}

export default Footer;
