import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
        <div className="navContainer">
            <span className="logo">ImranBooking</span>

            <div className="navItems">
            <button className='navButtons'>Register</button>
            <button className='navButtons'>Login</button>
        </div>
        </div>


        
    </div>
  )
}

export default Navbar