import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './project2.css'

const Project2 = () => {

  const [lightMode] = useOutletContext();

  return (
    <main className={lightMode ? 'page' : 'page-dark'}>
      <div className='page--container'>
        <h1>Calculate How Long Your Dog Food Will Last</h1>
        <div className='wrapper'>
          <iframe className={lightMode ? 'project-video' : 'project-video-dark'} src="https://www.loom.com/embed/786d7f5fbc4f4079957bc76274bf2185?hideEmbedTopBar=true"  webkitallowfullscreen={'true'} mozallowfullscreen={'true'} allowFullScreen></iframe>
        </div>
        <div>
          <h2>Technologies Used:</h2>
          <div className='tags--container'>
            <p className='tag'>JavaScript</p>
            <p className='tag'>Bootstrap</p>
        </div>
        </div>
        <p>This app calculates how long a given bag of dog food will last, factoring in a multiple dog household, and provides the user with pricing information and a link to purchase the food online. There is also the ability to compare 2 different foods!<br/><br/>
        The "days per bag" metric, which tells the user how long the bag of food will last, is helpful not only to know how often to reorder, like setting up a subscription order, but also to know if the bag you have will last the duration of your trip when setting out to travel.
        </p>
        <h2>Key Features</h2>
        <ul className='bullets'>
          <li>Simple, easy to use input form</li>
          <li>Results message displays after form submits</li>
          <li>Ability to reset the form at any time</li>
          <li>Ability to compare 2 different foods and their prices</li>
          <li>Easy ordering via "Buy Now" button</li>
          <li>Accounts for more than 1 dog in your household</li>
        </ul>
        <h2>Skills Showcased</h2>
        <ul className='bullets'>
          <li>HTML forms and form validation</li>
          <li>Bootstrap for styling</li>
          <li>Vanilla JavaScript with event listeners, reading and writing HTML elements</li>
          <li>Data stored in JSON file and pulled with API call</li>
          <li>Multiple complex JavaScript functions</li>
          <li>Organizing JS functions with modules</li>          
        </ul>
        <h2>Lessons Learned</h2>
        <p>I enjoyed writing multiple functions to perform these calculations and refactoring them into modules for better readability and organization. <br/><br/>
        I also got good experience with how to break down a problem when encountering errors in the code with such complex calculations.<br/><br/>
        I'm glad I went for the personal challenge of learning how to use async functions properly to retrieve JSON data via API instead of simply hosting the dataset in my main JS file. <br/><br/>
        Having a completely original project was really fun, and I got good practice using Git branching and PRs to manage the build of my many features.</p>
        <h2>Future Enhancement Ideas</h2>
        <p>It would be an interesting challenge to utilize the Amazon API or similar to allow the user to search for their specific brand and bag size of dog food.<br/><br/>
        They physics tutor in me wants to do real world calculations (ounces per cup) for the various brands in my existing library and update that metric in the library per brand.<br/><br/>
        Finally, I could add in recommended feeding guidelines for the specific brands in my existing (manual) library</p>
        <a className={lightMode ? 'repo' : 'repo-dark'} id='top--button' href='https://github.com/Danielle254/Dog-Food-Calculator'>GitHub Repo</a>
        <a className={lightMode ? 'repo' : 'repo-dark'} href='https://danielle254.github.io/Dog-Food-Calculator/'>Live Link</a>
        <Link to={'/project3'} className={lightMode ? 'next-project' : 'next-project-dark'} ><p>Next Project ➤</p></Link>
      </div>
    </main>
  )
}

export default Project2
