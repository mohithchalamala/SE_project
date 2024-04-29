import React from 'react'
import './Navbar.css'
import img1 from '../assets/photo_2983067.png'
function Navbar() {
  return (
    <div>
      <div className='navbar-cont'>
      {/* <img src={img1}></img> */}
        <h2 className='heading'>PHOTOSTAT</h2>
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
