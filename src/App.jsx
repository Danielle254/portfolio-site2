import './app.css'
import Navbar from './Components/Navbar/Navbar'
import Menu from './Components/Menu/Menu'
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

  function toggleMode() {
    const currentMode = mode;
    switch (currentMode) {
      case "light":
        setMode("dark");
        break;
      case "dark":
        setMode("light");
        break;
    }
  }

  function toggleAnimations() {
    setAnimationsOn(!animationsOn);
  }

  return (
    <div className='App'>
      <div id='app--container'>
        <Navbar 
        menuVisible={menuVisible}
        toggleMenu={toggleMenu}  
        mode={mode}    
        />
        {menuVisible && 
        <Menu 
        toggleMenu={toggleMenu} 
        mode={mode}
        animationsOn={animationsOn}
        toggleMode={toggleMode}  
        toggleAnimations={toggleAnimations}     
        />}
        <Hero
        mode={mode}
        animationsOn={animationsOn} 
        />
        <Details 
        mode={mode}
        animationsOn={animationsOn} 
        />
        <Projects 
        mode={mode}
        animationsOn={animationsOn} 
        />
        <Contact
        mode={mode} 
        animationsOn={animationsOn}      
        />
        <Footer 
        mode={mode}
        />
      </div>
    </div>
  )
}

export default App
