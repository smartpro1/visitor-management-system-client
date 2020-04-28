import React, { Component } from "react";
import Sidebar from "../Layout/Sidebar";

class SignoutVisitor extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-2 bg-info sidebar">
            <Sidebar />
          </div>
          <div className="col-md-4 mx-auto">
            <h1 className="display-4 text-center my-4">Enter Visitor's Tag</h1>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Enter username correct tag id e.g TAG243"
                  name="tag"
                  className="form-control form-control-lg"
                />
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

export default SignoutVisitor;
