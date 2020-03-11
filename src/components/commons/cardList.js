import React from "react";
import {
  MDBListGroup,
  MDBListGroupItem,
} from "mdbreact";

const CardList = ({ title }) => {
  return (
    <>
    <MDBListGroup style={{ width: "30rem" }}>
      <MDBListGroupItem color="secondary">
        All Contacts
      </MDBListGroupItem>
      <MDBListGroupItem color="light">
        <p>All saved filters</p>
        <p>Meet all the following conditions</p>
        <p>Owner is james@connel@gmail.com</p>
      </MDBListGroupItem>
    </MDBListGroup>
    </>
  );
};

export default CardList;
