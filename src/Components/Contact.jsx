import React from "react";
import Col from "react-bootstrap/Col";
import Dog from "./images/dog.png";
const data = [
  {
    Name: "DR. Vyas Clinic",
    Address:
      "Veer sawarkar marg opposite Sakti Medicos Subhash Nagar Dehradun Uttarakhand 248001 India",
    Tel: "+91-7014296174, +91-9634403372, +91-9634403312",
    Email: " drvyas@gmail.com",
  },
];
const Contact = () => {
  return (
    <>
      <Col lg={3}>
        <img src={Dog} width="80%" alt="" />
      </Col>
      <Col lg={5}>
        <h1 className="fw-bolder">Contact Detail</h1>
        <p>{data[0].Name}</p>
        <p style={{ fontSize: "18px", lineHeight: "40px" }}>
          <i className="fas fa-home mx-2"></i>
          {data[0].Address}
        </p>

        <p style={{ fontSize: "18px", lineHeight: "40px" }}>
          <i className="fas fa-phone mx-2"></i>
          {data[0].Tel}
        </p>
        <p style={{ fontSize: "18px", lineHeight: "40px" }}>
          <i className="fas fa-envelope mx-2"></i>
          {data[0].Email}
        </p>
      </Col>
    </>
  );
};

export default Contact;
