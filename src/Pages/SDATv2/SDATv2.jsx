import React from 'react'
import { useOutletContext } from 'react-router-dom'
import './sdatv2.css'


const SDATv2 = () => {
  const [lightMode, showContent, animationsOn] = useOutletContext();

  if(showContent) {
    return (
      <main className={lightMode ? 'page' : 'page-dark'}>
        <div className='page--container'>
          <h1>Service Dogs Around Town - Version 2</h1>
          <div className='wrapper'>
            <iframe className={lightMode ? 'project-video' : 'project-video-dark'} src="https://www.loom.com/embed/f552d67328864f02969384f3a6eee2fc?hideEmbedTopBar=true"  webkitallowfullscreen={'true'} mozallowfullscreen={'true'} allowFullScreen title='screenshare demo of project website features' ></iframe>
          </div>
          <div>
            <h2>Technologies Used:</h2>
            <div className='page-tags--container'>
              <p className='page-tag'>React</p>
              <p className='page-tag'>JavaScript</p>
              <p className='page-tag'>Google Maps API</p>
              <p className='page-tag'>Firebase Database</p>
              <p className='page-tag'>Firebase Authentication</p>
              <p className='page-tag'>Tailwind CSS</p>
          </div>
          </div>
          <p>This is what I'd call my capstone project. It was broken down into multiple versions and deployments, and is now a multi-user, public application utilizing a database and multiple APIs.
          <br/><br/>
          The idea for this project came from a personal problem. As a service dog handler, I was having difficulty remembering which businesses (particularly restuarants) I'd visited where I'd had a good experience. I built this React application using the Google Maps interface to allow users like myself to easily search for and add information about a local business as it relates to the comfort and safety of my service dog.
          </p>
          <h2>Key Features</h2>
          <ul className='bullets'>
            <li>User Authentication with Firebase</li>
            <li>Search for a Business with Google Maps Autocomplete API</li>
            <li>User can add, edit and delete their own entries</li>
            <li>Note which businesses are your favorites</li>
            <li>Mobile Friendly</li>
            <li>See public data from other users</li>
          </ul>
          <h2>Skills Showcased</h2> 
          <ul className='bullets'>
            <li>Working with multiple APIs</li>            
            <li>Managing user data</li>
            <li>CRUD app - Create, Read, Update, Delete</li>
            <li>Multi-Page app with React Router</li>           
          </ul>          
          <h2>Future Enhancement Ideas</h2>
          <p>I have lots of ideas to make the user experience even better. I'd like to add the functionality where the list of places on the sidebar matches what is shown on the map and adjusts itself based on the map window changing, just like Google Maps does. Another big item on the To Do list is to allow multiple users to rate and review the same business location.
          <br/><br/>
          You can see the project task tracking board (GitHub Projects) here: <a target='_blank' className={lightMode ? 'link--light' : 'link--dark'} href='https://github.com/users/Danielle254/projects/1'>Project Board</a>
          </p>
          <a className={lightMode ? 'repo' : 'repo-dark'} id='top--button' href='https://github.com/Danielle254/ServiceDogsAroundTown_v2' target='_blank'>GitHub Repo</a>
          <a className={lightMode ? 'repo' : 'repo-dark'} href='https://servicedogsaroundtown.vercel.app/' target='_blank'>Live Site</a>
        </div>
      </main>
    )
  }
  
  
}

export default SDATv2
