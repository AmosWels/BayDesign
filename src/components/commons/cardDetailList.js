import React from "react";
import {
  MDBListGroup,
  MDBListGroupItem,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCardTitle
} from "mdbreact";
import "../../assets/css/main.css";

const CardDetailList = ({ title }) => {
  return (
    <>
      <MDBRow>
        <MDBCol size="2">
          <MDBCardTitle className="mx-4">
            <MDBIcon icon="male"></MDBIcon>
          </MDBCardTitle>
        </MDBCol>
        <MDBCol size="10">
          <div color="light">
            <p>
              Ronald Adonyo
              <br />
              Ronald.adonyo@gmail.com
              <br />
            </p>
            <p>Customer</p>
              <a href="#!">Orio Systems</a>
            <p>
              <MDBIcon
                className="carddetailIcon"
                icon="globe-americas"
              ></MDBIcon>
              <br />
              <div class="rating">
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
              </div>Score: 5
            </p>
          </div>
        </MDBCol>
      </MDBRow>
    </>
  );
};

export default CardDetailList;
