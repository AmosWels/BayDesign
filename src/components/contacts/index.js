import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import AllContacts from "./allContacts";

export class Contacts extends Component {
  state = {};
  render() {
    return (
      <div>
        <MDBContainer fluid>Welcome to Contacts</MDBContainer>
        <AllContacts />
      </div>
    );
  }
}

export default Contacts;
