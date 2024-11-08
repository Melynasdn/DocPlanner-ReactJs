import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='Navbar'>
      <a href="">
            <img className="logo-docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="Docplanner Group" height="33px" width="268px"/>
        </a>
        <nav>
          <ul className='MainMenu'>
              <li><a href='/' className='MainMenuItems'> About Us </a></li>
              <li><a href='https://www.docplanner.com/career' className='MainMenuItems'> Career </a></li>
              <li><a className='MainMenuItems'> Departments </a></li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar