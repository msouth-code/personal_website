import "./App.css";
import Menu from "./Menu";
import About from "./About";
import Skills from "./Skills";
import Experiences from "./Experiences";
import Contact from "./Contact";
import Projects from "./Projects";
import { useRef } from "react";

function App() {
  const aboutRef = useRef();
  const skillsRef = useRef();
  const experiencesRef = useRef();

  return (
    <>
      <Menu
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        experiencesRef={experiencesRef}
      />
      <div className="main">
        <div className="leftHandSide">
          <section className="about-container">
            <About ref={aboutRef} />
          </section>
          <section className="skills-section">
            <Skills ref={skillsRef} />
          </section>
          {/* <section className="contact-section">
            <Contact />
          </section> */}
        </div>
        <div className="middle">
          <section className="projects-section">
            <Projects />
          </section>
        </div>
        <div className="rightHandSide">
          <section className="experiences-section">
            <Experiences ref={experiencesRef} />
          </section>
        </div>
      </div>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
