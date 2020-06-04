import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classnames from "classnames";
import { registerAdmin } from "../../actions/adminActions";

class RegisterAdmin extends Component {
  constructor() {
    super();

    this.state = {
      fullname: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      errors: {},
      isLoading: false,
    };
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
        isLoading: false,
      });
    }
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.setState({ isLoading: true });
    const { fullname, username, email, password, confirmPassword } = this.state;
    const newAdmin = {
      fullname,
      username,
      email,
      password,
      confirmPassword,
    };
    const { registerAdmin, history } = this.props;
    registerAdmin(newAdmin, history);
  };

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const {
      fullname,
      username,
      email,
      password,
      confirmPassword,
      errors,
      isLoading,
    } = this.state;

    if (isLoading) {
      return (
        <div className="forgot-password text-center mt-4 loading">
          <p className="spinner-border text-primary  my-3"></p>
          <p className="my-2">Processing...</p>
        </div>
      );
    }

    return (
      <div className="register-admin">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="header-h1 text-center">Admin Sign Up</h1>
              <p className="lead text-center">Create Admin Account</p>
              <form onSubmit={this.handleOnSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.fullname,
                    })}
                    placeholder="fullname"
                    name="fullname"
                    value={fullname}
                    onChange={this.handleOnChange}
                    required
                  />
                  {errors.fullname && (
                    <div className="invalid-feedback">{errors.fullname}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames(`form-control form-control-lg `, {
                      "is-invalid": errors.username,
                    })}
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={this.handleOnChange}
                    required
                  />
                  {errors.username && (
                    <div className="invalid-feedback">{errors.username}</div>
                  )}
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    className={classnames(`form-control form-control-lg`, {
                      "is-invalid": errors.email,
                    })}
                    placeholder="Email Address"
                    name="email"
                    value={email}
                    onChange={this.handleOnChange}
                    required
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.password,
                    })}
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={this.handleOnChange}
                    required
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.confirmPassword,
                    })}
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={this.handleOnChange}
                    required
                  />
                  {errors.confirmPassword && (
                    <div className="invalid-feedback">
                      {errors.confirmPassword}
                    </div>
                  )}
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

RegisterAdmin.propTypes = {
  registerAdmin: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});
export default connect(mapStateToProps, { registerAdmin })(RegisterAdmin);
