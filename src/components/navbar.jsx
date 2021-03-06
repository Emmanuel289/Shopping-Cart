import React, { Component } from "react";

class NavBar extends Component {
  render() {
    console.log("NavBar-Rendered");
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">
          Navbar
          <span className="badge badge-pill badge-secondary m-2">
            {this.props.totalCounters}
          </span>
        </span>
      </nav>
    );
  }
}

export default NavBar;
