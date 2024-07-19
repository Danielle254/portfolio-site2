import React from 'react'
import profile from '../../Images/profile rose background.jpeg';
import modeIcon from '../../Images/light-dark.png'
import modeIconWhite from '../../Images/light-dark-white.png'
import motionIcon from '../../Images/motion-icon.png';
import './navbar.css'
import motionIconWhite from '../../Images/motion-icon-white.png'

export default function Navbar(props) {
  
  return (
    <div className={props.mode === "light" ? 'navbar--background' : 'navbar--background-dark'}>
      <div className='navbar--content'>
        <img id={props.mode === "light" ? 'profile' : 'profile-dark'} src={profile} />
        <a className={props.mode === "light" ? 'nav--title' : 'nav--title-dark'} href='/'>Danielle Lindblom</a>
        <div className='menu--items'>
          <ul className='main--menu'>
            <li><a className={props.mode === "light" ? 'menu-light' : 'menu-dark'} href="#about--section">About</a></li>
            <li><a className={props.mode === "light" ? 'menu-light' : 'menu-dark'} href="#projects--section">Projects</a></li>
            <li><a className={props.mode === "light" ? 'menu-light' : 'menu-dark'} href="#contact--section">Contact</a></li>
            <li><a className={props.mode === "light" ? 'menu-light' : 'menu-dark'} href="">Resume</a></li>
          </ul>                       
          <button id={props.mode === "light" ? 'mode--button-desktop' : 'mode--button-desktop-dark'} className='access--button-desktop' onClick={props.toggleMode}><img className='icon' src={props.mode === "light" ? modeIcon : modeIconWhite} />{props.mode === "light" ? " Dark Mode" : " Light Mode"}</button>
          <button id={props.mode === "light" ? 'animate--button-desktop' : 'animate--button-desktop-dark'} className='access--button-desktop' onClick={props.toggleAnimations}><img src={props.mode === "light" ? motionIcon : motionIconWhite} className='icon'/>{props.animationsOn === true ? "Animations OFF" : "Animations ON"}</button>           
        </div> 
        <button id={props.mode === "light" ? 'menu--button' : 'menu--button-dark'} onClick={props.toggleMenu}>MENU</button>         
      </div>
    </div>
  )
}
