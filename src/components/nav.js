import React from "react";
import { Link, NavLink } from "react-router-dom";
import image from "../Images/image.png";
import "../App.css";

function Nav() {
  return (
    <nav className="nav">
      <div className="logo-container">
        <ul className="list-items">
          {/* logo */}
          <Link to="/">
            <img src={image} alt="logo" className="logo-image" />
          </Link>
          {/* NavLink */}
          <NavLink to="/" className="">
            <p className="navlink-list">Home</p>
          </NavLink>
          <NavLink to="/Howitworks" className="">
            <p className="navlink-list">How it works</p>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
