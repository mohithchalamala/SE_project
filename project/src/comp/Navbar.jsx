import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div>
      <div className='navbar-cont'>
      {/* <img src={img1}></img> */}
        <h2 className='heading'>PIXELS</h2>
        <div className='group-heading'>
          <p>Home</p>
          <p>Contests</p>
          <p>Info</p>
          <p>About</p>
        </div>
        <p className='login-btn'>Login</p>
      </div>
    </div>
  )
}

export default Navbar
