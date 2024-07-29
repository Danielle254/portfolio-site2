import React from 'react'
import githubIcon from '../../Images/github_logo.png'
import linkedinIcon from '../../Images/linkedin_logo.png'
import emailLight from '../../Images/email-icon-white.png'
import emailDark from '../../Images/email-icon-dark.png'
import resumeIcon from '../../Images/resume_icon.png'
import githubWhite from '../../Images/github-white.png'
import linkedinWhite from '../../Images/linkedin-white.png'
import resumeWhite from '../../Images/resume-white.png'
import resume from '../../resume.pdf'
import copy from '../../Images/copy icon.png'
import copyDark from '../../Images/copy icon dark.png'
import './contact.css'

export default function Contact(props) {
  
    function copyToClipboard(event) {
        navigator.clipboard.writeText("danielle.lindblom@gmail.com");
        event.preventDefault();
      }
  
    return (
    <div id={props.lightMode ? 'contact--section' : 'contact--section-dark'}>
      <div className='contact--content'>
        <h2>Contact</h2>
        <p>Available for remote work. Based in Missoula, Montana USA.<br />Let's connect to discuss opportunities!</p>
        <div className='email--container'>
          <img src={props.lightMode ? emailDark : emailLight} className='email-icon' alt=''/> 
          <a id={props.lightMode ? 'link-light' : 'link-dark'} href="mailto:danielle.lindblom@gmail.com">Danielle.Lindblom@gmail.com</a>
          <img src={props.lightMode ? copy : copyDark} className={props.lightMode ? 'copy-icon' : 'copy-icon-dark'} onClick={copyToClipboard} alt='copy email address to clipboard' title='Copy to Clipboard'/>
        </div>    
        <div className='social--container'>
          <div className={props.lightMode ? 'social--icon' : 'social--icon-dark'}>
              <a className={props.lightMode ? 'social--text' : 'social--text-dark'} href="https://github.com/Danielle254" target='_blank'>
              <img src={props.lightMode ? githubIcon : githubWhite} alt=''/>
              <p>GitHub</p></a>
          </div>
          <div className={props.lightMode ? 'social--icon' : 'social--icon-dark'}>
              <a className={props.lightMode ? 'social--text' : 'social--text-dark'} href="https://www.linkedin.com/in/danielle-lindblom/" target='_blank'>
              <img src={props.lightMode ? linkedinIcon : linkedinWhite} alt=''/>
              <p>LinkedIn</p></a>
          </div>
          <div className={props.lightMode ? 'social--icon' : 'social--icon-dark'}>
              <a className={props.lightMode ? 'social--text' : 'social--text-dark'} href={resume} target='_blank'>
              <img src={props.lightMode ?resumeIcon : resumeWhite} alt=''/>
              <p>Resume</p></a>
          </div>
        </div>
      </div>
    </div>
  )
}
