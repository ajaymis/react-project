import React from "react";
// import Data from "./Data";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const data = [
  {
    name: "Dr. Priyank Das",
    desc: "Assistant Professor at Graphic Era Deemed to be University. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknow type and scras",
    sourc:
      "https://festive-curie-33cd8a.netlify.app/static/media/2.f0f5a705.jpg",
  },
];
const Team = () => {
  return (
    <>
      <Container fluid className="py-5 bg-dark p-0 text-white team" id="team">
        <Row className="d-flex justify-content-around">
          <Col sm={6}>
            <h1 className="fs-1 fw-bolder">{data[0].name}</h1>
            <p style={{wordSpacing:"5px",lineHeight:"30px",fontSize:"17px" }}>{data[0].desc}</p>
          </Col>
          <Col sm={4}>
            <img src={data[0].sourc} width="100%" className="shadow-lg card-img" height="250px" alt="priyank" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Team;
