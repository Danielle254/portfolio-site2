import React from 'react'
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
  if (props.id === 1) {
    displayImage = img1;
  } else if (props.id === 2) {
    displayImage = img2;
  } else {
    displayImage = img3;
  }
  
  return (
    <div className='project--card'>
      <img src={displayImage}  />
      <div id='details--container'>
        <h3>{props.title}</h3>
        <p>{props.summary}</p>
        <div className='tags--container'>
          {tags}
        </div>
        <a href={props.detailsPath}>Demo & Details</a>
      </div>
    </div>
  )
}
