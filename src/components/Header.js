import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';


function Header() {
  return (
    <Navbar expand="lg" className="bg-dark " variant='dark'>
   
      <Navbar.Brand href="/" className='mx-3' >LOGO</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact Us</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      
  </Navbar>
  )
}

export default Header