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
                  <li>
                    Worked to translate Ruby code for a Hulu API Downloader to
                    Java and implemented updated features.
                  </li>
                  <li>
                    Organized an entire project using low-level designs,
                    sequence diagrams, and Ruby code pseudo-code translation,
                    both manually and by utilizing internal AI tools.
                  </li>
                  <li>
                    Frequently presented project progress to the team during
                    demo days, proactively met with my mentor and manager for
                    feedback, and studied the code of other engineers to improve
                    my own and make it more cohesive with the codebase.
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
                  <li>
                    Worked in React to develop a controlled component for main
                    card feature on Discover page of application.
                  </li>
                  <li>
                    Deployed several frontend changes on Discover page relating
                    to dark mode.
                  </li>
                  <li>
                    Actively engaged with every project presented to me over the
                    course of 12 weeks.
                  </li>
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
                  <li>
                    Guided and taught 2nd Grade students through assigned
                    homework, organized supplementary materials, and supervised
                    activities such as field trips, physical education, and
                    community activities.
                  </li>
                  <li>
                    Supervised, supported, and bonded with over 170 middle
                    school-aged girls over the entire duration of summer-long
                    sleepaway camp.
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
                  <li>
                    Guided and taught a class of 20 Kindergarten through 2nd
                    grade students while simultaneously providing emotional
                    support and daily structure.
                  </li>
                  <li>
                    Developed and led 2 to 3 creative and engaging activities
                    for students in Kindergarten through 5th grade per month.
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
                September 2023 - June 2024
              </Typography>
              <Typography variant="h5" component="div">
                HeyTutor
              </Typography>
              <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                Lead Tutor
              </Typography>
              <Typography variant="body2">
                <ul>
                  <li>
                    Tutored over 30 elementary students in English and
                    Mathematics after school daily, and helped improve test
                    scores by 15% overall in both subjects.
                  </li>
                  <li>
                    Managed a group of after-school tutors and ensured they were
                    administering tutoring material to their best ability and
                    working to troubleshoot any problems that arose.
                  </li>
                  <li>
                    Cultivated strong relationships with students to allow them
                    to feel safe, respected, and excited to learn in the
                    tutoring environment.
                  </li>
                </ul>
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </div>
    </>
  );
}
