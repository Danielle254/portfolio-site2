import React from 'react'
import './hero.css'
import graphic from '../../Images/access-image.png'
import { HashLink as Link } from 'react-router-hash-link'

export default function Hero(props) {
  let animateHero = props.animationsOn ? "animateHero" : "";

  return (
    <section id='hero--section'>
      <div id='hero--container'>
        <div id='hero--content'>
          <h1>Hi, I'm Danielle</h1>
          <p>a <span id={props.lightMode ? 'span-light' : 'span-dark'}>Frontend Engineer</span> creating impactful web experiences with a focus on accessibility</p>
          <Link to="/#projects--section" id={props.lightMode ? 'hero--button' : 'hero--button-dark'}>View Projects</Link>
        </div>
        <img src={graphic} className={`graphic ${animateHero}`} alt='web accessibility symbol illustration' />
      </div>
    </section>
  )
}
