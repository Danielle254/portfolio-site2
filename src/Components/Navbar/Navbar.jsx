import React from 'react'
import profile from '../../Images/profile rose background.jpeg';
import Menu from '../Menu/Menu'
import './navbar.css'

export default function Navbar(props) {
  
  return (
    <div id='navbar--background'>
      <div id='navbar--content'>
        <img src={profile} />
        <p>Danielle Lindblom</p>
        <button onClick={props.toggleMenu}>MENU</button>
        {props.menuVisible && <Menu />}
      </div>
    </div>
  )
}
