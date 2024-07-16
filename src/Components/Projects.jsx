import React from 'react'
import Project from './Project'

export default function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <Project />
      <Project />
      <Project />
      <a className='button--secondary large' href="https://github.com/Danielle254">More projects on GitHub</a>
    </div>
  )
}
