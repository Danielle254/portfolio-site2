import React from 'react'
import './about.css'

export default function About(props) {
  return (
    <div id='about--section'>
      <h2>About Me</h2>
      <h4 id={props.mode === "light" ? 'h4-light' : 'h4-dark'}>Once an engineer, always an engineer.</h4>
      <p>With a background in mechanical engineering, small business ownership, and technical training, I've always been a problem solver. Now, I'm bringing all of that experience to frontend web development.<br/><br/>
      I built websites for my small businesses for many years using Wix. I'm fascinated with why people do what they do, and that includes using a website.<br/><br/>
      I'm passionate about accessibility and inclusion, and I'm on a mission to make digital spaces more welcoming and easy to enjoy.<br/>
      </p>
      <a id={props.mode === "light" ? 'resume-button-light' : 'resume-button-dark'} href="" >Full Resume</a>
    </div>
  )
}
