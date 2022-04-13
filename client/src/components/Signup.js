import { useMutation } from "@apollo/client";
import React, {useState} from "react";
import { SIGNUP_USER } from "../utils/mutations";

export default function Signup() {
  const [formState, setFormState] = useState({});
  const [signupUser,{data,loading,error}]= useMutation(SIGNUP_USER)

  if(loading) return <h1>Loading</h1>


  const handleChange = (event)=>{    
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    })
    console.log(formState)
  }

  const handleSubmit = (event)=>{
    event.preventDefault()
    console.log(formState)
    signupUser({
        variables:{
            userNew:formState
        }
    })
  }
 
  
  return (
    <div className='container login-container'>
      <h4 className="center padTop">Signup Form</h4>
      {
        error && 
        <div className="red card-panel"> {error.message} </div>
      }

      {
         data && data.user && 
         <div className="green card-panel"> {data.user.firstName} Signup is Successfull</div>
      }

      <form onSubmit={(event)=>handleSubmit(event)}>
              <input
                // className="form-input"
                type="text"   
                placeholder="First Name"
                name="firstName"                             
                id="firstName"
                // value={email}
                onChange={(event)=>handleChange(event)}
                required
              />
                <input
                // className="form-input"
                type="text"   
                placeholder="Last Name"
                name="lastName"                             
                id="lastName"
                // value={email}
                onChange={(event)=>handleChange(event)}
                required
              />
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
                placeholder="Your password"
                name="password"                              
                id="password"
                // value={password}
                onChange={(event)=>handleChange(event)}
                required
              />
              <button className="btn d-block w-100" type="submit">
                Submit
              </button>
            </form>

    </div>
  )
}

