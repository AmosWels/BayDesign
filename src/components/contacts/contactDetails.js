import React, { Component } from "react";
import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
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
import SectionContainer from "../commons/sectionContainer";
import DetailTabs from "../commons/contactDetailTabs";

export class ContactDetails extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container">
          <MDBNavbar
            size="12"
            className="my-4 mx-0"
            color="secondary"
            style={{ marginTop: "20px" }}
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
          <MDBRow>
            <MDBCol size="4" className="my-4">
              <MDBCard>
                <MDBCardTitle>
                  <MDBIcon icon="pen" className="carddetailIcon"></MDBIcon>
                  <MDBIcon icon="trash" className="carddetailIcon"></MDBIcon>
                  <MDBIcon
                    icon="ellipsis-v"
                    className="carddetailIcon"
                  ></MDBIcon>
                </MDBCardTitle>
                <CardDetailList />
                <MDBCardText></MDBCardText>
                <SectionContainer className="text-center" header="">
                  <MDBIcon
                    icon="envelope"
                    className="carddetailIconBottom"
                  ></MDBIcon>
                  <MDBIcon
                    icon="dollar-sign"
                    className="carddetailIconBottom"
                  ></MDBIcon>
                  <MDBIcon
                    icon="calendar-check"
                    className="carddetailIconBottom"
                  ></MDBIcon>
                  <MDBIcon
                    icon="comment-alt"
                    className="carddetailIconBottom"
                  ></MDBIcon>
                  <MDBIcon
                    icon="calendar-day"
                    className="carddetailIconBottom"
                  ></MDBIcon>
                  <MDBIcon
                    icon="paper-plane"
                    className="carddetailIconBottom"
                  ></MDBIcon>
                </SectionContainer>
              </MDBCard>
              <MDBCard className="my-1">
                <MDBCardBody>
                  <h5>
                    <MDBIcon
                      icon="address-book"
                      style={{ color: "red" }}
                      className="carddetailIconBottom"
                    ></MDBIcon>
                    SEKAMANYA Gilbert Francis
                  </h5>
                  <MDBCardText>
                    <p class="text-center">
                      <MDBBtn outline color="warning">
                        Show Gadgets
                      </MDBBtn>
                    </p>
                    <h6 style={{ fontWeight: "bold" }}>Contant Information </h6>
                    <span className="contactinfo">Email Address</span>
                    <br />
                    <span style={{ color: "black" }}>
                      ronald.adonyo@gmail.com
                    </span>
                    <br />
                    <span className="contactinfo">Phone Number</span>
                    <br />
                    <a href="#!">256752596196</a>
                    <br />
                    <MDBBadge className="mr-2 mt-2" pill color="light">
                      <span>
                        <MDBIcon icon="phone-square-alt">Call</MDBIcon>
                      </span>
                    </MDBBadge>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol size="8" className="my-4 mx-8">
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
}

export default ContactDetails;
