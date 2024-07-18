import React from 'react'
import './skills.css'

export default function Skills(props) {
  return (
    <div id='skills--section'>
      <h2>My Skills</h2>
      <h4 className={props.mode === "light" ? 'h4-light' : 'h4-dark'}>Technical Skills</h4>
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
      </ul></div>
      <h4 className={props.mode === "light" ? 'h4-light skills2' : 'h4-dark skills2'}>Professional Skills</h4>
      <ul>
        <li>Team Leadership</li>
        <li>Continuous Improvement</li>
        <li>Technical Training</li>
        <li>Project Collaboration</li>
      </ul>
    </div>
  )
}
