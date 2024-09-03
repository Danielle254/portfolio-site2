import { React } from 'react'
import { useOutletContext } from 'react-router-dom'

import './app.css'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'



function App() {

  const [lightMode, showContent, animationsOn] = useOutletContext();
   
  if (showContent) {

    return (
      <div className={lightMode ? 'App' : 'App-dark'}>
        <div id='app--container'>                
          <Hero
          lightMode={lightMode}
          animationsOn={animationsOn} 
          />
          <About 
          lightMode={lightMode}
          animationsOn={animationsOn} 
          />
          <Projects 
          lightMode={lightMode}
          animationsOn={animationsOn} 
          />
          <Contact
          lightMode={lightMode} 
          animationsOn={animationsOn}      
          />        
        </div>
      </div>
    )
  }
  
}

export default App
