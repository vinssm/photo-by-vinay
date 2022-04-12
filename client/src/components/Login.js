import React, {useState} from "react";

export default function Login() {

  const [formState, setFormState] = useState({});
  // const [email,setEmail] = useState("")
  // const [password,setPassword] = useState("") 
  const handleChange = (event)=>{
    // const { name, value } = event.target;
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    })
    console.log(formState)
  }

  const handleSubmit = (event)=>{
    event.preventDefault()
    console.log(formState)
  }
 
  
  return (
    <div className='container login-container' maxWidth="lg">
      <h4 className="center padTop">User login</h4>

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
                placeholder="Your email"
                name="password"                              
                id="email"
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

