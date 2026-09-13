import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import './About.css';
import './Skills.css';

export default function Skills() {
  return (
    <Container>
      
        <h2>Skills</h2>
     
      
        <Stack direction="row" spacing={1} sx={{ maxWidth: 300, mx: 'auto' }}>
            <Chip label="Python" variant="outlined" />
            <Chip label="Java" variant="outlined" />
            <Chip label="React" variant="outlined" />
            <Chip label="HTML" variant="outlined" />
        </Stack>
      
      </Container>
  );
}