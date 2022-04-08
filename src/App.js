// import {  Divider } from "@material-ui/core";
import React from "react";
import { Typography, AppBar, Toolbar, Container } from "@material-ui/core";
import HomeGallery from './HomeGallery';
// import Photography from '../assets/images/Photography.jpg'


const App = () => {
  return (
    <div>
        <AppBar>
          <Toolbar>
            <Typography variant="h4">Photo by Vinay</Typography>
          </Toolbar>
        </AppBar>

        <Container style={{"marginTop":"70px", "textAlign":"center"}}>
            <Typography variant="h2">Photography Portfolio with React</Typography>         
        </Container>

        <Container maxWidth="lg">
          <HomeGallery />            
        </Container>
    </div>
  )
}

export default App