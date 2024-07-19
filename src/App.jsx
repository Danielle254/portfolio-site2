import './app.css'
import Navbar from './Components/Navbar/Navbar'
import Menu from './Components/Menu/Menu'
import Hero from './Components/Hero/Hero'
import Details from './Components/Details/Details'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import { React, useState } from 'react'
/* import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import Project1 from './Pages/Project1';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path=''
  )
) */


function App() {
  const [mode, setMode] = useState('light');
  const [animationsOn, setAnimationsOn] = useState(true);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [showContent, setShowContent] = useState(true);

  function menuOn() {
    const screenWidth = window.innerWidth;
    setMobileMenuVisible(true);
    if (screenWidth <= 600) {
      setShowContent(false);
    }    
  }

  function menuOff() {
    setMobileMenuVisible(false);
    setShowContent(true);
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

  function mobileReset() {
    setMobileMenuVisible(false);
    setShowContent(true);
  }
  

  return (
    <div className={mode === "light" ? 'App' : 'App-dark'}>
      <div id='app--container'>
        {!mobileMenuVisible && <Navbar 
        mobileMenuVisible={mobileMenuVisible}
        menuOn={menuOn}  
        mode={mode} 
        animationsOn={animationsOn}
        toggleMode={toggleMode}  
        toggleAnimations={toggleAnimations}    
        />}
        {mobileMenuVisible && 
        <Menu 
        menuOff={menuOff} 
        mobileReset={mobileReset}
        mode={mode}
        animationsOn={animationsOn}
        toggleMode={toggleMode}  
        toggleAnimations={toggleAnimations}     
        />}        
        {showContent && <Hero
        mode={mode}
        animationsOn={animationsOn} 
        />}
        {/* {showContent && <Details 
        mode={mode}
        animationsOn={animationsOn} 
        />}
        {showContent && <Projects 
        mode={mode}
        animationsOn={animationsOn} 
        />} */}
        {showContent && <Contact
        mode={mode} 
        animationsOn={animationsOn}      
        />}
        {showContent && <Footer 
        mode={mode}
        />}
      </div>
    </div>
  )
}

export default App
