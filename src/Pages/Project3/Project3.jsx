import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './project3.css'

const Project3 = () => {

  const [lightMode] = useOutletContext();

  return (
    <div className={lightMode ? 'page' : 'page-dark'}>
      <div className='page--container'>
        <h1>Local Business Homepage Refresh</h1>
        <div className='wrapper'>
          <iframe className={lightMode ? 'project-video' : 'project-video-dark'} src="https://www.loom.com/embed/41d9ec8e943c43bd945eeddbea745b5a?hideEmbedTopBar=true"  webkitallowfullscreen={'true'} mozallowfullscreen={'true'} allowFullScreen></iframe>
        </div>
        <div>
          <h2>Technologies Used:</h2>
          <div className='tags--container'>
            <p className='tag'>HTML</p>
            <p className='tag'>CSS</p>
        </div>
        </div>
        <p>I took the website of a local business that I frequent, Alpine Vet Care in Missoula, and gave their website homepage a refresh. This project showcases my ability to use CSS with no libraries or frameworks to create a responsive webpage for desktop and mobile.<br/><br/>
        Their existing website was crowded, outdated, and had several accessibility issues.
        <br/><br/>
        I wanted to create a more user-friendly, easy to navigate homepage for the veterinarian's customers.</p>
        <div className='difference--container' >
          <div className='before-after-container'>
            <h2>Before</h2>
            <ul className='bullets'>
              <li>Inconsistent font size and color</li>
              <li>Does not use semantic HTML</li>
              <li>Outdated layout</li>
              <li>Mobile is a mix of center-aligned and right-aligned</li>
              <li>Banner image slideshow</li>
              <li>Contact info is not linked</li>
              <li>Different logo on desktop vs mobile</li>
              <li>Very crowded nav menu - many pages, some of which have very little content</li>
            </ul>
          </div>
          <div className='before-after-container'>
            <h2>After</h2>
            <ul className='bullets'>
              <li>Updated color palette based on logo colors</li>
              <li>Consistent font</li>
              <li>Semantic HTML for better web accessibility</li>
              <li>New sectioned layout</li>
              <li>Clickable links for phone, email, and address making it easier to users to interact with the website information they need</li>
              <li>Replaced generic article on homepage with services section, more relevant</li>
              <li>Reorganized the nav menu</li>
            </ul>
          </div>
        </div>
        <h2>Skills Showcased</h2>
        <ul className='bullets'>
          <li>Semantic HTML</li>
          <li>Pure CSS - FlexBox, Grid, Media Queries</li>
          <li>Web Design and User Experience</li>
          <li>Web Accessibility (NOTE: the checkbox hack, described below, is NOT fully web accessible)</li>
          <li>Responsive Design</li>          
        </ul>
        <h2>Lessons Learned</h2>
        <p>I used the "checkbox hack" for the mobile menu. I could have used JavaScript, but this was a fun feature to learn. The checkbox hack utilizes the "checked" vs "not checked" property of a checkbox instead of "onClick" in JavaScript. I also created the down/up arrows for the mobile submenu manually.<br/><br/>
        I created a 2-layer menu. It was interesting to learn different methods of creating a submenu for both dektop and mobile views. This is a very common feature in older or complex business websites.</p>
        <h2>Future Enhancement Ideas</h2>
        <p>Creating a Site Menu in the footer. The footer is already quite full. I might make it it's own section and add a site menu to the actual footer on the desktop version.<br/><br/>
        I'd also like to add a "share" button in addition to printing. <br/><br/>
        It would be fun to do an entire website overhaul and build the other pages.<br/><br/>
        Add JavaScript for more simplified functionality of the navbar, and add a "return to top" icon for mobile.
        </p>
        <a className={lightMode ? 'repo' : 'repo-dark'} id='top--button' href='https://github.com/Danielle254/Alpine-Vet'>GitHub Repo</a>
        <a className={lightMode ? 'repo' : 'repo-dark'} href='https://danielle254.github.io/Alpine-Vet/'>Live Link</a>
        <Link to={'/project1'} className={lightMode ? 'next-project' : 'next-project-dark'} ><p>Next Project ➤</p></Link>
      </div>
    </div>
  )
}

export default Project3
