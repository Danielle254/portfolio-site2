import React from 'react'
import './menu.css'

export default function Menu(props) {
  return (
    <nav id='nav'>
      <button id='close--nav' onClick={props.toggleMenu}>X</button>
      <ul>
        <li><a href="#about--section">About</a></li>
        <li><a href="#projects--section">Projects</a></li>
        <li><a href="#contact--section">Contact</a></li>
        <li><a href="">Resume</a></li>
        <div className='access--container'>
          <button id='mode--button' className='access--button'>{props.mode === "light" ? "Dark Mode" : "Light Mode"}</button>
          <button id='animate--button' className='access--button'>{props.animationsOn === true ? "Animations OFF" : "Animations ON"}</button>
        </div>
      </ul>
    </nav>
  )
}
