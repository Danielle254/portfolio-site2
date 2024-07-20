import React from 'react'
import './menu.css'
import modeIcon from '../../Images/light-dark.png';
import animateIcon from '../../Images/motion-icon.png';


export default function Menu(props) {
  return (
    <nav id={props.lightMode ? 'nav' : 'nav-dark'}>
      <button id={props.lightMode ? 'close--nav' : 'close--nav-dark'} onClick={props.menuOff}>X</button>
      <ul>
        <li><a onClick={props.mobileReset} href="#about--section" >About</a></li>
        <li><a onClick={props.mobileReset}  href="#projects--section" >Projects</a></li>
        <li><a onClick={props.mobileReset}  href="#contact--section" >Contact</a></li>
        <li><a onClick={props.mobileReset}  href="" >Resume</a></li>
        <div className='access--container'>
          <button id={props.lightMode ? 'mode--button' : 'mode--button-dark'} className='access--button' onClick={props.toggleLightMode}><img className='icon' src={modeIcon} />{props.lightMode ? "  Dark Mode" : "   Light Mode"}</button>
          <button id={props.lightMode ? 'animate--button' : 'animate--button-dark'} className='access--button' onClick={props.toggleAnimations}><img src={animateIcon} className='icon'/>{props.animationsOn === true ? " Animations OFF" : " Animations ON"}</button>
        </div>
      </ul>
    </nav>
  )
}
