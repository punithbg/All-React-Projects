import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Movie-Logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        {/* <img src={Logo} alt="movie app logo" className="nav-logo" /> */}
        <Link className="app-title" to="/">
          <h3>Moviz Zone</h3>
        </Link>
      </div>

      <div className=" links">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/favourites">
          Favourites
        </Link>
        <Link className="nav-link" to="/movie">
          Movies
        </Link>
        <Link className="nav-link" to="/series">
          Series
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
