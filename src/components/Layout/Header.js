import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md bg-primary navbar-dark">
        <a className="navbar-brand text-center" href="#">
          Visitor Management System
        </a>

        {
          // <!-- Toggler/collapsibe Button -->
        }
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="collapsibleNavbar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/logout">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
