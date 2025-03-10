import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const TopNav = () => {
  return (
    <>
      <Navbar style={{height:"80px"}} bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">My Resume</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="display">display</Nav.Link>
            <Nav.Link as={Link} to="card">Cards</Nav.Link>
           
           
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default TopNav