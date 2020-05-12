import React, { Component } from "react";
import avatar from "../../assets/images/img2.png";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
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
          <p className="text-center admin-text">
            <strong>{adminText}</strong>
          </p>
        </div>
        <ul className="dashbord-list-item ul-nav">
          <li className="nav-item ul-nav-link">
            <NavLink
              className="sidebar-a"
              exact
              activeClassName="active"
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item ul-nav-link">
            <NavLink
              className="sidebar-a"
              exact
              activeClassName="active"
              to="/register-visitor"
            >
              Register Visitor
            </NavLink>
          </li>
          <li className="nav-item ul-nav-link">
            <NavLink
              className="sidebar-a"
              exact
              activeClassName="active"
              to="/signout-visitor"
            >
              Signout Visitor
            </NavLink>
          </li>
          <li className="nav-item ul-nav-link">
            <NavLink
              className="sidebar-a"
              exact
              activeClassName="active"
              to="/registered-visitors"
            >
              My Visitors
            </NavLink>
          </li>
          <li className="nav-item ul-nav-link">
            <NavLink
              className="sidebar-a"
              exact
              activeClassName="active"
              to="/visitors-log"
            >
              My Visitors Log
            </NavLink>
          </li>
          <li className="nav-item ul-nav-link">
            <NavLink
              className="sidebar-a"
              exact
              activeClassName="active"
              to="/track-visitor"
            >
              Track Visitor
            </NavLink>
          </li>
          <li className="nav-item ul-nav-link">
            <NavLink
              className="sidebar-a"
              exact
              activeClassName="active"
              to="/track-visitors"
            >
              Track Visitors
            </NavLink>
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
