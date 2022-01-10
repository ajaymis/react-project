import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Column1 from "./AboutCol1";
import Column2 from "./AboutCol2";
const About = () => {
  return (
    <>
      <Container fluid className="py-5" style={{background:"#f4f4f4"}} id="about">
      <h1 className="fs-1 fw-bolder text-center clinic">OUR CLINIC</h1>
      <hr className="hori"/>
        <Row className="d-flex justify-content-around align-items-center py-5">
          <Column1 />
          <Column2 />
        </Row>
      </Container>
    </>
  );
};

export default About;
