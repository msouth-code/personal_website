import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import headshot from './assets/fake headshot.jpeg';
import './About.css';

export default function About() {
  return (
    <Container>
      <Row>
        <Col>
            <img className="photo" src={headshot} width="90%" height="auto"></img>
        </Col>
        <Col>2 of 2</Col>
      </Row>
      </Container>
  );
}