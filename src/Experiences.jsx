import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./Experiences.css";

export default function Experiences() {
  return (
    <>
      <div className="experiences-container">
        <h2>Experiences</h2>
        <Box className="experiences-cards">
          <Card sx={{ borderRadius: "25px" }}>
            <CardContent>
              <Typography
                gutterBottom
                sx={{ color: "text.secondary", fontSize: 14 }}
              >
                May 2025 - August 2025
              </Typography>
              <Typography variant="h5" component="div">
                Amazon
              </Typography>
              <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                Software Engineering intern
              </Typography>
              <Typography variant="body2">
                what did i do
                <br />
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box className="experience-box">
          <Card sx={{ borderRadius: "25px" }}>
            <CardContent>
              <Typography
                gutterBottom
                sx={{ color: "text.secondary", fontSize: 14 }}
              >
                May 2025 - August 2025
              </Typography>
              <Typography variant="h5" component="div">
                Amazon
              </Typography>
              <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                Software Engineering intern
              </Typography>
              <Typography variant="body2">
                what did i do
                <br />
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </div>
    </>
  );
}
