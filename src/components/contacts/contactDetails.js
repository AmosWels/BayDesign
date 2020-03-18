import React from "react";
import PropTypes from "prop-types";
import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBNavbar,
  MDBNavbarNav,
  MDBIcon,
  MDBBtn,
  MDBBadge
} from "mdbreact";
import ROUTES from "../../utils"
import "../../assets/css/main.css";
import CardDetailList from "../commons/cardDetailList";
import DetailTabs from "../commons/contactDetailTabs";

export const ContactDetails = (props)=> {
    const {data} = props.location && props.location.state;
    return (
      <>
        <div className="container">
          <MDBNavbar
            size="12"
            className="my-2 mx-0"
            color="secondary"
            style={{ marginTop: "15px" }}
            dark
          >
            <MDBNavbarNav left>
              <MDBBreadcrumb>
                <MDBBreadcrumbItem>
                  <a href={ROUTES.contacts}><MDBIcon
                    icon="long-arrow-alt-left"
                    className="detailIcon"
                  ></MDBIcon></a>{" "}
                  |<span className="contact-detail">Contacts Details</span>
                </MDBBreadcrumbItem>
              </MDBBreadcrumb>
            </MDBNavbarNav>
          </MDBNavbar>
          <MDBRow className="my-2">
            <MDBCol size="3">
              <MDBCard>
                <MDBRow className="text-center mx-2 my-3">
                  <MDBIcon icon="pen" className="carddetailIcon"></MDBIcon>
                  <MDBIcon icon="trash" className="carddetailIcon"></MDBIcon>
                  <MDBIcon
                    icon="ellipsis-v"
                    className="carddetailIcon"
                  ></MDBIcon>
                </MDBRow>
                <CardDetailList contactData={data} />
                <MDBCardText></MDBCardText>
              </MDBCard>
                <MDBRow className="text-center mx-2 my-3">
                  <MDBIcon
                    icon="envelope"
                    className="carddetailIconBottom icon-detail-color"
                  ></MDBIcon>
                  <MDBIcon
                    icon="dollar-sign"
                    className="carddetailIconBottom icon-detail-color"
                  ></MDBIcon>
                  <MDBIcon
                    icon="calendar-check"
                    className="carddetailIconBottom icon-detail-color"
                  ></MDBIcon>
                  <MDBIcon
                    icon="comment-alt"
                    className="carddetailIconBottom icon-detail-color"
                  ></MDBIcon>
                  <MDBIcon
                    icon="calendar-day"
                    className="carddetailIconBottom icon-detail-color"
                  ></MDBIcon>
                  <MDBIcon
                    icon="paper-plane"
                    className="carddetailIconBottom icon-detail-color"
                  ></MDBIcon>
                </MDBRow>
              <MDBCard>
                <MDBCardBody>
                <span className="contactinfo ml-3">Owner</span>
                  <h6>
                    <MDBIcon
                      icon="circle"
                      style={{ color: "purple" }}
                      className="carddetailIconBottom"
                    ></MDBIcon>
                    {data.first_name} {data.last_name}
                  </h6>
                  <MDBCardText>
                    <p className="text-center display-flex" >
                      <MDBBtn outline className="button-toggle">
                        Show Gadgets
                      </MDBBtn>
                    </p>
                    <h6 style={{ fontWeight: "bold" }}>Contant Information </h6>
                    <span className="contactinfo">Email Address</span>
                    <br />
                    <span style={{ color: "black" }}>
                      {data.email} <MDBIcon icon="envelope"></MDBIcon>
                    </span>
                    <br /><br/>
                    <span className="contactinfo">Phone Number</span>
                    <br />
                    <a href="#!">{data.phone_number}</a><br/>
                    <MDBBadge className="mr-2 mt-2 pa-4" pill color="light">
                      <a href="!">
                        <MDBIcon style={{color:"purple"}} icon="phone-square-alt"> Call</MDBIcon>
                      </a>
                    </MDBBadge><br/>
                    <br />
                    <span className="contactinfo">Address</span>
                    <br />
                    <span style={{ color: "black" }}>
                      {data.address}
                    </span>
                    <hr/>
                    <span style={{ color: "black" }}>
                      Other Information <br/>
                      {data.contact_type.name}
                    </span>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol size="9">
              <MDBCard>
                <MDBCardBody>
                  <DetailTabs />
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </div>
      </>
    );
}
ContactDetails.propTypes = {
  data: PropTypes.object,
};

ContactDetails.defaultProps ={
  data:[]
}

export default ContactDetails;
