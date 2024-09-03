import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark navbar-expand-sm bg-dark">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Excercises
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create">
                Create Excercise Log
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/user">
                Create User
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
