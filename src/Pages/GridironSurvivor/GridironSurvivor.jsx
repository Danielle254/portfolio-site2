import React from 'react'
import { useOutletContext } from 'react-router-dom'
import './gridironsurvivor.css'


const GridironSurvivor = () => {
  const [lightMode, showContent, animationsOn] = useOutletContext();

  if(showContent) {
    return (
      <main className={lightMode ? 'page' : 'page-dark'}>
        <div className='page--container'>
          <h1>Gridiron Survivor</h1>
          <div className='wrapper'>
            <iframe className={lightMode ? 'project-video' : 'project-video-dark'} src="https://www.loom.com/embed/e32f21774c3a4a4d8a9a402abb4b5a81?hideEmbedTopBar=true"  webkitallowfullscreen={'true'} mozallowfullscreen={'true'} allowFullScreen title='screenshare demo of project website features' ></iframe>
          </div>
          <div>
            <h2>Technologies Used:</h2>
            <div className='tags--container'>
            <p className='tag'>Next.js</p>
              <p className='tag'>React</p>
              <p className='tag'>TypeScript</p>
              <p className='tag'>Jest</p>
              <p className='tag'>React Testing Library</p>
              <p className='tag'>shadcn/ui</p>
          </div>
          </div>
          <p>Gridiron Survivor is a unique software development apprenticeship program run by Shashi Lo, a Senior Developer at Microsoft. I have been a member since October 2024, contributing to the existing Next.js code base. 
          <br/><br/>
          Participants like myself are assigned tickets from our <a href='https://github.com/orgs/LetsGetTechnical/projects/2/views/5'>Sprint Board</a>, create features or address website issues, create and run unit tests, submit our code for review through pull requests, and contribute to sprint demos. I came into the project after it was already a complex code base, and it has been a great exercise in how to smoothly get up to speed and begin contributing quickly. Working on a team with other developers, including conducting peer code reviews and providing and receiving support through our communication channels, has been a great experience and mimics a job situation.
          <br/><br/>
          My contributions to date have involved making updates that provide a better user experience. You can see my merged pull requests by clicking the 'GitHub PRs' button below.
          </p>
          <h2>Key Contributions</h2>
          <ul className='bullets'>
            <li>Removing redundancies causing errors in forms code</li>
            <li>Allow the user to exit alerts before they time out</li>
            <li>Remove items from the user's screen that are no longer relevant</li>
            <li>Fix an issue with page redirection during login process</li>
            <li>Add information to picks screen for a better user experience</li>
          </ul>
          <h2>Skills Showcased</h2> 
          <ul className='bullets'>
            <li>Quickly getting up to speed on an unfamiliar code base</li>            
            <li>Quickly learning new technologies (Next.js, TypeScript)</li>
            <li>Performing peer code reviews</li>
            <li>Creating point estimations for my assigned tickets (scrum)</li>
            <li>Writing thorough unit tests for improved code quality</li>            
          </ul>          
          <h2>Next Steps</h2>
          <p>After concluding our first round of user testing, we are now incorporating the feedback received into several large changes. I will be involved in configuring the administrator experience, which is critical to the overall functioning of this SaaS product. We hope to launch a paid version of this site in 2025.
          </p>
          <a className={lightMode ? 'repo' : 'repo-dark'} id='top--button' href='https://github.com/LetsGetTechnical/gridiron-survivor/pulls?q=is%3Apr+author%3A%40me+is%3Aclosed' target='_blank'>GitHub PRs</a>
          <a className={lightMode ? 'repo' : 'repo-dark'} href='https://www.gridironsurvivor.com/' target='_blank'>Live Site</a>
        </div>
      </main>
    )
  }
  
  
}

export default GridironSurvivor
