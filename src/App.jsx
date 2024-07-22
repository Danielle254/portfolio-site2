import { React, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import './app.css'
import Menu from './Components/Menu/Menu'
import Hero from './Components/Hero/Hero'
import Details from './Components/Details/Details'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'



function App() {
  const [lightMode, setLightMode] = useOutletContext();
  const [animationsOn, setAnimationsOn] = useState(true);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [showContent, setShowContent] = useState(true);

  function menuOn() {
    const screenWidth = window.innerWidth;
    setMobileMenuVisible(true);
    if (screenWidth < 800) {
      setShowContent(false);
    }    
  }

  function menuOff() {
    setMobileMenuVisible(false);
    setShowContent(true);
  }

  function toggleAnimations() {
    setAnimationsOn(!animationsOn);
  }  

  function mobileReset() {
    setMobileMenuVisible(false);
    setShowContent(true);
  }
  

  return (
    <div className={lightMode ? 'App' : 'App-dark'}>
      <div id='app--container'>        
        {mobileMenuVisible && 
        <Menu 
        menuOff={menuOff} 
        mobileReset={mobileReset}
        lightMode={lightMode}
        animationsOn={animationsOn}
        toggleLightMode={toggleLightMode}  
        toggleAnimations={toggleAnimations}     
        />}        
        {showContent && <Hero
        lightMode={lightMode}
        animationsOn={animationsOn} 
        />}
        {showContent && <Details 
        lightMode={lightMode}
        animationsOn={animationsOn} 
        />}
        {showContent && <Projects 
        lightMode={lightMode}
        animationsOn={animationsOn} 
        />}
        {showContent && <Contact
        lightMode={lightMode} 
        animationsOn={animationsOn}      
        />}        
      </div>
    </div>
  )
}

export default App
