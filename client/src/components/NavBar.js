import React from 'react'
import {Link,useNavigate} from 'react-router-dom'

export default function NavBar() {
  const token = localStorage.getItem("token")
  const navigate = useNavigate()
  return (
    <nav>
    <div className="nav-wrapper">
      <Link to="/" className="brand-logo left">Photo by Vinay</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        {
          token ?
          <>
              <li><Link to="/profile">Profile</Link></li> 
              <li><Link to="/CreateComment">CreateComment</Link></li>
              <li><button className='red btn' onClick={()=>{
                localStorage.removeItem("token")
                navigate('/Login')}}>Logout</button></li>   
           </>:
          <>
              <li><Link to="/home">Home</Link></li>  
              <li><Link to="/about">About</Link></li>  
              <li><Link to="/services">Services</Link></li> 
              <li><Link to="/contact">Contact</Link></li> 
              <li><Link to="/login">Login</Link></li>      
              <li><Link to="/signup">Signup</Link></li> 
          </> 
        }
        
           
      </ul>
    </div>
  </nav>
  )
}
