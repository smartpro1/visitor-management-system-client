import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classnames from "classnames";
import Sidebar from "../Layout/Sidebar";
import { trackVisitor } from "../../actions/adminActions";

class TrackVisitor extends Component {
  constructor() {
    super();

    this.state = {
      phone: "",
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
    const { trackVisitor, history } = this.props;
    trackVisitor(this.state.phone, history);
  };

  render() {
    const { phone, errors } = this.state;
    return (
      <div>
        <div className="row">
          <div className="col-md-2 bg-info sidebar">
            <Sidebar />
          </div>
          <div className="col-md-4 mx-auto">
            <h1 className="display-4 text-center my-4">
              Enter Visitor's Phone number
            </h1>
            <form onSubmit={this.handleOnSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Phone number of visitor you want to track"
                  name="phone"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.invalidPhone,
                  })}
                  value={phone}
                  onChange={this.handleOnChange}
                />
                {errors && (
                  <div className="invalid-feedback">{errors.invalidPhone}</div>
                )}
              </div>
              <input
                type="submit"
                className="btn btn-primary btn-block mt-4"
                value="track visitor"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

TrackVisitor.propTypes = {
  trackVisitor: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  errors: state.errors,
});
export default connect(mapStateToProps, { trackVisitor })(TrackVisitor);
