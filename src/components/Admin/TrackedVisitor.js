import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Sidebar from "../Layout/Sidebar";
import { formatDate } from "./DateFormatter";

class TrackedVisitor extends Component {
  render() {
    const trackedVisitor = this.props.trackedVisitor;

    if (trackedVisitor === "No result found") {
      return (
        <div className="row">
          <div className="col-md-2 d-none d-sm-block d-xs-block sidebar">
            <Sidebar />
          </div>
          <div
            className="container alert alert-info text-center mt-5 col-md-4 info-cont "
            role="alert"
          >
            {trackedVisitor}
          </div>
        </div>
      );
    }

    // if trackedVisitor is an empty object
    if (
      !trackedVisitor ||
      (Object.keys(trackedVisitor).length === 0 &&
        trackedVisitor.constructor === Object)
    ) {
      return (
        <div className="row">
          <div className="col-md-2 bg-info sidebar">
            <Sidebar />
          </div>
          <div
            className="container alert alert-info col-md-4 info-cont "
            role="alert"
          >
            You have no tracked visitor yet.
          </div>
        </div>
      );
    }

    const visitorLogs = trackedVisitor.visitorLogs;

    const loadVisitorDetails = visitorLogs.map((visitorLog) => (
      <tr key={visitorLog.id}>
        <td>{visitorLog.id}</td>
        <td>{visitorLog.whomToSee}</td>
        <td>{visitorLog.assetLog.assets || "NIL"} </td>
        <td>{visitorLog.tag}</td>

        <td>{formatDate(visitorLog.timeIn)}</td>
        <td>{formatDate(visitorLog.timeOut || "active")}</td>
      </tr>
    ));

    return (
      <div className="row">
        <div className="col-md-2 bg-info sidebar">
          <Sidebar />
        </div>
        <div className="col-md-8 table-responsive mx-auto mt-3">
          <h1 className="header-h1 my-3 text-center">Tracked Visitor</h1>
          <p>
            id: <strong>{trackedVisitor.id}</strong> &nbsp; name:{" "}
            <strong>{trackedVisitor.fullname}</strong> &nbsp; phone:{" "}
            <strong>{trackedVisitor.phone}</strong>
          </p>
          <table className="table table-hover ">
            <thead className="thead-light">
              <tr>
                <th>Log id</th>
                <th>Whom To See</th>
                <th>Asset</th>
                <th>Tag</th>
                <th>Date Time In</th>
                <th>Date Time Out</th>
              </tr>
            </thead>
            <tbody>{loadVisitorDetails}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

TrackedVisitor.propTypes = {
  trackedVisitor: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  trackedVisitor: state.trackedVisitors.trackedVisitor,
});

export default connect(mapStateToProps)(TrackedVisitor);
