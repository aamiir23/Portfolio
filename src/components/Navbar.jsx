import React from 'react'
import "./style.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        AAMIR
      </div>
      <div className="sub-domain">
        <ul>
          <li><a href='#home'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#journey'>Journey</a></li>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#achievements'>Achievements</a></li>
        </ul>
      </div>
      <a href='#contact' className="contact"> Contact me</a>
    </div>
  )
}

export default Navbar