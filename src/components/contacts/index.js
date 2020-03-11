import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import AllContacts from "./allContacts";

export class Contacts extends Component {
  state = {};
  render() {
    return (
      <div>
      <MDBContainer></MDBContainer>
        <MDBContainer fluid>
          <AllContacts />
        </MDBContainer>
      </div>
    );
  }
}

export default Contacts;
