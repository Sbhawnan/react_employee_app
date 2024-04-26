import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MediaCard from './components/employeeCard'
import Container from '@mui/material/Container';
import data from './data/data'
import './App.css'
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
const label = { inputProps: { 'aria-label': 'Switch demo' } };


function App() {

  const [ShowInactive,setShowInactive] = useState(false);
  console.log(ShowInactive);

  const filteredData = ShowInactive ? data.filter(( employee) => employee.onLeave) : data;

  const handleToggle = (event) => {
    setShowInactive(event.target.checked);
    console.log(event.target.checked);
  } 


  return (
    <Container fixed>
      <Typography variant="h3" component="h2"> 
      Employee Card
</Typography>
      <Switch {...label} checked={ShowInactive} onClick={handleToggle}/>
    <MediaCard employee={filteredData} />
    </Container>
    
  )
} 
export default App

