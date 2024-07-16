import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Details from './Components/Details'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import { React, useState } from 'react'


function App() {
  const [mode, setMode] = useState('light');
  const [animationsOn, setAnimationsOn] = useState(true);

  return (
    <div>
      <Navbar />
      <Hero />
      <Details />
      <Projects />
      <Contact
      mode={mode}
      />
      <Footer />
    </div>
  )
}

export default App
