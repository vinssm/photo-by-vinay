import { useMutation } from "@apollo/client";
import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'
import { LOGIN_USER } from "../utils/mutations";

export default function Login() {
  const navigate = useNavigate()

  const [formState, setFormState] = useState({});
  const [signinUser,{data,loading,error}] = useMutation(LOGIN_USER)

  if(loading) return <h1>Loading</h1>
  if(data){
    localStorage.setItem("token",data.user.token)
    navigate('/')
  }

  const handleChange = (event)=>{
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event)=>{
    event.preventDefault()
    signinUser({
      variables:{
          userSignin:formState
      }
    })
  }
 
  
  return (
    <div className='container login-container'>
      <h4 className="center padTop">User login</h4>

      {
        error && 
        <div className="red card-panel"> {error.message} </div>
      }

      <form onSubmit={(event)=>handleSubmit(event)}>
              <input
                // className="form-input"
                type="email"   
                placeholder="Your email"
                name="email"                             
                id="email"
                // value={email}
                onChange={(event)=>handleChange(event)}
                required
              />
              <input
                // className="form-input"
                type="password"  
                placeholder="password"
                name="password"                              
                id="password"
                // value={password}
                onChange={(event)=>handleChange(event)}
                required
              />
              <button className="btn d-block w-100" type="submit">
                Login
              </button>
            </form>

    </div>
  )
}

