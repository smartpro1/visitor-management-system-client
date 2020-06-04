import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classnames from "classnames";
import Sidebar from "../Layout/Sidebar";
import { signoutVisitor } from "../../actions/adminActions";

class SignoutVisitor extends Component {
  constructor() {
    super();

    this.state = {
      tag: "",
      errors: "",
    };
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.errors) {
      this.setState({
        errors: "invalid visitor tag",
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
    const { signoutVisitor, history } = this.props;
    signoutVisitor(this.state.tag, history);
  };

  render() {
    const { tag, errors } = this.state;

    return (
      <div>
        <div className="row">
          <div className="col-md-2 d-none d-sm-block d-xs-block sidebar">
            <Sidebar />
          </div>
          <div className="col-md-6 mx-auto mt-5">
            <h1 className="header-h1 text-center my-4">Enter Visitor's Tag</h1>
            <form onSubmit={this.handleOnSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Enter visitor's tag id e.g TAG243"
                  name="tag"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors,
                  })}
                  value={tag}
                  onChange={this.handleOnChange}
                  required
                />
                {errors && (
                  <div className="invalid-feedback">
                    invalid tag or visitor still active
                  </div>
                )}
              </div>
              <input
                type="submit"
                className="btn btn-primary btn-block mt-4"
                value="signout visitor"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
SignoutVisitor.propTypes = {
  signoutVisitor: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  errors: state.errors,
});
export default connect(mapStateToProps, { signoutVisitor })(SignoutVisitor);
