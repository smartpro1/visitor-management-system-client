import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classnames from "classnames";
import { forgotPassword } from "../../actions/adminActions";

class ForgotPassword extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      errors: {},
      displaySpinner: false,
    };
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
        displaySpinner: false,
      });
    }
  };

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.setState({ displaySpinner: true });
    const email = this.state.email;
    const userEmail = { email };
    const { forgotPassword, history } = this.props;
    forgotPassword(userEmail, history);
  };

  render() {
    const { email, errors, displaySpinner } = this.state;

    if (displaySpinner) {
      return (
        <div className="forgot-password text-center mt-4 loading">
          <p className="spinner-border text-primary  my-3"></p>
          <p className="my-2">Processing...</p>
        </div>
      );
    }

    return (
      <div className="forgot-password mt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center my-4">
                Enter email to reset password
              </h1>

              <form onSubmit={this.handleOnSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.usernameorEmail,
                    })}
                    placeholder="Email Address"
                    name="email"
                    value={email}
                    onChange={this.handleOnChange}
                    required
                  />
                  {errors.usernameorEmail && (
                    <div className="invalid-feedback">
                      {errors.usernameorEmail}
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

ForgotPassword.propTypes = {
  forgotPassword: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { forgotPassword })(ForgotPassword);
