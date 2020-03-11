import React, { Component } from "react";
import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBDropdownToggle,
  MDBIcon,
  MDBBtn,
} from "mdbreact";
import CardList from "../commons/cardList";
import data_collspan from "../fixtures/table";
import "../../assets/css/main.css";

export class AllContacts extends Component {
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
                <MDBBreadcrumbItem className="contact">
                  Contacts [1]
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem className="sort">
                  Sort By <span className="dateCreated">Date Created</span>{" "}
                  <MDBIcon icon="angle-down"></MDBIcon>
                </MDBBreadcrumbItem>
              </MDBBreadcrumb>
              <MDBBreadcrumb>
                <MDBBreadcrumbItem className="sort">
                  Switch to List <MDBIcon icon="angle-down"></MDBIcon>
                </MDBBreadcrumbItem>
              </MDBBreadcrumb>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
              <MDBIcon icon="sync"></MDBIcon>
                <span className="import-angle">
                  Bulk Action <MDBIcon icon="angle-down"></MDBIcon>
                </span>{"      "}
                |<span className="import-angle mb-5" id="color-import">Import</span>
                <MDBDropdownToggle
                  outline
                  color="grey lighten-1"
                  className="h-100 "
                >
                  Action <MDBIcon icon="angle-down" className="mr-1" />
                </MDBDropdownToggle>
                <MDBBtn className="" color="deep-orange">
                  Create New
                </MDBBtn>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBNavbar>
          <MDBRow>
            <MDBCol size="8" className="my-4">
              <MDBCard>
                <MDBCardBody>
                  <MDBTable bordered>
                    <MDBTableHead columns={data_collspan.columns} textblack />
                    <MDBTableBody rows={data_collspan.rows} />
                  </MDBTable>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol size="4" className="my-4">
              <CardList />
              <MDBBtn color="deep-orange">Save</MDBBtn>
              <MDBBtn outline color="deep-orange">
                Cancel
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </div>
      </>
    );
  }
}

export default AllContacts;
