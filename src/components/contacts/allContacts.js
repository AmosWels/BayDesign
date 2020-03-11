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
  MDBTableHead
} from "mdbreact";
import SectionContainer from "../commons/sectionContainer";
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
                              textWhite
                            />
                            <MDBTableBody rows={data_collspan.rows} />
                          </MDBTable>
                        </MDBCardBody>
                      </MDBCard>
              {/* </SectionContainer> */}
            </MDBCol>
            <MDBCol size="4">
                <MDBCard style={{ width: "20rem" }}>
                  <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card&apos;s content.
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              {/* </SectionContainer> */}
            </MDBCol>
          </MDBRow>
        </div>
      </>
    );
  }
}

export default AllContacts;
