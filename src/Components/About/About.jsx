import React from 'react'
import resume from '../../resume.pdf'
import './about.css'

export default function About(props) {
  return (
    <section id='about--section' className={props.lightMode ? 'about--background' : 'about--background-dark'}>
      <div className='about--container'>
        <h2>About Me</h2>        
        <h4 id={props.lightMode ? 'h4-light' : 'h4-dark'}>A Diverse Background</h4>
        <p>
        Mechanical Engineer {'>'} Lean Manufacturing Leader {'>'} Canine Behaviorist {'>'} Life Coach {'>'} Implementation Specialist
        <br/><br/>
        I've had quite the career journey!
        <br/><br/>
        The through-line of it all is: <b>Solving Problems and Helping People.</b>
        <br/><br/>
        I've always been keen to figure out how things work - whether that's assembly lines, animals, or people. This has manifested in a combination of technical professions and those rooted in behavior science, with a strong emphasis on teaching.
        </p>      
      
        <h4 id={props.lightMode ? 'h4-light' : 'h4-dark'}>Let's Get Programming!</h4>
        <p>
        My first exposure to programming was a C++ course for my Mechanical Engineering degree. Later, I loved building and updating my own websites for my small businesses using Wix. 
        <br/><br/>
        Now, I've spent the last 3 years learning Software Engineering through my own grit and determination. <b>Once and engineer, always an engineer.</b> I'm invested in this career for the long term, and I'm bringing all of my experiences and learnings with me as unique strengths!
        </p>
                
        <a id={props.lightMode ? 'resume-button-light' : 'resume-button-dark'} href={resume} target='_blank'>View Resume</a>
      </div> 
    </section>
  )
}
