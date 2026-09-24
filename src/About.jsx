import headshot from "./assets/selfie.jpg";
import "./About.css";

export default function About() {
  return (
    <div>
      <div className="photo-container">
        <img className="photo" src={headshot} width="30%" height="auto"></img>
      </div>
      
      <div className="about-text">
        Hello! My name is Miaya South and <br></br>I am currently seeking Entry Level Software Engineering opportunities. 
        <br></br>I am a 2023 graduate from <br></br>Johns Hopkins University with a <br></br>B.S. in Computer Science and a <br></br>minor in
        Marketing & Communications. 
      </div>
    </div>
  );
}
