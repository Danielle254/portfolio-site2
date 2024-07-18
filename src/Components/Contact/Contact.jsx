import React from 'react'
import githubIcon from '../../Images/github_logo.png'
import linkedinIcon from '../../Images/linkedin_logo.png'
import emailLight from '../../Images/email-icon-white.png'
import emailDark from '../../Images/email-icon-dark.png'
import resumeIcon from '../../Images/resume_icon.png'
import './contact.css'

export default function Contact(props) {
  
    function copyToClipboard(event) {
        navigator.clipboard.writeText("danielle.lindblom@gmail.com");
        event.preventDefault();
      }
  
    return (
    <div id='contact--section'>
      <div className='contact--content'>
        <h2>Contact</h2>
        <p>Available for remote work. Based in Missoula, Montana USA.<br />Let's connect to discuss opportunities!</p>
        <div className='email--container'>
          <img src={props.mode === "light" ? emailDark : emailLight} style={{width: '50px'}} /> {/* email icon */}
          <a href="mailto:danielle.lindblom@gmail.com">Danielle.Lindblom@gmail.com</a>  
        </div>    
        <div className='social--container'>
          <div className='social--icon'>
              <a href="https://github.com/Danielle254" target='_blank'>
              <img src={githubIcon} />
              <p className='social--text'>GitHub</p></a>
          </div>
          <div className='social--icon'>
              <a href="https://www.linkedin.com/in/danielle-lindblom/" target='_blank'>
              <img src={linkedinIcon} />
              <p className='social--text'>LinkedIn</p></a>
          </div>
          <div className='social--icon'>
              <a href='' >
              <img src={resumeIcon} />
              <p className='social--text'>Resume</p></a>
          </div>
        </div>
      </div>
    </div>
  )
}
