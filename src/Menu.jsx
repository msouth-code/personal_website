import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Menu.css";

function Menu() {
//   function scrollIntoView(type) {
//     pageRefs.current[type].scrollIntoView({ behavior: "smooth" });
//   }

  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top" 
    style={{backgroundColor: "#d980ff", border: "outset #ef78a6 2px", borderRadius: "45px"}}>
      <Container>
        <Navbar.Brand className="name-header">Miayunique South</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" class="ms-auto">
          <Nav className="me-auto">
            <Nav.Link className="menu-item" href="https://www.linkedin.com/in/miayasouth" target="_blank">LinkedIn</Nav.Link>
            <Nav.Link className="menu-item" href="mailto:miayasouth2019@gmail.com">Email</Nav.Link>
            {/* <Nav.Link href="/assets/South_Miayunique_Teaching_Resume_Sep2026.pdf" target="_blank">Resume</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
