import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Services from './pages/Services.js';
import Profile from './pages/Profile.js';
import Contact from './pages/Contact.js';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
  uri: '/graphql',
});

function App() {

  return (
    <ApolloProvider client={client}>
    <Router>
      <>
        <Navbar />
        <Switch> 
          <Route exact path="/" component={Home} />
          <Route exact path='/Home' component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Services" component={Services} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/Contact" component={Contact} />
          <Route render={() => <h1 className='display-4'>Something went Wrong!</h1>} />
        </Switch>
      </>
    </Router>
    </ApolloProvider>
  );
}

export default App;
