import React from 'react'
import githubIcon from '../Images/github_logo.png'
import linkedinIcon from '../Images/linkedin_logo.png'
import emailLight from '../Images/email-icon-white.png'
import emailDark from '../Images/email-icon-dark.png'
import resumeIcon from '../Images/resume_icon.png'

export default function Contact(props) {
  
    function copyToClipboard() {
        navigator.clipboard.writeText("danielle.lindblom@gmail.com");
      }
  
    return (
    <div>
      <h2>Contact</h2>
      <p>Available for remote work. Based in Missoula, Montana USA.</p>
      <p>Let's connect to discuss opportunities!</p>
      <img src={props.mode === "light" ? emailDark : emailLight} style={{width: '50px'}} /> {/* email icon */}
      <a href="mailto:danielle.lindblom@gmail.com">Danielle.Lindblom@gmail.com</a>
      <div>
        <a href="mailto:danielle.lindblom@gmail.com" className='button--primary small'>Email Me</a>
        <a href="" className='button--secondary small' onClick={copyToClipboard}>Copy Email</a>
      </div>
      <div>
        <div>
            <img src={githubIcon} style={{width: '50px'}}/>
            <p>GitHub</p>
        </div>
        <div>
            <img src={linkedinIcon} style={{width: '50px'}}/>
            <p>LinkedIn</p>
        </div>
        <div>
            <img src={resumeIcon} style={{width: '50px'}}/>
            <p>Resume</p>
        </div>
      </div>
    </div>
  )
}
