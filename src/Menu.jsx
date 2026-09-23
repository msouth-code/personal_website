import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Menu({ aboutRef, skillsRef, experiencesRef }) {
//   function scrollIntoView(type) {
//     pageRefs.current[type].scrollIntoView({ behavior: "smooth" });
//   }

  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top" 
    style={{backgroundColor: "#d980ff", border: "outset #ef78a6 2px", borderRadius: "45px"}}>
      <Container>
        <Navbar.Brand >Miayunique South</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" class="ms-auto">
          <Nav className="me-auto">
            <Nav.Link onClick={() => aboutRef.current?.scrollIntoView({ behavior: 'smooth' })} >About</Nav.Link>
            <Nav.Link onClick={() => skillsRef.current?.scrollIntoView({ behavior: 'smooth' })} >Skills</Nav.Link>
            <Nav.Link onClick={() => experiencesRef.current?.scrollIntoView({ behavior: 'smooth' })} >Experiences</Nav.Link>
            {/* <Nav.Link href="/assets/South_Miayunique_Teaching_Resume_Sep2026.pdf" target="_blank">Resume</Nav.Link> */}
            <Nav.Link mail-to >Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
