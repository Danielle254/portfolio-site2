import React from 'react'
import './skills.css'

export default function Skills() {
  return (
    <div id='skills--section'>
      <h2>My Skills</h2>
      <h4>Technical Skills</h4>
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
      <h4 className='skills2'>Professional Skills</h4>
      <ul>
        <li>Team Leadership</li>
        <li>Continuous Improvement</li>
        <li>Technical Training</li>
        <li>Project Collaboration</li>
      </ul>
    </div>
  )
}
