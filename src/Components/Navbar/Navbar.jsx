import React, {useState} from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import profile from '../../Images/profile rose background.jpeg';
import modeIcon from '../../Images/light-dark.png'
import modeIconWhite from '../../Images/light-dark-white.png'
import motionIcon from '../../Images/motion-icon.png';
import './navbar.css'
import motionIconWhite from '../../Images/motion-icon-white.png'
import resume from '../../resume.pdf'

export default function Navbar(props) {
  

  
  return (
    <div className={props.lightMode ? 'navbar--background' : 'navbar--background-dark'}>
      <div className='navbar--content'>
        <img id={props.lightMode ? 'profile' : 'profile-dark'} src={profile} />
        <Link to={'/'} className={props.lightMode ? 'nav--title' : 'nav--title-dark'}><p>Danielle Lindblom</p></Link>
        <div id='desktop--menu'>
          <ul className='menu--items'>
            <li><Link to={'/#about--section'} className={props.lightMode ? 'menu-light' : 'menu-dark'}><p>About</p></Link></li>
            <li><Link to={'/#projects--section'} className={props.lightMode ? 'menu-light' : 'menu-dark'}><p>Projects</p></Link></li>
            <li><Link to={props.lightMode ? '/#contact--section' : '/#contact--section-dark'} className={props.lightMode ? 'menu-light' : 'menu-dark'}><p>Contact</p></Link></li>
            <li><a className={props.lightMode ? 'menu-light' : 'menu-dark'} href={resume} target='_blank'>Resume</a></li>
          </ul>                       
          <button id={props.lightMode ? 'mode--button-desktop' : 'mode--button-desktop-dark'} className='access--button-desktop' onClick={props.toggleLightMode}><img className='icon' src={props.lightMode ? modeIcon : modeIconWhite} />{props.lightMode ? " Dark Mode" : " Light Mode"}</button>
          <button id={props.lightMode ? 'animate--button-desktop' : 'animate--button-desktop-dark'} className='access--button-desktop' onClick={props.toggleAnimations}><img src={props.lightMode ? motionIcon : motionIconWhite} className='icon'/>{props.animationsOn === true ? "Animations OFF" : "Animations ON"}</button>           
        </div> 
        <button id={props.lightMode ? 'menu--button' : 'menu--button-dark'} onClick={props.menuOn}>MENU</button>         
      </div>
    </div>
  )
}
