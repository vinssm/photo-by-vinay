// import {  Divider } from "@material-ui/core";
import React, {useState} from "react";
import { Typography, AppBar, Toolbar, Container, Tab, Tabs, Button } from "@material-ui/core";
import HomeGallery from './HomeGallery';
// import Photography from '../assets/images/Photography.jpg'


const App = () => {
  const [value, setValue] = useState();
  return (
    <div>
        <AppBar>
          <Toolbar>
            <Typography variant="h4">Photo by Vinay</Typography>

            <Tabs style={{"marginLeft": "auto"}} value={value} onChange={(e, value) => setValue(value)}  textColor="inherit">
                <Tab label="About" />
                <Tab label="Services" />
                <Tab label="Gallery" />
                <Tab label="Contact" />
              </Tabs>

              <Button  variant="contained">Login</Button>
              <Button style={{"marginLeft": "10px"}} variant="contained">Signup</Button>

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