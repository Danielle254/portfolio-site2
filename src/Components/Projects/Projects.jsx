import { React, useState } from 'react'
import Project from '../Project/Project'
import './projects.css'



export default function Projects(props) {

  const [expandList, setExpandList] = useState(false);

  return (
    <section id='projects--section'>
      <h2>Projects</h2>
      <Project
        id={5}
        title='Service Dogs Around Town'
        highlight={true}
        summary="Web application that helps service dog handlers record and share information about the businesses they frequent as it relates to the comfort and safety of their service dogs."
        tags={["React", "JavaScript", "Google Maps API", "Firebase", "Tailwind CSS"]}
        lightMode={props.lightMode}
      />
      <Project
        id={6}
        highlight={true}
        title="Gridiron Survivor"
        summary="Football survivor pool web application built as part of an apprenticeship program. Team project involving agile sprint planning, unit testing, code reviews, and a real customer."
        tags={["Next.js", "TypeScript", "React", "Jest/RTL", "shadcn/ui"]}
        lightMode={props.lightMode}
      />
      {!expandList && <button className={props.lightMode ? 'expand-projects-button' : 'expand-projects-button-dark'} onClick={() => setExpandList(true)}>See More Projects &#x25BC;</button>}
      {expandList &&
      <>
      <Project
        id={1}
        title='Service Dogs Around Town - Version 1'
        summary="Web application allowing users to save and recall information about local businesses as it relates to the safety and comfort of their service dogs."
        tags={["React", "JavaScript", "CSS", "Local Storage"]}
        lightMode={props.lightMode}
      />
      <Project
        id={2}
        title="Custom Conference Itinerary"
        summary="This website displays the agenda for a conference and allows the user to add activities from the official agenda to their own personal itinerary, which they can print as a nicely formatted document. If they need to make changes later, the browser stores their itinerary for them."
        tags={["React", "JavaScript", "CSS", "Format PDF"]}
        lightMode={props.lightMode}
      />
      <Project
        id={3}
        title="Dog Food Calculator"
        summary="This app calculates how long a given bag of dog food will last, factoring in a multiple dog household, and provides the user with pricing information and a link to purchase the food online. There is also the ability to compare 2 different foods."
        tags={["JavaScript", "Bootstrap", "API", "Form Validation"]}
        lightMode={props.lightMode}
      />
      <Project
        id={4}
        title="Alpine Vet Redesign"
        summary="I took the website of a local business that I frequent, Alpine Vet Care in Missoula, and gave the homepage a refresh. This project showcases my ability to use basic HTML and CSS to create a responsive, more accessible webpage for desktop and mobile."
        tags={["HTML", "CSS", "Accessibility"]}
        lightMode={props.lightMode}
      />
      <button className={props.lightMode ? 'expand-projects-button' : 'expand-projects-button-dark'} onClick={() => setExpandList(false)}>Hide More Projects &#x25B2;</button>
      </>}      
      <a className={props.lightMode ? 'more-projects-button' : 'more-projects-button-dark'} href="https://github.com/Danielle254" target="_blank">View GitHub</a>
    </section>
  )
}
