import Chip from "@mui/material/Chip";
import "./About.css";
import "./Skills.css";

export default function Skills() {
  return (
    <div className="skills-container">
      <h2 className="box-header">Skills</h2>

      <div className="chip-container">
        <Chip
          sx={{ backgroundColor: "white", margin: "2px" }}
          label="Python"
          variant="outlined"
          className="chip"
        />
        <Chip
          sx={{ backgroundColor: "white", margin: "2px" }}
          label="Java"
          variant="outlined"
          className="chip"
        />
        <Chip
          sx={{ backgroundColor: "white", margin: "2px" }}
          label="React"
          variant="outlined"
          className="chip"
        />
        <Chip
          sx={{ backgroundColor: "white", margin: "2px" }}
          label="HTML"
          variant="outlined"
          className="chip"
        />
        <Chip
          sx={{ backgroundColor: "white", margin: "2px" }}
          label="CSS"
          variant="outlined"
          className="chip"
        />
        <Chip
          sx={{ backgroundColor: "white", margin: "2px" }}
          label="Interpersonal Communication"
          variant="outlined"
          className="chip"
        />
        <Chip
          sx={{ backgroundColor: "white", margin: "2px" }}
          label="Organized"
          variant="outlined"
          className="chip"
        />
      </div>
    </div>
  );
}
