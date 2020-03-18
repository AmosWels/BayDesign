import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import ROUTES from '../../utils/index';

export class Navbar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  const bgPurple = {backgroundColor: '#6B488C'}
  return (
    <Router>
      <MDBNavbar style={bgPurple} dark expand="md">
        <MDBNavbarBrand>
          <a href={ROUTES.home}><strong className="white-text">BayDesign</strong></a>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
          <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Contacts</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default mt-2">
                  <MDBDropdownItem href="#!"></MDBDropdownItem>
                  <MDBDropdownItem href={ROUTES.contacts}>All contacts</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Closed Business</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to={ROUTES.sales}>Forms</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to={ROUTES.deals}>Landing Pages</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to={ROUTES.tasks}>Templates</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Campaigns</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default mt-2">
                  <MDBDropdownItem href=""></MDBDropdownItem>
                  <MDBDropdownItem href="">Email Broadcasts</MDBDropdownItem>
                  <MDBDropdownItem href="">Sms Broadcasts</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="twitter" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="google-plus-g" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}

export default Navbar;