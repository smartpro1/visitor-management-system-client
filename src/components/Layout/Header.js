import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutAdmin } from "../../actions/adminActions";

class Header extends Component {
  logout = () => {
    this.props.logoutAdmin();
  };

  render() {
    const { adminCredentials, isValidToken } = this.props.admin;
    let logText = "";

    if (isValidToken && adminCredentials) {
      logText = (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item" onClick={this.logout}>
            <Link className="nav-link" to="">
              Logout
            </Link>
          </li>
        </ul>
      );
    }

    return (
      <nav className="navbar navbar-expand-md bg-primary navbar-dark">
        <a className="navbar-brand text-center" href="#">
          Visitor Management System
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