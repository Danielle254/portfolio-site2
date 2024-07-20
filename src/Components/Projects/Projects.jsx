import React from 'react'
import Project from '../Project/Project'
import './projects.css'
import data from '../../projectData'

export default function Projects(props) {
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
        lightMode={props.lightMode}
        />
      )
    }
  )
  
  return (
    <div id='projects--section'>
      <h2>Projects</h2>
      {projects}
      <a id={props.lightMode ? 'more-projects-button' : 'more-projects-button-dark'} href="https://github.com/Danielle254" target="_blank">More Projects</a>
    </div>
  )
}
