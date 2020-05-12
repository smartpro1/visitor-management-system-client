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
    };
  }

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
    const { phone } = this.state;
    const { errors } = this.props;

    return (
      <div>
        <div className="row">
          <div className="col-md-2 d-none d-sm-block d-xs-block sidebar">
            <Sidebar />
          </div>
          <div className="container col-md-6 mt-4">
            <h1 className="text-center my-4">Enter Visitor's Phone number</h1>
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
                  required
                />
                {errors.invalidPhone && (
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
