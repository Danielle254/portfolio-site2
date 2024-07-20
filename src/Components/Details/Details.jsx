import React from 'react'
import About from '../About/About'
import Skills from '../Skills/Skills'
import './details.css'

export default function Details(props) {
  return (
    <div id={props.lightMode ? 'details--section' : 'details--section-dark'}>
      <div className='details--container'>
        <About 
        lightMode={props.lightMode}
        />
        <Skills 
        lightMode={props.lightMode}
        />
      </div>
    </div>
  )
}
