import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import AchiveCol from "./AchiveCol";
const Achievement = () => {
  return (
    <>
      <Container id="services">
        <Row className="d-flex justify-content-center">
          <Col md={6}>
            <h1
              style={{
                fontSize: "41px",
                fontWeight: "700",
                textAlign: "center",
              }}>
              Achivements and Work Experience
            </h1>
            <hr className="hori" />
          </Col>
        </Row>
        <AchiveCol/>

      </Container>
    </>
  );
};

export default Achievement;
