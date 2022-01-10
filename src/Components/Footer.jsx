import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Contact from './Contact'
import Library from './Library';

const Comp = () => {
    return (
        <Container fluid className="bg-dark text-white">
         <Row className="d-flex justify-content-center">
           <Contact/>
           <Library/>
           <p className="text-center">Copyright © Ajay Mishra 2021-22.</p>
         </Row>
        </Container>
    )
}

export default Comp
