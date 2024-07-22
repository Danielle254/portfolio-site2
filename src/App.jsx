import { React } from 'react'
import { useOutletContext } from 'react-router-dom'
import './app.css'

import Hero from './Components/Hero/Hero'
import Details from './Components/Details/Details'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'



function App() {
  const [lightMode] = useOutletContext();
  /* const [animationsOn, setAnimationsOn] = useOutletContext(); */  
  
  return (
    <div className={lightMode ? 'App' : 'App-dark'}>
      <div id='app--container'>                
        <Hero
        lightMode={lightMode}
        /* animationsOn={animationsOn}  */
        />
        <Details 
        lightMode={lightMode}
        /* animationsOn={animationsOn}  */
        />
        <Projects 
        lightMode={lightMode}
        /* animationsOn={animationsOn}  */
        />
        <Contact
        lightMode={lightMode} 
        /* animationsOn={animationsOn}  */     
        />        
      </div>
    </div>
  )
}

export default App
