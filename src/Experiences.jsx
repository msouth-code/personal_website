import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./Experiences.css";

export default function Experiences() {
  return (
    <>
      <div className="experiences-container">
        <h2 className="box-header">Experiences</h2>
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
                Software Engineering Intern
              </Typography>
              <Typography variant="body2">
                <ul>
                  <li>Worked to translate Ruby code for a Hulu API Downloader to Java and implemented updated features.</li>
                  <li>Organized an entire project using low-level designs, sequence diagrams, and Ruby code 
                    pseudo-code translation, both manually and by utilizing internal AI tools.</li>
                  <li>Frequently presented project progress to the team during demo days, proactively met with my mentor 
                    and manager for feedback, and studied the code of other engineers to improve my own and make it 
                    more cohesive with the codebase.</li>
                </ul>
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box className="experiences-cards">
          <Card sx={{ borderRadius: "25px" }}>
            <CardContent>
              <Typography
                gutterBottom
                sx={{ color: "text.secondary", fontSize: 14 }}
              >
                May 2022 - August 2022
              </Typography>
              <Typography variant="h5" component="div">
                Nextdoor
              </Typography>
              <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                Software Engineering Intern
              </Typography>
              <Typography variant="body2">
                <ul>
                  <li>wat i did</li>
                </ul>
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <h2 className="box-header">Non-Technical</h2>
        <Box className="experiences-cards">
          <Card sx={{ borderRadius: "25px" }}>
            <CardContent>
              <Typography
                gutterBottom
                sx={{ color: "text.secondary", fontSize: 14 }}
              >
                May 2026 - August 2026
              </Typography>
              <Typography variant="h5" component="div">
                The Boys & Girls Club of San Francisco
              </Typography>
              <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                2nd Grade Program Leader / Camp Mendocino Camp Counselor
              </Typography>
              <Typography variant="body2">
                <ul>
                  <li>Guided and taught 2nd Grade students through assigned homework, organized supplementary materials, 
                    and supervised activities such as field trips, physical education, and community activities.
                  </li>
                  <li>
                    Supervised, supported, and bonded with over 170 middle school-aged girls over the entire duration 
                    of summer-long sleepaway camp.
                  </li>
                </ul>
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box className="experiences-cards">
          <Card sx={{ borderRadius: "25px" }}>
            <CardContent>
              <Typography
                gutterBottom
                sx={{ color: "text.secondary", fontSize: 14 }}
              >
                February 2025 - December 2025
              </Typography>
              <Typography variant="h5" component="div">
                The Salvation Army Kroc Center
              </Typography>
              <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                After School Program Associate
              </Typography>
              <Typography variant="body2">
                <ul>
                  <li>wat i did</li>
                </ul>
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </div>
    </>
  );
}
