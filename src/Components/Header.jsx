import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Data from "./Data";
const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href="#home">
      <img src="https://react-bootstrap.github.io/logo.svg" width="30" height="30" className="d-inline-block align-top" alt="React Bootstrap logo"
      />
    </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
             {Data[5].map((e,i)=>{
              return  <Nav.Link href={e.link} key={i}>{e.name}</Nav.Link>
             })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
 
};

export default Header;
