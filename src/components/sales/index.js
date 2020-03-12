import React, { Component } from "react";
import SectionContainer from "../commons/sectionContainer";
export class Sales extends Component {
  state = {};
  render() {
    return (
        <SectionContainer header="Sales Will be up soon">
        <div className="my-5 d-flex justify-content-around">
          <div className="spinner-grow text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-secondary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-success" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-danger" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-warning" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-info" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </SectionContainer>
    );
  }
}

export default Sales;
