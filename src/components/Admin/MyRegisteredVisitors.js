import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Sidebar from "../Layout/Sidebar";
import { fetchVisitors } from "../../actions/adminActions";

class MyRegisteredVisitors extends Component {
  componentDidMount = () => {
    const { fetchVisitors } = this.props;
    fetchVisitors();
  };

  render() {
    const { visitors } = this.props;

    if (visitors.length === 0) {
      return (
        <div className="row">
          <div className="col-md-2 bg-info sidebar">
            <Sidebar />
          </div>
          <div
            className="container alert alert-info text-center mt-5 col-md-4 info-cont "
            role="alert"
          >
            You have no registered visitor yet.
          </div>
        </div>
      );
    }
    const loadVisitors = visitors.map((visitor) => (
      <tr key={visitor.id}>
        <td>{visitor.id}</td>
        <td>{visitor.fullname}</td>
        <td>{visitor.address}</td>
        <td>{visitor.sex}</td>
        <td>{visitor.created_At}</td>
      </tr>
    ));

    return (
      <div className="row">
        <div className="col-md-2 d-none d-sm-block d-xs-block sidebar">
          <Sidebar />
        </div>
        <div className="col-md-8 table-responsive mx-auto mt-3">
          <h2 className="my-3 text-center">Registered Visitors</h2>
          <table className="table table-hover ">
            <thead className="thead-light">
              <tr>
                <th>id</th>
                <th>fullname</th>
                <th>address</th>
                <th>sex</th>
                <th>Date Created</th>
              </tr>
            </thead>
            <tbody>{loadVisitors}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

MyRegisteredVisitors.propTypes = {
  visitors: PropTypes.array.isRequired,
  fetchVisitors: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  visitors: state.visitors.visitors,
});

export default connect(mapStateToProps, { fetchVisitors })(
  MyRegisteredVisitors
);
