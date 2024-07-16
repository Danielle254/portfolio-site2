import './app.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Details from './Components/Details/Details'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import { React, useState } from 'react'


function App() {
  const [mode, setMode] = useState('light');
  const [animationsOn, setAnimationsOn] = useState(true);
  const [menuVisible, setMenuVisible] = useState(false);

  function toggleMenu() {
    setMenuVisible(!menuVisible);
  }

  return (
    <div className='App'>
      <Navbar 
      menuVisible={menuVisible}
      showMenu={toggleMenu}      
      />
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
