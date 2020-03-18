import React from "react";
import {
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCardTitle
} from "mdbreact";
import "../../assets/css/main.css";

const CardDetailList = ({ contactData }) => {
  return (
    <>
      <MDBRow>
        <MDBCol size="2">
          <MDBCardTitle className="mx-4">
            <MDBIcon icon="circle"></MDBIcon>
          </MDBCardTitle>
        </MDBCol>
        <MDBCol size="10">
          <div color="light">
            <p>
              {contactData.first_name} {contactData.last_name}
              <br />
              {contactData.email}
              <br />
              {contactData.contact_type.name}
            </p>
            <p>
              <div class="rating" className="display-flex justify-space-around">
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                {"             "}
                <span>Score: 5</span>
              </div>
            </p>
          </div>
        </MDBCol>
      </MDBRow>
    </>
  );
};

export default CardDetailList;
