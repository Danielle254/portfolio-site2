import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './project1.css'


const Project1 = () => {
  const [lightMode, showContent, animationsOn] = useOutletContext();

  if(showContent) {
    return (
      <main className={lightMode ? 'page' : 'page-dark'}>
        <div className='page--container'>
          <h1>Service Dogs Around Town - Version 1</h1>
          <div className='wrapper'>
            <iframe className={lightMode ? 'project-video' : 'project-video-dark'} src="https://www.loom.com/embed/146fece58802487cb4003b5b77854c2c?hideEmbedTopBar=true"  webkitallowfullscreen={'true'} mozallowfullscreen={'true'} allowFullScreen title='screenshare demo of project website features' ></iframe>
          </div>
          <div>
            <h2>Technologies Used:</h2>
            <div className='tags--container'>
              <p className='tag'>React</p>
              <p className='tag'>CSS</p>
              <p className='tag'>Forms</p>
          </div>
          </div>
          <p>This is what I'd call my capstone project. It is broken down into multiple versions and deployments, and will ultimately be a multi-user, public application utilizing a database. I want to work outside of my comfort zone and create something that makes me grow my skills.<br/><br/>
          <a href='https://docs.google.com/document/d/1qis5J6LwGeG49rQRjwhjirpdhUqHIUrBGo0ejoxNWIA/edit?usp=sharing'>View the full planning document</a>
          <br/><br/>
          The idea for this project came from me, as a service dog handler, not being able to remember which businesses (particularly restuarants) I've visited were a good experience. Version 1 of this application allows users to capture information about the business and add a personal note regarding the comfort and safety of their service dog when visiting.
          <br/><br/>
          Version 2 will incorporate the Google Maps API and Pocket Base database.
          </p>
          <h2>Key Features</h2>
          <ul className='bullets'>
            <li>Create a list of businesses you've visited</li>
            <li>Browser saves the list in local storage</li>
            <li>User can edit or delete entries</li>
            <li>Note which businesses were your favorites</li>
            <li>Sort entries by Date Visited or Business Name. Filter entries by Favorites.</li>
          </ul>
          <h2>Skills Showcased</h2> {/* left off editing copy here */}
          <ul className='bullets'>
            <li>React components</li>
            <li>Use of state, props, hooks, and event handlers</li>
            <li>Utilizing local storage</li>
            <li>Sort function that uses the Date object</li>
            <li>Passing information from parent to child and reverse</li>
            <li>Responsive website</li>
            <li>Flex and Grid</li>
          </ul>
          <h2>Lessons Learned</h2>
          <p>This project really required me to be organized with my file structure, which in turn kept me organized in the execution. <br/><br/>
          I liked learning about local storage and the print function. I can see these being useful in many other applications. <br/><br/>
          I appreciated that my understanding of how to pass functions and attributes to children components really came together through this project. <br/><br/>
          I stepped away from this project for a few months, and when I returned, I was able to read through and understand the code base and how it was functioning. I think this is largely due to having clean, readable code that is well-labeled.</p>
          <h2>Future Enhancement Ideas</h2>
          <p>I'm actually planning another project like this where I create the conference agenda with some sort of library to display it visually in a more calendar-like format. This will make it easier to tell which talks happen at the same time, and even visually distinguish the locations of the talks. <br/><br/>
          I'd also like to add a "share" button in addition to printing. <br/><br/>
          Another idea would be to add "add to calendar" options so users could put the talks directly onto their own personal calendar (google, etc).</p>
          <a className={lightMode ? 'repo' : 'repo-dark'} id='top--button' href='https://github.com/Danielle254/ServiceDogsAroundTown_v1'>GitHub Repo</a>
          <a className={lightMode ? 'repo' : 'repo-dark'} href='https://danielle254.github.io/ServiceDogsAroundTown_v1/'>Live Link</a>
          <Link to={'/project2'} className={lightMode ? 'next-project' : 'next-project-dark'} ><p>Next Project ➤</p></Link>
        </div>
      </main>
    )
  }
  
  
}

export default Project1
