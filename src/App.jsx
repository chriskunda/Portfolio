import Nav from  "./Components/Nav";
import Body1 from "./Components/Body1";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

import "./App.css"

function App() {
  return (
    <div className="parent-container">
      <Nav />
      <Body1 />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;