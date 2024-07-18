import React from 'react'
import About from '../About/About'
import Skills from '../Skills/Skills'
import './details.css'

export default function Details(props) {
  return (
    <div id='details--section'>
      <About 
      mode={props.mode}
      />
      <Skills 
      mode={props.mode}
      />
    </div>
  )
}
