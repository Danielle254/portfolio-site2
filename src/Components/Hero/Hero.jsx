import React from 'react'
import './hero.css'

export default function Hero(props) {
  return (
    <div id='hero--section'>
      <div id='hero--container'>
        <h1>Hi, I'm Danielle</h1>
        <p>a <span id={props.mode === "light" ? 'span-light' : 'span-dark'}>Frontend Developer</span> creating inclusive spaces by increasing accessibility, one website at a time</p>
        <a href="#projects--section" id={props.mode === "light" ? 'hero--button' : 'hero--button-dark'}>View Projects</a>
      </div>
    </div>
  )
}
