import React from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Cards from "./Cards";
const CardContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Cards />
      </Row>
    </Container>
  );
};

export default CardContainer;
