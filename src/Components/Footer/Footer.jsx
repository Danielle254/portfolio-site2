import React from 'react'
import './footer.css'

export default function Footer(props) {
  return (
    <footer className={props.lightMode ? 'footer' : 'footer-dark'}>
      <p>Designed with Canva and built with React and Sass. <a href="https://github.com/Danielle254/portfolio-site2">View Code</a><br/>© 2024 Danielle Lindblom</p>
    </footer>
  )
}
