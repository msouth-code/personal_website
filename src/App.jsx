import "./App.css";
import Menu from "./Menu";
import About from "./About";
import Skills from "./Skills";
import Experiences from "./Experiences";
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
          <section>
            <Experiences ref={experiencesRef} />
          </section>
        </div>
        <div className="rightHandSide">
          <section className="about-container">
            <About ref={aboutRef} />
          </section>
          <section className="skills-section">
            <Skills ref={skillsRef} />
          </section>
        </div>
      </div>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
