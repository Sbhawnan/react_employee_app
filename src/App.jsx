import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MediaCard from './components/employeeCard'
import Container from '@mui/material/Container';
import data from './data/data'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log(data[0].firstName);

  return (
    <Container fixed>
    <MediaCard employee={data} />
    </Container>
    
  )
}

export default App

