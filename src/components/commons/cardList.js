import React from "react";
import {
  MDBListGroup,
  MDBListGroupItem,
  MDBIcon
} from "mdbreact";

const CardList = ({ title }) => {
  return (
    <>
    <MDBListGroup style={{ width: "22rem" }}>
      <MDBListGroupItem color="secondary">
        All Contacts
      </MDBListGroupItem>
      <MDBListGroupItem color="light">
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
