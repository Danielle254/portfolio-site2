import React from 'react'
import profile from '../../Images/profile rose background.jpeg';
import modeIcon from '../../Images/light-dark-mode-icon.png';
import motionIcon from '../../Images/motion-icon.png';
import './navbar.css'

export default function Navbar(props) {
  
  return (
    <div className={props.mode === "light" ? 'navbar--background' : 'navbar--background-dark'}>
      <div className='navbar--content'>
        <img id='profile' src={profile} />
        <p className='nav--title'>Danielle Lindblom</p>
        <div className='menu--items'>
          <ul className='main--menu'>
            <li><a className={props.mode === "light" ? 'menu-light' : 'menu-dark'} href="#about--section">About</a></li>
            <li><a className={props.mode === "light" ? 'menu-light' : 'menu-dark'} href="#projects--section">Projects</a></li>
            <li><a className={props.mode === "light" ? 'menu-light' : 'menu-dark'} href="#contact--section">Contact</a></li>
            <li><a className={props.mode === "light" ? 'menu-light' : 'menu-dark'} href="">Resume</a></li>
          </ul>                       
          <button id={props.mode === "light" ? 'mode--button-desktop' : 'mode--button-desktop-dark'} className='access--button-desktop' onClick={props.toggleMode}><img className='icon' src={modeIcon} />{props.mode === "light" ? " Dark Mode" : " Light Mode"}</button>
          <button id='animate--button-desktop' className='access--button-desktop' onClick={props.toggleAnimations}><img src={motionIcon} className='icon'/>{props.animationsOn === true ? "Animations OFF" : "Animations ON"}</button>           
        </div> 
        {props.mobileMenuVisible === false && <button id='menu--button' onClick={props.toggleMenu}>MENU</button>}         
      </div>
    </div>
  )
}
