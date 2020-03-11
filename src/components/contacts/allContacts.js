import React, { Component } from "react";
import {
  MDBCol,
  MDBRow,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBEdgeHeader,
  MDBJumbotron,
  MDBIcon,
  MDBAnimation
} from "mdbreact";
import SectionContainer from "../commons/sectionContainer";
import MenuLink from "../commons/menuLink";
import data_collspan from "../fixtures/table";
import "../../assets/css/main.css";

export class AllContacts extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container">
          <MDBRow>
            <MDBCol size="8">
              <MDBCard>
                <MDBCardBody>
                  <MDBTable bordered>
                    <MDBTableHead
                      columns={data_collspan.columns}
                      // color="primary-color"
                      textBlack
                    />
                    <MDBTableBody rows={data_collspan.rows} />
                  </MDBTable>
                </MDBCardBody>
              </MDBCard>
              {/* </SectionContainer> */}
            </MDBCol>
            <MDBCol size="4">
              {/* <MDBEdgeHeader color="indigo darken-3" className="sectionPage" /> */}
              {/* <MDBAnimation type="zoomIn" duration="500ms"> */}
              {/* <MDBRow> */}
              {/* <MDBCol className="mt-3 mx-auto"> */}
              {/* <MDBJumbotron> */}
              <MDBCard>
                <MDBCardBody>
                  <ul className="list-unstyled example-components-list">
                    <MenuLink to="#" title="Forms" />
                    <MenuLink to="#" title="Input" />
                    <MenuLink to="#" title="Input" />
                    <MenuLink to="#" title="Input" />
                  </ul>
                </MDBCardBody>
              </MDBCard>
              {/* </MDBJumbotron> */}
              {/* </MDBCol> */}
              {/* </MDBRow> */}
              {/* </MDBAnimation> */}
              {/* </SectionContainer> */}
            </MDBCol>
          </MDBRow>
        </div>
      </>
    );
  }
}

export default AllContacts;
