import React, { Component } from "react";
import avatar from "../../assets/images/img2.png";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Sidebar extends Component {
  render() {
    const { adminCredentials, isValidToken } = this.props.admin;
    let adminText = "admin";
    if (isValidToken && adminCredentials) {
      adminText = this.props.admin.adminCredentials.fullname;
    }
    return (
      <div>
        <div className="my-4">
          <img
            src={avatar}
            alt="admin image"
            className="mx-auto d-block rounded-circle img-fluid admin-image"
          />
          <p className="text-center text-white">
            <strong>{adminText}</strong>
          </p>
        </div>
        <ul className="dashbord-list-item">
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/register-visitor">Register Visitor</a>
          </li>
          <li>
            <a href="/signout-visitor">Signout Visitor</a>
          </li>
          <li>
            <a href="/registered-visitors">My Visitors</a>
          </li>
          <li>
            <a href="/visitors-log">My Visitors Log</a>
          </li>
          <li>
            <a href="/registered-visitor">My Visitor</a>
          </li>
          <li>
            <a href="/visitor-log">My Visitor Log</a>
          </li>
          <li>
            <a href="/charts">Chart</a>
          </li>
        </ul>
      </div>
    );
  }
}

Sidebar.propTypes = {
  admin: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  admin: state.login,
});

export default connect(mapStateToProps)(Sidebar);
