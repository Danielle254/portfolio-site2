import React from 'react'
import './menu.css'
import modeIcon from '../../Images/light-dark-mode-icon.png';
import animateIcon from '../../Images/motion-icon.png';

export default function Menu(props) {
  return (
    <nav id='nav'>
      <button id='close--nav' onClick={props.toggleMenu}>X</button>
      <ul>
        <li><a href="#about--section" onClick={props.toggleMenu}>About</a></li>
        <li><a href="#projects--section" onClick={props.toggleMenu}>Projects</a></li>
        <li><a href="#contact--section" onClick={props.toggleMenu}>Contact</a></li>
        <li><a href="" onClick={props.toggleMenu}>Resume</a></li>
        <div className='access--container'>
          <button id='mode--button' className='access--button' onClick={props.toggleMode}><img className='icon' src={modeIcon} />{props.mode === "light" ? "  Dark Mode" : "   Light Mode"}</button>
          <button id='animate--button' className='access--button' onClick={props.toggleAnimations}><img src={animateIcon} className='icon'/>{props.animationsOn === true ? "Animations OFF" : "Animations ON"}</button>
        </div>
      </ul>
    </nav>
  )
}
