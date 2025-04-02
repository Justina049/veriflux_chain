import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">VeriFlux</div>
      <ul className="nav-links">
        <li><NavLink to="/issue">Issue Certificate</NavLink></li>
        <li><NavLink to="/verify">Verify Certificate</NavLink></li>
        <li><NavLink to="/list">List Certificates</NavLink></li>
      </ul>
      <button className="go-to-app">Go to App</button>
    </nav>
  );
};

export default Navbar;
