import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Services from './pages/Services.js';
import Profile from './pages/Profile.js';
import Contact from './pages/Contact.js';
// import SearchComments from './pages/SearchComments';
// import SavedComments from './pages/SavedComments';
import Signup from './pages/Signup';
import Login from './pages/Login';
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
        <NavBar />
        <Routes> 
          <Route exact path="/" element={<Home />} />
          <Route exact path='/Home' element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Services" element={<Services />} />
          <Route exact path="/Profile" element={<Profile />} />
          <Route exact path="/Contact" element={<Contact />} />
          {/* <Route exact path='/' component={SearchComments} />
          <Route exact path='/SavedComments' component={SavedComments} /> */}
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Signup" element={<Signup />} />
          <Route render={() => <h1 className='display-4'>Something went Wrong!</h1>} />
        </Routes>
      </>
    </Router>
    </ApolloProvider>
  );
}

export default App;
