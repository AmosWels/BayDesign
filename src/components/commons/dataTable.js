import React, { Component } from "react";
import { MDBTable, MDBTableBody, MDBTableHead, MDBIcon } from 'mdbreact';
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import ROUTES from "../../utils/index";
import all_contacts from "../fixtures/contacts";

class ContactsTable extends Component {
    state = {
        redirect: false,
        data: {},
      };
      handleClick = (data) => {
        this.setState({
          redirect: true,
          data: data
        })
      }
    render () {
        const{data}=this.state;
        console.log('>>', data);
        if (this.state.redirect) {
            return <Redirect to={{
              pathname: ROUTES.contactDetails,
              state: { data }
            }} />
        } else {
    return (
    <MDBTable hover scrollY
    maxHeight="280px" size="12">
      <MDBTableHead>
        <tr>
          <th><input type="checkbox" /></th>
          <th>Basic Info</th>
          <th>Subscription Date</th>
          <th>Location</th>
          <th>Status</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      { all_contacts.contacts.map((contact)=>(
        <tr key={contact.id}  onClick={() => this.handleClick(contact)} value={contact} >
          <td><input type="checkbox" /></td>
          <td><MDBIcon icon="circle"></MDBIcon> {contact.first_name} {contact.last_name}</td>
          <td>{contact.created_at}</td>
          <td>{contact.address}</td>
          <td>Confirmed</td>
        </tr>
      ) 
 )}
      </MDBTableBody>
    </MDBTable>
  );
} }
}
ContactsTable.propTypes = {
    handleclick: PropTypes.func,
  };

export default ContactsTable;