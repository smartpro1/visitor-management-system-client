import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Sidebar from "../Layout/Sidebar";
import { fetchVisitorsLog } from "../../actions/adminActions";

class MyVisitorsLogs extends Component {
  componentDidMount = () => {
    const { fetchVisitorsLog } = this.props;
    fetchVisitorsLog();
  };

  render() {
    const { visitorsLogs } = this.props;

    if (visitorsLogs.length === 0) {
      return (
        <div className="row">
          <div className="col-md-2 bg-info sidebar">
            <Sidebar />
          </div>
          <div
            className="container alert alert-info text-center mt-5 col-md-4 info-cont alert-dismissible fade show"
            role="alert"
          >
            You have no logged visitor yet.
          </div>
        </div>
      );
    }
    const loadLogs = visitorsLogs.map((log) => (
      <tr key={log.id}>
        <td>{log.id}</td>
        <td>{log.whomToSee}</td>
        <td>{log.purpose}</td>
        <td>{log.tag}</td>
        <td>{log.timeIn}</td>
        <td>{log.timeOut || "visitor still active"}</td>
      </tr>
    ));

    return (
      <div className="row">
        <div className="col-md-2 bg-info sidebar">
          <Sidebar />
        </div>
        <div className="col-md-8 mx-auto mt-3">
          <h2 className="my-3 text-center">Visitors' Log</h2>
          <table className="table table-hover ">
            <thead className="thead-light">
              <tr>
                <th>id</th>
                <th>Whom To See</th>
                <th>Purpose</th>
                <th>Tag</th>
                <th>Date in</th>
                <th>Date out</th>
              </tr>
            </thead>
            <tbody>{loadLogs}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

MyVisitorsLogs.propTypes = {
  visitorsLogs: PropTypes.array.isRequired,
  fetchVisitorsLog: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  visitorsLogs: state.logs.visitorsLogs,
});
export default connect(mapStateToProps, { fetchVisitorsLog })(MyVisitorsLogs);
