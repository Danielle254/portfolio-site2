import React from 'react'
import profile from '../../Images/profile rose background.jpeg';
import modeIcon from '../../Images/light-dark-mode-icon.png';
import motionIcon from '../../Images/motion-icon.png';
import './navbar.css'

export default function Navbar(props) {
  
  return (
    <div className='navbar--background'>
      <div className='navbar--content'>
        <img id='profile' src={profile} />
        <p className='nav--title'>Danielle Lindblom</p>
        <div className='menu--items'>
          <ul className='main--menu'>
            <li><a href="#about--section">About</a></li>
            <li><a href="#projects--section">Projects</a></li>
            <li><a href="#contact--section">Contact</a></li>
            <li><a href="">Resume</a></li>
          </ul>                       
          <button id='mode--button-desktop' className='access--button-desktop' onClick={props.toggleMode}><img className='icon' src={modeIcon} />{props.mode === "light" ? " Dark Mode" : " Light Mode"}</button>
          <button id='animate--button-desktop' className='access--button-desktop' onClick={props.toggleAnimations}><img src={motionIcon} className='icon'/>{props.animationsOn === true ? "Animations OFF" : "Animations ON"}</button>           
        </div> 
                  
      </div>
    </div>
  )
}
