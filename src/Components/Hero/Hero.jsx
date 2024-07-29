import React from 'react'
import './hero.css'
import door from '../../Images/door.png'
import doorDark from '../../Images/door-dark.png'

export default function Hero(props) {
  return (
    <section id='hero--section'>
      <div id='hero--container'>
        <div id='hero--content'>
          <h1>Hi, I'm Danielle</h1>
          <p>a <span id={props.lightMode ? 'span-light' : 'span-dark'}>Frontend Developer</span> creating inclusive spaces by increasing accessibility, one website at a time</p>
          <a href="/portfolio-site2/#projects--section" id={props.lightMode ? 'hero--button' : 'hero--button-dark'}>View Projects</a>
        </div>
        <img src={props.lightMode ? door : doorDark} id='door-image' alt='line drawing of a door opening' />
      </div>
    </section>
  )
}
