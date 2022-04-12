import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
  return (
    <nav>
    <div className="nav-wrapper">
      <Link to="/" class="brand-logo left">Photo by Vinay</Link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Link to="/home">Home</Link></li>  
        <li><Link to="/about">About</Link></li>  
        <li><Link to="/services">Services</Link></li>  
        <li><Link to="/profile">Profile</Link></li> 
        <li><Link to="/comment">Comments</Link></li>
        <li><Link to="/contact">Contact</Link></li>   
        <li><Link to="/login">Login</Link></li>      
        <li><Link to="/signup">Signup</Link></li>     
      </ul>
    </div>
  </nav>
  )
}
