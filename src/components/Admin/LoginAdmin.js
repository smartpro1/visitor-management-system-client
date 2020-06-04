import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classnames from "classnames";
import { loginAdmin } from "../../actions/adminActions";

class LoginAdmin extends Component {
  constructor() {
    super();

    this.state = {
      usernameOrEmail: "",
      password: "",
      isLoading: false,
      errors: {},
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

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleLogin = (event) => {
    event.preventDefault();
    this.setState({ isLoading: true });
    const { usernameOrEmail, password } = this.state;
    const adminCredentials = { usernameOrEmail, password };
    const { loginAdmin, history } = this.props;
    loginAdmin(adminCredentials, history);
  };

  render() {
    const { usernameOrEmail, password, isLoading, errors } = this.state;

    if (isLoading) {
      return (
        <div className="text-center mt-4 loading">
          <p className="spinner-border text-primary  my-3"></p>
          <p className="my-2">Processing...</p>
        </div>
      );
    }

    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="header-h1 text-center my-4">Log In</h1>
              <form onSubmit={this.handleLogin}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Enter username or email"
                    name="usernameOrEmail"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.usernameOrEmail,
                    })}
                    value={usernameOrEmail}
                    onChange={this.handleOnChange}
                    required
                  />
                  {errors.usernameOrEmail && (
                    <div className="invalid-feedback">
                      {errors.usernameOrEmail}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.password,
                    })}
                    value={password}
                    onChange={this.handleOnChange}
                    required
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                />
              </form>
              <p className="small mt-3">
                <a href="/forgot-password" className="text-info">
                  Forgot password
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LoginAdmin.propTypes = {
  loginAdmin: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});
export default connect(mapStateToProps, { loginAdmin })(LoginAdmin);
