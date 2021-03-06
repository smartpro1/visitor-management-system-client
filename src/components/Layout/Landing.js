import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Landing extends Component {
  render() {
    const { adminCredentials, isValidToken } = this.props.admin;

    let signUp = (
      <div>
        <h1 className="header-landing">
          Hi, I'm your efficient visitor management system
        </h1>
        <p className="lead-landing">
          <mark>Register</mark> or <mark>Login</mark> to effectively manage your
          organization's visitors from
          <mark>start</mark> to <mark>finish</mark>
        </p>
        <hr />

        <Link
          to="/register-admin"
          className="btn btn-outline-info btn-lg  mr-2 btn-landing"
        >
          Register
        </Link>

        <Link
          to="/login"
          className="btn btn-lg btn-outline-success mr-2 btn-landing"
        >
          Login
        </Link>
      </div>
    );
    if (isValidToken && adminCredentials) {
      signUp = (
        <div className="mt-5">
          <h3 className="display-3 mt-4 header-landing">
            Hi, <em>{adminCredentials.fullname}</em>, hope your day has been
            good so far!{" "}
            <Link to="/dashboard" className="btn  btn-primary">
              {"<<"} Back to dashboard
            </Link>
          </h3>
        </div>
      );
    }
    return (
      <div className="landing ">
        <div className="light-overlay landing-inner text-dark">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">{signUp}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Landing.propTypes = {
  admin: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  admin: state.login,
});

export default connect(mapStateToProps)(Landing);
