import React from 'react'
import Project from '../Project/Project'
import './projects.css'
import data from '../../projectData'

export default function Projects() {
  const projects = data.projectSummaries.map(
    project => {
      return (
        <Project
        key={project.id}
        id={project.id}
        title={project.title}
        image={project.imageSource}
        summary={project.summary}
        tags={project.tags}
        path={project.detailsPath}
        />
      )
    }
  )
  
  return (
    <div id='projects--section'>
      <h2>Projects</h2>
      {projects}
      <a href="https://github.com/Danielle254" target="_blank">More projects on GitHub</a>
    </div>
  )
}
