import Col from "react-bootstrap/Col";
import Data from "./Data";
import Button from "@mui/material/Button";
const Cards = () => {
  return (
    <>
      {Data[2].map((val, ind) => {
        return (
          <Col sm={4} key={ind}>
            <img
              src={val.source}
              alt=""
              className="shadow-lg img-thumbnail"
              style={{ width:"100%",height:"150px" }}
            />
            <Button variant="outlined" color="primary" className="my-3 col-btn">
              {val.link}
            </Button>
            <p style={{fontSize:"17px"}}>{val.desc}</p>
          </Col>
        );
      })}
    </>
  );
};

export default Cards;
