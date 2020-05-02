import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Sidebar from "../Layout/Sidebar";

class TrackedVisitors extends Component {
  render() {
    const { trackedVisitors } = this.props;

    if (trackedVisitors === "No result found") {
      return (
        <div className="row">
          <div className="col-md-2 bg-info sidebar">
            <Sidebar />
          </div>
          <div
            className="container alert alert-info text-center mt-5 col-md-4 info-cont "
            role="alert"
          >
            {trackedVisitors}
          </div>
        </div>
      );
    }

    if (trackedVisitors.length === 0) {
      return (
        <div className="row">
          <div className="col-md-2 bg-info sidebar">
            <Sidebar />
          </div>
          <div
            className="container alert alert-info text-center mt-5 col-md-4 info-cont "
            role="alert"
          >
            You have no tracked visitor yet.
          </div>
        </div>
      );
    }

    const loadVisitorsDetails = trackedVisitors.map((visitor) => (
      <tr key={visitor.id}>
        <td>{visitor.id}</td>
        <td>{visitor.whomToSee}</td>
        <td>{visitor.tag}</td>
        <td>{visitor.signedBy}</td>
        <td>{visitor.timeIn}</td>
        <td>{visitor.timeOut || "active"}</td>
      </tr>
    ));

    return (
      <div className="row">
        <div className="col-md-2 bg-info sidebar">
          <Sidebar />
        </div>
        <div className="col-md-8 table-responsive mx-auto mt-3">
          <h2 className="my-3 text-center">Tracked Visitors</h2>

          <table className="table table-hover ">
            <thead className="thead-light">
              <tr>
                <th>Visitor id</th>
                <th>Whom To See</th>
                <th>Tag</th>
                <th>Signed By</th>
                <th>Date-Time In</th>
                <th>Date-Time Out</th>
              </tr>
            </thead>
            <tbody>{loadVisitorsDetails}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

TrackedVisitors.propTypes = {
  trackedVisitors: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  trackedVisitors: state.trackedVisitors.trackedVisitors,
});

export default connect(mapStateToProps)(TrackedVisitors);
