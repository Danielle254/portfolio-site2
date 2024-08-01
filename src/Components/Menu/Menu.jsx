import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import './menu.css'
import modeIcon from '../../Images/light-dark.png';
import animateIcon from '../../Images/motion-icon.png';
import resume from '../../resume.pdf'


export default function Menu(props) {

  let display = props.mobileMenuVisible ? "open" : "";

  let mode = props.lightMode ? "nav" : "nav-dark";       

  return (
    <nav className={`${mode} ${display}`}>
      <button id={props.lightMode ? 'close--nav' : 'close--nav-dark'} onClick={props.menuOff} aria-label='close mobile menu'>X</button>
      <ul>
        <li><Link to={'/#about--section'} className={props.lightMode ? 'menu-link' : 'menu-link-dark'}><p onClick={props.mobileReset} >About</p></Link></li>
        <li><Link to={'/#projects--section'}  className={props.lightMode ? 'menu-link' : 'menu-link-dark'}><p onClick={props.mobileReset}  >Projects</p></Link></li>
        <li><Link to={props.lightMode ? '/#contact--section' : '/portfolio-site2/#contact--section-dark'}  className={props.lightMode ? 'menu-link' : 'menu-link-dark'}><p onClick={props.mobileReset}>Contact</p></Link></li>
        <li><a onClick={props.mobileReset} href={resume} target='_blank'>Resume</a></li>
        <div className='access--container'>
          <button id={props.lightMode ? 'mode--button' : 'mode--button-dark'} className='access--button' onClick={props.toggleLightMode}><img className='icon' src={modeIcon} alt='' />{props.lightMode ? "  Dark Mode" : "   Light Mode"}</button>
          <button id={props.lightMode ? 'animate--button' : 'animate--button-dark'} className='access--button' onClick={props.toggleAnimations}><img src={animateIcon} className='icon' alt=''/>{props.animationsOn === true ? " Animations OFF" : " Animations ON"}</button>
        </div>
      </ul>
    </nav>
  )

  
}
