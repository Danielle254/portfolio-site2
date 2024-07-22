import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import './menu.css'
import modeIcon from '../../Images/light-dark.png';
import animateIcon from '../../Images/motion-icon.png';


export default function Menu(props) {
  return (
    <nav id={props.lightMode ? 'nav' : 'nav-dark'}>
      <button id={props.lightMode ? 'close--nav' : 'close--nav-dark'} onClick={props.menuOff}>X</button>
      <ul>
        <li><Link to={'/#about--section'} style={{'text-decoration': 'none'}}><a onClick={props.mobileReset} >About</a></Link></li>
        <li><Link to={'/#projects--section'} style={{'text-decoration': 'none'}}><a onClick={props.mobileReset}  >Projects</a></Link></li>
        <li><Link to={'/#contact--section'} style={{'text-decoration': 'none'}}><a onClick={props.mobileReset}  >Contact</a></Link></li>
        <li><a onClick={props.mobileReset}  href="" >Resume</a></li>
        <div className='access--container'>
          <button id={props.lightMode ? 'mode--button' : 'mode--button-dark'} className='access--button' onClick={props.toggleLightMode}><img className='icon' src={modeIcon} />{props.lightMode ? "  Dark Mode" : "   Light Mode"}</button>
          <button id={props.lightMode ? 'animate--button' : 'animate--button-dark'} className='access--button' onClick={props.toggleAnimations}><img src={animateIcon} className='icon'/>{props.animationsOn === true ? " Animations OFF" : " Animations ON"}</button>
        </div>
      </ul>
    </nav>
  )
}
