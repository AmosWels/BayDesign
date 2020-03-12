import React, { Component } from "react";
import { MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import SectionContainer from "../commons/sectionContainer";
import TimelinePage from "../commons/timeline";
import "../../assets/css/main.css";

export class DetailTabs extends Component {
  state = {
    activeItem: "1"
  };

  toggle = tab => e => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab
      });
    }
  };

  render() {
    return (
      <MDBContainer>
        {/* <MDBContainer> */}
          {/* <MDBRow>
            <MDBCol md="12"> */}
              <SectionContainer header="">
                <MDBNav className="nav-tabs">
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.activeItem === "1"}
                      onClick={this.toggle("1")}
                      role="tab"
                    >
                      Activities
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.activeItem === "2"}
                      onClick={this.toggle("2")}
                      role="tab"
                    >
                      Emails
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.activeItem === "3"}
                      onClick={this.toggle("3")}
                      role="tab"
                    >
                      Deals
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.activeItem === "3"}
                      onClick={this.toggle("3")}
                      role="tab"
                    >
                      Tasks
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.activeItem === "3"}
                      onClick={this.toggle("3")}
                      role="tab"
                    >
                      Notes
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.activeItem === "3"}
                      onClick={this.toggle("3")}
                      role="tab"
                    >
                      Docs
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.activeItem === "3"}
                      onClick={this.toggle("3")}
                      role="tab"
                    >
                      Automation
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>
                <MDBTabContent activeItem={this.state.activeItem}>
                  <MDBTabPane tabId="1" role="tabpanel">
                    <p className="mt-2">
                      <TimelinePage />
                    </p>
                  </MDBTabPane>
                  <MDBTabPane tabId="2" role="tabpanel">
                  <p className="mt-2">
                    </p>
                  </MDBTabPane>
                  <MDBTabPane tabId="3" role="tabpanel">
                    <p className="mt-2">
                    </p>
                  </MDBTabPane>
                </MDBTabContent>
              </SectionContainer>
            {/* </MDBCol>
          </MDBRow>
        </MDBContainer> */}
      </MDBContainer>
    );
  }
}

export default DetailTabs;
