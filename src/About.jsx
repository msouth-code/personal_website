import headshot from "./assets/selfie.jpg";
import "./About.css";

export default function About() {
  return (
    <div>
      <div className="photo-container">
        <img className="photo" src={headshot} width="30%" height="auto"></img>
      </div>
      
      <div className="about-text">
        Hello! My name is Miaya South and I am currently seeking Entry Level Software Engineering opportunities. 
        I am a 2024 graduate from Johns Hopkins University with a B.S. in Computer Science and a minor in
        Marketing & Communications. 
      </div>
    </div>
  );
}
