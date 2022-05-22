import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className='navbar'>
        <div className="navContainer">
          <Link to="/">
          <span className="logo">ImranBooking</span>
          </Link>
            

            <div className="navItems">
            <button className='navButtons'>Register</button>
            <button className='navButtons'>Login</button>
        </div>
        </div>


        
    </div>
  )
}

export default Navbar