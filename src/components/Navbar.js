import React from "react";

import logo from "../images/AldhairVeraIcon.png";
import "./styles/Navbar.css";
import { Link } from "react-router-dom";

// const gamejams='../html/gamejam.html';
// const ownProjects='../html/gamejam.html';
// const published='../html/gamejam.html';
// const contactMe='../html/gamejam.html';

// const gamejams = "../public/index.html";
// const ownProjects = "../public/index.html";
// const published = "../public/index.html";
// const contactMe = "../public/index.html";

class Navbar extends React.Component {
  render() {
    return (
      <header>
        <div className="Navbar">
          <figure className="Navbar-logo-container">
            <Link className="Navbar-logo-container" to="/">
              <img
                className="Navbar-logo"
                src={logo}
                width="80"
                alt="Aldhair Vera Icon"
              />
              <span className="Navbar-title">
                <p>
                  Aldhair
                  <br />
                  Vera
                  <br />
                  Camacho
                </p>
              </span>
            </Link>
          </figure>

          <nav className="Navbar-links-container">
            <ol className="Navbar-link-set">
              <li>
                <Link className="Navbar-links" to="/Gamejams">
                  Gamejams
                </Link>
              </li>

              <li>
                <Link className="Navbar-links" to="/OwnProjects">
                  Own Projects
                </Link>
              </li>

              <li>
                <Link className="Navbar-links" to="/PublishedProjects">
                  Published Projects
                </Link>
              </li>

              <li>
                <Link className="Navbar-links" to="/ContactMe">
                  Contact Me
                </Link>
              </li>
            </ol>
          </nav>
        </div>
      </header>
    );
  }
}

export default Navbar;
