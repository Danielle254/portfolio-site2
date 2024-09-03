import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import profile from '../../Images/profile rose background.jpeg';
import modeIcon from '../../Images/light-dark.png'
import modeIconWhite from '../../Images/light-dark-white.png'
import motionIcon from '../../Images/motion-icon.png';
import './navbar.css'
import motionIconWhite from '../../Images/motion-icon-white.png'
import resume from '../../resume.pdf'
import newWindow2 from '../../Images/external-link-icon.png'
import newWindowWhite2 from '../../Images/external-link-icon-white.png'

export default function Navbar(props) {
  
  if(props.showContent) {

    return (
      <header className={props.lightMode ? 'navbar--background' : 'navbar--background-dark'}>
        <div className='navbar--content'>
          <img id={props.lightMode ? 'profile' : 'profile-dark'} src={profile} alt='headshot of Danielle Lindblom with a circular border' />
          <Link to={'/#hero--section'} className={props.lightMode ? 'nav--title' : 'nav--title-dark'}>Danielle Lindblom</Link>
          <div id='desktop--menu'>
            <ul className='menu--items'>
              <li><Link to={'/#about--section'} className={props.lightMode ? 'menu-light' : 'menu-dark'}>About</Link></li>
              <li><Link to={'/#projects--section'} className={props.lightMode ? 'menu-light' : 'menu-dark'}>Projects</Link></li>
              <li><Link to={props.lightMode ? '/#contact--section' : '/#contact--section-dark'} className={props.lightMode ? 'menu-light' : 'menu-dark'}>Contact</Link></li>
              <li><a className={props.lightMode ? 'menu-light' : 'menu-dark'} href={resume} target='_blank'>Resume</a><img className='new-window-icon2' alt='' src={props.lightMode ? newWindow2 : newWindowWhite2} /></li>
            </ul>                       
            <button id={props.lightMode ? 'mode--button-desktop' : 'mode--button-desktop-dark'} className='access--button-desktop' onClick={props.toggleLightMode}><img className='icon' src={props.lightMode ? modeIcon : modeIconWhite}alt='' />{props.lightMode ? " Dark Mode" : " Light Mode"}</button>
            <button id={props.lightMode ? 'animate--button-desktop' : 'animate--button-desktop-dark'} className='access--button-desktop' onClick={props.toggleAnimations}><img src={props.lightMode ? motionIcon : motionIconWhite} className='icon' alt=''/>{props.animationsOn === true ? "Animations OFF" : "Animations ON"}</button>           
          </div> 
          <button id={props.lightMode ? 'menu--button' : 'menu--button-dark'} onClick={props.menuOn} aria-label='open mobile menu'>MENU</button>         
        </div>
      </header>
    )
  }
  
  
}
