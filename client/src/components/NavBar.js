import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
// import Signup from '../pages/Signup';
// import Login from './pages/Login';
// import Auth from '../utils/auth';

const Navs= () => {

  return (
    <>
      <Navbar bg='primary' variant='dark' expand='lg'>
        <Container fluid>
          <Navbar.Brand as={Link} to='/'>
           Photo by Vinay
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar'>
            <Nav className='ml-auto'>
              <Nav.Link as={Link} to='/'>Home</Nav.Link>
              <Nav.Link href="about">About</Nav.Link>
              <Nav.Link href="services">Services</Nav.Link>
              <Nav.Link href="profile">Profile</Nav.Link>
              <Nav.Link href="contact">Contact</Nav.Link>
              <Nav.Link href="login">Login</Nav.Link>
              <Nav.Link href="signup">Signup</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </>
  );
};

export default Navs;
