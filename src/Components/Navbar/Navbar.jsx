import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import profile from '../../Images/profile rose background.jpeg';
import modeIcon from '../../Images/light-dark.png'
import modeIconWhite from '../../Images/light-dark-white.png'
import motionIcon from '../../Images/motion-icon.png';
import './navbar.css'
import motionIconWhite from '../../Images/motion-icon-white.png'

export default function Navbar(props) {
  
  return (
    <div className={props.lightMode ? 'navbar--background' : 'navbar--background-dark'}>
      <div className='navbar--content'>
        <img id={props.lightMode ? 'profile' : 'profile-dark'} src={profile} />
        <a className={props.lightMode ? 'nav--title' : 'nav--title-dark'} href='/'>Danielle Lindblom</a>
        <div id='desktop--menu'>
          <ul className='menu--items'>
            <li><Link to={'/#about--section'} style={{'text-decoration': 'none'}}><a className={props.lightMode ? 'menu-light' : 'menu-dark'} >About</a></Link></li>
            <li><Link to={'/#projects--section'} style={{'text-decoration': 'none'}}><a className={props.lightMode ? 'menu-light' : 'menu-dark'}>Projects</a></Link></li>
            <li><Link to={'/#contact--section'} style={{'text-decoration': 'none'}}><a className={props.lightMode ? 'menu-light' : 'menu-dark'} >Contact</a></Link></li>
            <li><a className={props.lightMode ? 'menu-light' : 'menu-dark'} href="">Resume</a></li>
          </ul>                       
          <button id={props.lightMode ? 'mode--button-desktop' : 'mode--button-desktop-dark'} className='access--button-desktop' onClick={props.toggleLightMode}><img className='icon' src={props.lightMode ? modeIcon : modeIconWhite} />{props.lightMode ? " Dark Mode" : " Light Mode"}</button>
          <button id={props.lightMode ? 'animate--button-desktop' : 'animate--button-desktop-dark'} className='access--button-desktop' onClick={props.toggleAnimations}><img src={props.lightMode ? motionIcon : motionIconWhite} className='icon'/>{props.animationsOn === true ? "Animations OFF" : "Animations ON"}</button>           
        </div> 
        <button id={props.lightMode ? 'menu--button' : 'menu--button-dark'} onClick={props.menuOn}>MENU</button>         
      </div>
    </div>
  )
}
