import headshot from "./assets/selfie.jpg";
import "./About.css";

export default function About() {
  return (
    <div>
      <img className="photo" src={headshot} width="90%" height="auto"></img>
      <div className="about-text">
        hi my name is miaya this is my about section
      </div>
    </div>
  );
}
