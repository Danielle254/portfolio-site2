import React from 'react'
import './footer.css'

export default function Footer(props) {
  return (
    <footer className={props.mode === "light" ? 'footer' : 'footer-dark'}>
      <p>Designed with Canva and built with React and Sass. <br/>© 2024 Danielle Lindblom</p>
    </footer>
  )
}
