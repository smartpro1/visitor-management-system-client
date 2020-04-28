import React, { Component } from "react";
import Sidebar from "./components/Layout/Sidebar";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-2 bg-info sidebar">
            <Sidebar />
          </div>
          <div className="col-md-10">Lorem ipsum</div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
