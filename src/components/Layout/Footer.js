import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="bg-primary text-center text-white">
        <div className="container">
          <p className="my-2">
            Developed with &hearts; by Akeni Promise &copy; 2020
          </p>
          <p className="text-muted">
            Want to get in touch?{" "}
            <a
              href="https://web.facebook.com/pakeni"
              target="_blank"
              className="text-white"
            >
              click me &#128525;
            </a>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
