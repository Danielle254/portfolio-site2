import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './project1.css'


const Project1 = () => {
  const [lightMode, showContent] = useOutletContext();

  if(showContent) {
    return (
      <main className={lightMode ? 'page' : 'page-dark'}>
        <div className='page--container'>
          <h1>Create Your Own Personal Itinerary from a Conference Agenda</h1>
          <div className='wrapper'>
            <iframe className={lightMode ? 'project-video' : 'project-video-dark'} src="https://www.loom.com/embed/8f2fb0c5d93d41faac32e633ed463a56?hideEmbedTopBar=true"  webkitallowfullscreen={'true'} mozallowfullscreen={'true'} allowFullScreen></iframe>
          </div>
          <div>
            <h2>Technologies Used:</h2>
            <div className='tags--container'>
              <p className='tag'>React</p>
              <p className='tag'>CSS</p>
          </div>
          </div>
          <p>This is a project of my own idea and design. The site displays the agenda for a conference in chronological order (data stored in separate file), then allows the user to add activities from the agenda to their own personal itinerary.<br/><br/>
          This is something I wish I had when attending conferences in the past! I'd be circling my preferred talks on a paper printout. This is especially helpful when there are multiple talks occurring at the same time. When adding talks to their itinerary, they sort automatically in chornological order.
          <br/><br/>
          Finally, there is the option to print your itinerary, which is formatted for ease of use.</p>
          <h2>Key Features</h2>
          <ul className='bullets'>
            <li>Talks display in chronological order automatically, regardless of order added to itinerary</li>
            <li>User's itinerary stays put, even if they navigate away or refresh the screen. This makes it easy to come back and make changes as needed without having the build their itinerary from scatch each time.</li>
            <li>Option to clear the itinerary and start over</li>
            <li>Ability to print a nicely formatted version of your personal itinerary</li>
          </ul>
          <h2>Skills Showcased</h2>
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
          <a className={lightMode ? 'repo' : 'repo-dark'} id='top--button' href='https://github.com/Danielle254/Conference-Agenda'>GitHub Repo</a>
          <a className={lightMode ? 'repo' : 'repo-dark'} href='https://danielle254.github.io/Conference-Agenda/'>Live Link</a>
          <Link to={'/project2'} className={lightMode ? 'next-project' : 'next-project-dark'} ><p>Next Project ➤</p></Link>
        </div>
      </main>
    )
  }
  
  
}

export default Project1
