import React from "react";
import "./_nav.scss";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to="/" className="nav__link nav__link--active">
              Home
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/about" className="nav__link">
              About Me
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/projects" className="nav__link">
              My Projects
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/contact" className="nav__link">
              CONTACT
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
