import React from "react";
import Col from "react-bootstrap/Col";
import Data from "./Data.jsx";
import Button from "@mui/material/Button";
const Column2 = () => {
  return (
    <>
      {Data[3].map((e,i) => {
        return (
          <Col lg={4} key={i}>
            <img src={e.source} alt="recuriter" className="img-thumbnail shadow-lg" style={{width:"100%"}}/>
            <Button variant="outlined" color="primary" className="my-3 col-btn">
              {e.link}
            </Button>
            <p style={{fontSize:"18px"}}>{e.desc}</p>
          </Col>
        );
      })}
    </>
  );
};

export default Column2;
