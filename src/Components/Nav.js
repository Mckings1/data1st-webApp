import React from "react";
import { Link, NavLink } from "react-router-dom";
import image from "../Images/image.png";
import "../App.css";

function Nav() {
  return (
    <nav className="nav">
      <div className="logo-container">
        {/* logo */}
        <Link to="/">
          <img src={image} alt="logo" className="logo-image" />
        </Link>
        <ul className="list-items">
          {/* NavLink */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "navlink-list active" : "navlink-list"
            }
          >
            Home
            {/* <p className="navlink-list">Home</p> */}
          </NavLink>
          <NavLink
            to="/Howitworks"
            className={({ isActive }) =>
              isActive ? "navlink-list active" : "navlink-list"
            }
          >
            How it Works
            {/* <p className="navlink-list">How it Works</p> */}
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
