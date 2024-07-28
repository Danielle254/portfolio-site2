import React from 'react'
import { Link } from 'react-router-dom'
import './project.css'
import img1 from '../../Images/project1thumb.png'
import img2 from '../../Images/project2thumb.png'
import img3 from '../../Images/project3thumb.png'

export default function Project(props) {
  const tags = props.tags.map(
    tag => {
      return (        
        <p className='tag'>{tag}</p>      
      )
    }
  )

  let displayImage;
  let path = '';
  if (props.id === 1) {
    displayImage = img1;
    path = '/project1';
  } else if (props.id === 2) {
    displayImage = img2;
    path = '/project2';
  } else {
    displayImage = img3;
    path = '/project3';
  }
  
  return (
    <div className='project--card'>
      <img src={displayImage} className={props.lightMode ? 'img-light' : 'img-dark'} />
      <div id='details--container'>
        <h3>{props.title}</h3>
        <p>{props.summary}</p>
        <div className='tags--container-main'>
          {tags}
        </div>
        <Link key={path} to={path} style={{'text-decoration': 'none'}}>
        <p className={props.lightMode ? 'button-light' : 'button-dark'}>Demo & Details</p>
        </Link>
      </div>
    </div>
  )
}
