import React from 'react'
import profile from '../Images/profile rose background.jpeg';
import Menu from './Menu'

export default function Navbar() {
  return (
    <div>
      <img src={profile} style={{width: '50px'}}/>
      <p>Danielle Lindblom</p>
      <button>MENU</button>
      <Menu />
    </div>
  )
}
