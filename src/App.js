// import {  Divider } from "@material-ui/core";
import React from "react";
import { Typography, AppBar, Toolbar, Container, Tab, Tabs } from "@material-ui/core";
import HomeGallery from './HomeGallery';
// import Photography from '../assets/images/Photography.jpg'


const App = () => {
  return (
    <div>
        <AppBar>
          <Toolbar>
            <Typography variant="h4">Photo by Vinay</Typography>

            <Tabs textColor="inherit" float="right">
                <Tab label="About" />
                <Tab label="Services" />
                <Tab label="Gallery" />
                <Tab label="Contact" />
              </Tabs>

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