import React from 'react'
import resume from '../../resume.pdf'
import './about.css'
import daniellePic from '../../Images/danielle-photo.jpeg'

export default function About(props) {
  return (
    <section id='about--section' className={props.lightMode ? 'about--background' : 'about--background-dark'}>
      <div className='about--container'>
        <h2>About Me</h2>
        <div className="about--content-container"> 
          <img alt='front view of Danielle Lindblom sitting at a table in a cafe' className={props.lightMode ? 'danielle-pic' : 'danielle-pic-dark'} src={daniellePic} />
          <div>   
            <h4 id={props.lightMode ? 'h4-light' : 'h4-dark'}>A Diverse Background</h4>
            <p>
            Lean Manufacturing {'>'} Canine Behaviorist {'>'} Life Coach {'>'} SaaS Implementation
            <br/><br/>
            I've had quite the career journey! There's a thru-line, though: <b>Solving Problems and Helping People.</b>
            <br/><br/>
            I've always been keen to figure out how things work - whether that's machines, animals, or people. This has fueled my passions for engineering and behavior science, with a strong emphasis on teaching.
            </p>      
          
            <h4 id={props.lightMode ? 'h4-light' : 'h4-dark'}>Let's Get Programming!</h4>
            <p>
            My first exposure to programming was a C++ course for my Mechanical Engineering degree. Later, I built and updated my own Wix websites for my small businesses. 
            <br/><br/>
            Now, I've spent the last 3 years learning Software Engineering through my own grit and determination. <b>Once and engineer, always an engineer.</b> I'm invested in this career for the long term, and I'm bringing all of my experiences and learnings with me as unique strengths!
            </p>
          </div>
        </div>        
        <a id={props.lightMode ? 'resume-button-light' : 'resume-button-dark'} href={resume} target='_blank'>View Resume</a>
      </div> 
    </section>
  )
}
