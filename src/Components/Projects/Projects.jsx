import React from 'react'
import Project from '../Project/Project'
import './projects.css'


export default function Projects(props) {
  const projectData = [
    {id: 1,
    title: "Service Dogs Around Town",
    summary: "This is Version 1 of my capstone project, aimed at helping service dog handlers record information about the businesses they frequent as it relates to the comfort and safety of their dogs.",
    tags: ["React", "Sass", "Local Storage", "Forms"]},
    {id: 2,
    title: "Custom Conference Itinerary",    
    summary: "This website displays the agenda for a conference and allows the user to add activities from the official agenda to their own personal itinerary, which they can print as a nicely formatted document. If they need to make changes later, the browser stores their itinerary for them.", 
    tags: ["React", "CSS", "Local Storage", "Format PDF"]}, 
    {id: 3,
    title: "Dog Food Calculator",
    summary: "This app calculates how long a given bag of dog food will last, factoring in a multiple dog household, and provides the user with pricing information and a link to purchase the food online. There is also the ability to compare 2 different foods.", 
    tags: ["JavaScript", "Bootstrap", "API", "Forms"]},
    {id: 4,
    title: "Alpine Vet Redesign",
    summary: "I took the website of a local business that I frequent, Alpine Vet Care in Missoula, and gave the homepage a refresh. This project showcases my ability to use basic HTML and CSS to create a responsive, more accessible webpage for desktop and mobile.", 
    tags: ["HTML", "CSS", "Accessibility"]}
  ];

  const projects = projectData.map(
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
        animationsOn={props.animationsOn}
        />
      )
    }
  )
  
  return (
    <section id='projects--section'>
      <h2>Projects</h2>
      {projects}
      <a id={props.lightMode ? 'more-projects-button' : 'more-projects-button-dark'} href="https://github.com/Danielle254" target="_blank">More Projects</a>
    </section>
  )
}
