import React from 'react'
import './navbar.css'
import {RiMenu3Line, RiCloseLin} from 'react-icons/ri';

const Navbar = () => {
  return (
    <div className="gpt5__navbar">
      <div className="gpt5__navbar-links"> 
        <div className="gpt5__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
      Navbar
    </div>
  )
}

export default Navbar