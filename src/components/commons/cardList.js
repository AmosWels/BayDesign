import React from "react";
import {
  MDBListGroup,
  MDBListGroupItem,
  MDBIcon
} from "mdbreact";
import "../../assets/css/main.css";

const CardList = ({ title }) => {
  return (
    <>
    <MDBListGroup style={{ width: "20rem" }}>
      <MDBListGroupItem className="list-head">
        All Contacts
      </MDBListGroupItem>
      <MDBListGroupItem>
        <p>All saved filters <MDBIcon icon="wifi"></MDBIcon></p>
        <p>Meet all the following conditions</p>
        <p>Owner is SEKAMANYE Gilbert Francis <br/>james@connel@gmail.com </p>
        <p><MDBIcon icon="plus"></MDBIcon> Add filter</p>
      </MDBListGroupItem>
    </MDBListGroup>
    </>
  );
};

export default CardList;
