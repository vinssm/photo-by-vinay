import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
  return (
    <nav>
    <div className="nav-wrapper">
      <Link to="/" class="brand-logo left">Photo by Vinay</Link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Link to="/login">Login</Link></li>      
        <li><Link to="/signup">Signup</Link></li>   
        <li><Link to="/profile">Profile</Link></li> 
        <li><Link to="/comment">Comments</Link></li>   
      </ul>
    </div>
  </nav>
  )
}
