import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classnames from "classnames";
import Sidebar from "../Layout/Sidebar";
import { trackVisitors } from "../../actions/adminActions";

class TrackVisitors extends Component {
  constructor() {
    super();

    this.state = {
      start: "",
      end: "",
    };
  }

  //   componentWillReceiveProps = (nextProps) => {
  //     if (nextProps.errors) {
  //       this.setState({
  //         errors: "invalid date search",
  //       });
  //     }
  //   };

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    const { start, end } = this.state;
    const dateRange = { start, end };
    const { trackVisitors, history } = this.props;
    console.log(dateRange);
    trackVisitors(dateRange, history);
  };

  render() {
    const { start, end } = this.state;
    return (
      <div>
        <div className="row">
          <div className="col-md-2 bg-info sidebar">
            <Sidebar />
          </div>
          <div className="col-md-4 mx-auto">
            <h1 className="display-4 text-center my-4">
              Track visitors from a particular date to another
            </h1>
            <form onSubmit={this.handleOnSubmit}>
              <div className="form-group">
                <input
                  type="date"
                  name="start"
                  className="form-control form-control-lg"
                  value={start}
                  onChange={this.handleOnChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="date"
                  name="end"
                  className="form-control form-control-lg"
                  value={end}
                  onChange={this.handleOnChange}
                />
              </div>
              <input
                type="submit"
                className="btn btn-primary btn-block mt-4"
                value="track visitors"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

TrackVisitors.propTypes = {
  trackVisitors: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  errors: state.errors,
});
export default connect(mapStateToProps, { trackVisitors })(TrackVisitors);
