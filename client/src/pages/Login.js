import { useMutation } from "@apollo/client";
import { Typography, Container} from "@material-ui/core";
import {Button} from 'react-bootstrap';
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
    navigate('/login')
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
    <Container className="login-container center fancy">
      <Typography className="center padTop fancy">User login</Typography>

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
              <Button className="btn  btn-default" type="submit">
                Login
              </Button>
            </form>

    </Container>
  )
}

