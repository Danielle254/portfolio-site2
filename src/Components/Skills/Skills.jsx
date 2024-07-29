import React from 'react'
import './skills.css'

export default function Skills(props) {
  return (
    <section id={props.lightMode ? 'skills--section' : 'skills--section-dark'}>
      <h2>Skills</h2>
      <div className='content--container'>
        <h4 className={props.lightMode ? 'h4-light' : 'h4-dark'}>Technical</h4>
        <div id='list--container'>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
            <li>Web Accessibility</li>
          </ul>
          <ul id='second-list'> 
            <li>Sass, Bootstrap</li>
            <li>Git & GitHub</li>
            <li>Testing</li>
            <li>VSCode</li>
          </ul>
        </div>
        <h4 className={props.lightMode ? 'h4-light skills2' : 'h4-dark skills2'}>Professional</h4>
        <ul>
          <li>Team Leadership</li>
          <li>Continuous Improvement</li>
          <li>Technical Training</li>
          <li>Project Collaboration</li>
        </ul>
      </div>
    </section>
  )
}
