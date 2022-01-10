import React from "react";
import Col from "react-bootstrap/Col";
import Data from "./Data";
import CardContainer from "./CardContainer";
const Column1 = () => {
  return (
    <Col lg={7}>
     
      {Data[1].map((e,i) => {
        return (
        <p style={{fontSize:"19px"}} key={i}>{e.desc}</p>
        );
      })}
      <div className="w3-code htmlHigh">
      <address>
      Dehradun, Uttarakhand 248001, opposite Sakti Medicos, Subhash Nagar, Tilak Marg. 
      <br />
      GPS coordinates are: longitude — 77°59'28.99''E (77.991387), latitude — 30°16'38.15''N (30.277264).
      </address>
      </div>
     
      <CardContainer/>
    </Col>
  );
};

export default Column1;
