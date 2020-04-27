import React, { Component } from "react";

class MyRegisteredVisitors extends Component {
  render() {
    return (
      <div className="container table-responsive my-5">
        <h2>Registered Visitors</h2>
        <table className="table table-hover ">
          <thead className="thead-light">
            <tr>
              <th>Fullname</th>
              <th>Signed By</th>
              <th>Whom To See</th>
              <th>Purpose</th>
              <th>Tag</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>Patricia</td>
              <td>Mr. Etienne</td>
              <td>official</td>
              <td>TAG102</td>
              <td>23/04/20</td>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>Patricia</td>
              <td>Mr. Etienne</td>
              <td>official</td>
              <td>TAG132</td>
              <td>23/04/20</td>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>Patricia</td>
              <td>Mr. Etienne</td>
              <td>official</td>
              <td>TAG453</td>
              <td>23/04/20</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default MyRegisteredVisitors;
