import React from "react";
import "./_nav.scss";
import { Link, NavLink } from "react-router-dom";
import image from "../../img/Emblem.png";

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <Link to="/">
          <img src={image} alt="emblem" style={{ width: "70px" }} />
        </Link>
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to="/" className="nav__link nav__link">
              Home
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/about" className="nav__link">
              BIOGRAPHY
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/projects" className="nav__link">
              GALLERY
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
