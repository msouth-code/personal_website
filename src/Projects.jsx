import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import "./Projects.css";

export default function Projects() {
  return (
    <>
      <div className="projects-container">
        <h2 className="box-header">Projects</h2>
        <Box className="experiences-cards">
          <Card sx={{ borderRadius: "25px" }}>
            <CardContent sx={{ display: "flex", gap: "10px" }}>
              <div className="project-info">
                <Typography
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 14 }}
                >
                  tools used
                </Typography>
                <Typography variant="h5" component="div">
                  project name
                </Typography>
                <Typography variant="body2">
                  <ul>
                    <li>project description</li>
                  </ul>
                </Typography>
              </div>
              <div className="button-container">
                <Button variant="contained" sx={{ height: "25px", display: "flex", flex: "1 1 0", borderRadius: "25px", width: "150px", margin: "4px", backgroundColor: "#FE9DBC" }}>View Repo</Button>
                <Button variant="contained" sx={{ height: "25px", display: "flex", flex: "1 1 0", borderRadius: "25px", width: "150px", margin: "4px", backgroundColor: "#681711" }}>View Project</Button>
              </div>
              
            </CardContent>
          </Card>
        </Box>
        <Box className="experiences-cards">
          <Card sx={{ borderRadius: "25px" }}>
            <CardContent sx={{ display: "flex", gap: "10px" }}>
              <div className="project-info">
                <Typography
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 14 }}
                >
                  tools used
                </Typography>
                <Typography variant="h5" component="div">
                  project name
                </Typography>
                <Typography variant="body2">
                  <ul>
                    <li>project description</li>
                  </ul>
                </Typography>
              </div>
              <div className="button-container">
                <Button variant="contained" sx={{ height: "25px", display: "flex", flex: "1 1 0", borderRadius: "25px", width: "150px", margin: "4px", backgroundColor: "#FE9DBC" }}>View Repo</Button>
                <Button variant="contained" sx={{ height: "25px", display: "flex", flex: "1 1 0", borderRadius: "25px", width: "150px", margin: "4px", backgroundColor: "#681711" }}>View Project</Button>
              </div>
              
            </CardContent>
          </Card>
        </Box>
      </div>
    </>
  );
}
