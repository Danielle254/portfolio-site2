import React from 'react'
import profile from '../Images/profile rose background.jpeg';
import Menu from './Menu'

export default function Navbar(props) {
  
  return (
    <div>
      <img src={profile} style={{width: '50px'}}/>
      <p>Danielle Lindblom</p>
      <button onClick={props.toggleMenu}>MENU</button>
      {props.menuVisible && <Menu />}
    </div>
  )
}
