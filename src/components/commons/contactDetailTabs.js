import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { MDBCardTitle, MDBCardText } from "mdbreact";
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
    const panelStyle = { width: "100%" };
    return (
      <Tabs style={{height:"655px"}}>
        <TabList className="nav-tabs">
          <Tab>Activities</Tab>
          <Tab>Emails</Tab>
          <Tab>Deals</Tab>
          <Tab>Notes</Tab>
          <Tab>Docs</Tab>
          <Tab>Workflows</Tab>
          <Tab>Calls</Tab>
          <Tab>SMS</Tab>
        </TabList>
        <TabPanel style={{height:"500px"}}>
          <div className="card-body" style={panelStyle}>
            <MDBCardTitle>Activities</MDBCardTitle>
            <MDBCardText>
              This a placeholder, Activities tab still under construction
            </MDBCardText>
            <div className="flex-row">
              <a href="">History</a>
              <a href="" style={{ marginLeft: "1.25rem" }}>
                Today
              </a>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="card-body" style={panelStyle}>
            <MDBCardTitle>Emails</MDBCardTitle>
            <MDBCardText>
              This a placeholder, Emails tab still under construction
            </MDBCardText>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="card-body" style={panelStyle}>
            <MDBCardTitle>Deals</MDBCardTitle>
            <MDBCardText>
              This a placeholder, Deals tab still under construction
            </MDBCardText>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="card-body" style={panelStyle}>
            <MDBCardTitle>Notes</MDBCardTitle>
            <MDBCardText>
              This a placeholder, Notes tab still under construction
            </MDBCardText>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="card-body" style={panelStyle}>
            <MDBCardTitle>Docs</MDBCardTitle>
            <MDBCardText>
              This a placeholder, DOcs tab still under construction
            </MDBCardText>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="card-body" style={panelStyle}>
            <MDBCardTitle>Workflows</MDBCardTitle>
            <MDBCardText>
              This a placeholder, Workflows tab still under construction
            </MDBCardText>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="card-body" style={panelStyle}>
            <MDBCardTitle>Calls</MDBCardTitle>
            <MDBCardText>
              This a placeholder, Calls tab still under construction
            </MDBCardText>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="card-body" style={panelStyle}>
            <MDBCardTitle>SMS</MDBCardTitle>
            <MDBCardText>
              This a placeholder, SMS tab still under construction
            </MDBCardText>
          </div>
        </TabPanel>
      </Tabs>
    );
  }
}

export default DetailTabs;
