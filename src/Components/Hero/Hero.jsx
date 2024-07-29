import React from 'react'
import './hero.css'

export default function Hero(props) {
  return (
    <section id='hero--section'>
      <div id='hero--container'>
        <h1>Hi, I'm Danielle</h1>
        <p>a <span id={props.lightMode ? 'span-light' : 'span-dark'}>Frontend Developer</span> creating inclusive spaces by increasing accessibility, one website at a time</p>
        <a href="/portfolio-site2/#projects--section" id={props.lightMode ? 'hero--button' : 'hero--button-dark'}>View Projects</a>
      </div>
    </section>
  )
}
