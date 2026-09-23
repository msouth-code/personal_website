import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import './About.css';
import './Skills.css';

export default function Skills() {
  return (
    <div className="skills-container">
      
        <h2>Skills</h2>
     
      
        <Stack direction="row" spacing={1} sx={{ justifyContent: "center", alignItems: "center" }}>
            <Chip sx={{backgroundColor: "white"}} label="Python" variant="outlined" className='chip'/>
            <Chip sx={{backgroundColor: "white"}} label="Java" variant="outlined" className='chip'/>
            <Chip sx={{backgroundColor: "white"}} label="React" variant="outlined" className='chip'/>
            <Chip sx={{backgroundColor: "white"}} label="HTML" variant="outlined" className='chip'/>
            <Chip sx={{backgroundColor: "white"}} label="CHIP" variant="outlined" className='chip'/>
            <Chip sx={{backgroundColor: "white"}} label="CHIP" variant="outlined" className='chip'/>
            <Chip sx={{backgroundColor: "white"}} label="CHIP" variant="outlined" className='chip'/>
        </Stack>
      
      </div>
  );
}