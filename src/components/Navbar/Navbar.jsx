import React from "react";
import "./navbar.css";

import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const goToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <nav>
      <NavLink to={"/"} onClick={goToTop}>
        <h1>Plan IT</h1>
      </NavLink>
      <main>
        <HashLink to={"/api/v1/home"}>Home</HashLink>
        {/* <Link to={"/contact"}>Contact</Link> */}
        {/* <HashLink to={"/api/v1/about"}>About Us</HashLink> */}
        <HashLink to={"/api/v1/login"}>Login</HashLink>
        <Link to={"/api/v1/register"}>Register</Link>
      </main>
    </nav>
  );
};

export default Navbar;
