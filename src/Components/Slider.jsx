import React from "react";
import Data from "../Components/Data";
import Carousel from "react-bootstrap/Carousel";
const Slider = () => {
  return (
    <>
      <Carousel>
        {Data[0].map((e,i) => {
          return (
            <Carousel.Item key={i}>
              <img
                src={e.source}
                className="d-block w-100 carousel-img"
                alt={e.alt}/>
              <Carousel.Caption className="mt-5">
                <h1 className="fw-bolder">{e.desc}</h1>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
};

export default Slider;
