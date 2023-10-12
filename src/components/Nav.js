import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-secondary text-uppercase "
      id="mainNav"
    >
      <div className="container">
        <Link to="/Home" className="navbar-brand">
          Hike
        </Link>

        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-0 mx-lg-1">
              <NavLink
                style={{}}
                to="/Home"
                className="nav-link py-3 px-0 px-lg-3 rounded"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <NavLink
                style={{}}
                to="/TripsList"
                className="nav-link py-3 px-0 px-lg-3 rounded"
              >
                Trips
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
