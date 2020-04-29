import React, { Component } from "react";
import Sidebar from "../Layout/Sidebar";

class MyRegisteredVisitors extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-2 bg-info sidebar">
          <Sidebar />
        </div>
        <div className="col-md-8 table-responsive mx-auto mt-3">
          <h2 className="my-3 text-center">Registered Visitors</h2>
          <table className="table table-hover ">
            <thead className="thead-light">
              <tr>
                <th>Fullname</th>
                <th>Whom To See</th>
                <th>Purpose</th>
                <th>Tag</th>
                <th>Date in</th>
                <th>Date out</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>Mr. Etienne</td>
                <td>official</td>
                <td>TAG102</td>
                <td>23/04/20</td>
                <td>23/04/20</td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>Mr. Etienne</td>
                <td>official</td>
                <td>TAG132</td>
                <td>23/04/20</td>
                <td>23/04/20</td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>Mr. Etienne</td>
                <td>official</td>
                <td>TAG453</td>
                <td>23/04/20</td>
                <td>23/04/20</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default MyRegisteredVisitors;
