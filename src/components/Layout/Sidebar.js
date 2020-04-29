import React, { Component } from "react";
import avatar from "../../assets/images/img2.png";

class Sidebar extends Component {
  render() {
    return (
      <div>
        <div className="my-4">
          <img
            src={avatar}
            alt="admin image"
            className="mx-auto d-block rounded-circle img-fluid admin-image"
          />
          <p className="text-center">
            <strong>Akeni Promise...</strong>
          </p>
        </div>
        <ul className="dashbord-list-item">
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/register-visitor">Register Visitor</a>
          </li>
          <li>
            <a href="/signout-visitor">Signout Visitor</a>
          </li>
          <li>
            <a href="/registered-visitors">My Visitors</a>
          </li>
          <li>
            <a href="/visitors-log">My Visitors Log</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
