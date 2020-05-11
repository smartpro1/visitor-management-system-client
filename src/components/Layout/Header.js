import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutAdmin } from "../../actions/adminActions";

class Header extends Component {
  logout = () => {
    this.props.logoutAdmin();
  };

  render() {
    const { adminCredentials, isValidToken } = this.props.admin;
    let logText = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/register-admin">
            Register
          </Link>
        </li>
      </ul>
    );

    if (isValidToken && adminCredentials) {
      logText = (
        <ul className="navbar-nav ml-auto">
          <ul className="navbar-nav sidebar-header-ul">
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
            <li className="nav-item ">
              <NavLink
                className="sidebar-a"
                exact
                activeClassName="active"
                to="/signout-visitor"
              >
                Signout Visitor
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="sidebar-a"
                exact
                activeClassName="active"
                to="/registered-visitors"
              >
                My Visitors
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                className="sidebar-a"
                exact
                activeClassName="active"
                to="/visitors-log"
              >
                My Visitors Log
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="sidebar-a"
                exact
                activeClassName="active"
                to="/track-visitor"
              >
                Track Visitor
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="sidebar-a"
                exact
                activeClassName="active"
                to="/track-visitors"
              >
                Track Visitors
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="sidebar-a"
                exact
                activeClassName="active"
                to="/charts"
              >
                Chart
              </NavLink>
            </li>
          </ul>
          <Link className="nav-link" to="">
            <i className="fas fa-user-circle mr-1" />{" "}
            {adminCredentials.fullname}
          </Link>
          <li className="nav-item" onClick={this.logout}>
            <Link className="nav-link" to="">
              Logout
            </Link>
          </li>
        </ul>
      );
    }

    return (
      <nav className="navbar navbar-expand-lg bg-info navbar-dark">
        <a className="navbar-brand text-center" href="/" id="vms-logo">
          <i className="fas fa-coffee" /> MyProjectManager
        </a>

        {
          // <!-- Toggler/collapsibe Button -->
        }
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="collapsibleNavbar">
          {logText}
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  logoutAdmin: PropTypes.func.isRequired,
  admin: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  admin: state.login,
});

export default connect(mapStateToProps, { logoutAdmin })(Header);
