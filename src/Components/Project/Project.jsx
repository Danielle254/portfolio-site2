import React from 'react'
import { Link } from 'react-router-dom'
import './project.css'
import img1 from '../../Images/project1thumb.png'
import img2 from '../../Images/project2thumb.png'
import img3 from '../../Images/project3thumb.png'
import img4 from "../../Images/project4thumb.png"
import { v4 as uuid  } from "uuid"

export default function Project(props) {
  const tags = props.tags.map(
    tag => {
      return (        
        <p className='tag'  key={uuid()}>{tag}</p>      
      )
    }
  )

  let displayImage;
  let path = '';
  let cardClass = 'project--card';
  switch (props.id) {
    case 1:
      displayImage = img1;
      path = '/project1';
      cardClass += props.lightMode ? ' feature' : ' feature-dark';
      break;
    case 2:
      displayImage = img2;
      path = '/project2';
      break;
    case 3:
      displayImage = img3;
      path = '/project3';
      break;
    case 4:
      displayImage = img4;
      path = '/project4';
      break;
  }

  
  
  return (
    <div className={cardClass}>
      <Link to={path} >
      <img src={displayImage} className={props.lightMode ? 'img-light' : 'img-dark'} alt='screenshot of project website'/>
      </Link>
      <div id='details--container'>
        <h3>{props.title}</h3>
        <p>{props.summary}</p>
        <div className='tags--container-main'>
          {tags}
        </div>
        <Link key={path} to={path} style={{textDecoration: 'none'}}>
        <p className={props.lightMode ? 'button-light' : 'button-dark'}>Demo & Details</p>
        </Link>
      </div>
    </div>
  )
}
