import React, { Component } from "react";
import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBBtn
} from "mdbreact";
import SectionContainer from "../commons/sectionContainer";
import CardList from "../commons/cardList";
import data_collspan from "../fixtures/table";
import "../../assets/css/main.css";

export class AllContacts extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container">
          <MDBRow>
            <MDBCol size="8" className="my-5">
              <MDBCard>
                <MDBCardBody>
                  <MDBTable bordered>
                    <MDBTableHead
                      columns={data_collspan.columns}
                      // color="primary-color"
                      textblack
                    />
                    <MDBTableBody rows={data_collspan.rows} />
                  </MDBTable>
                </MDBCardBody>
              </MDBCard>
              {/* </SectionContainer> */}
            </MDBCol>
            <MDBCol size="4" className="my-5">
              <CardList />
                <MDBBtn color="primary">Save</MDBBtn>
                <MDBBtn outline color="primary">
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
