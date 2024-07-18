import React from 'react'
import profile from '../../Images/profile rose background.jpeg';
import './navbar.css'

export default function Navbar(props) {
  
  return (
    <div className='navbar--background'>
      <div className='navbar--content'>
        <img src={profile} />
        <p>Danielle Lindblom</p>
        {props.menuVisible === false && <button onClick={props.toggleMenu}>MENU</button>}        
      </div>
    </div>
  )
}
