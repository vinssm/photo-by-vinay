
import React from "react";
import { Typography,Container} from "@material-ui/core";
import './App.css'
import NavBar from "./components/NavBar";
import {routes} from "./routes";
import {useRoutes} from 'react-router';

function App() {
  const element = useRoutes(routes)
  return (
      <div>
          <NavBar />
          <Container style={{"marginTop":"20px","textAlign":"center"}}>
              <Typography variant="h2">Photography Portfolio with React</Typography>         
          </Container>
          {element}         
     </div>
  )
  
}

export default App;