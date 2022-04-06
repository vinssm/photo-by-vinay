//import { AppBar, Divider } from "@material-ui/core";
import React from "react";
import { Typography, AppBar, Toolbar } from "@material-ui/core";

const App = () => {
  return (
    <div>
        <AppBar>
          <Toolbar>
            <Typography variant="h4">Photo by Vinay</Typography>
          </Toolbar>
        </AppBar>
    </div>
  )
}

export default App