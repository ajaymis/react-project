import React from "react";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Data from "./Data";
import Button from "@mui/material/Button";
const AchiveCol = () => {
  return (
    <Row className="py-3">
      {Data[4].map((e,i) => {
        return (
          <>
            <Col lg={3} key={i}>
              <img src={e.source} style={{ width: "100%" }} alt="" className="shadow-lg img-thumbnail h-75"/>
            </Col>
            <Col lg={3}>
              <h3>{e.title}</h3>
              <p>{e.desc}</p>
              <Button variant="outlined" color="primary" className="my-3 col-btn">
              Read more
            </Button>
            </Col>
          </>
        );
      })}
    </Row>
  );
};

export default AchiveCol;
