
import React from "react";
import { Typography,Container} from "@material-ui/core";
import './App.css'
import NavBar from "./components/NavBar";
import {routes} from "./routes";
import {useRoutes} from 'react-router';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
})


function App() {
  const element = useRoutes(routes)
  return (
    <ApolloProvider client={client}>
        <div>
            <NavBar />
            <Container style={{"marginTop":"20px","textAlign":"center"}}>
                <Typography variant="h2">Photography Portfolio with React</Typography>         
            </Container>
            {element}         
        </div>
     </ApolloProvider>
    )  
}

export default App;