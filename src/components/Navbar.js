import React from "react";

import logo from "../images/AldhairVeraIcon.png";
import './styles/Navbar.css';

// const gamejams='../html/gamejam.html';
// const ownProjects='../html/gamejam.html';
// const published='../html/gamejam.html';
// const contactMe='../html/gamejam.html';

const gamejams='../public/index.html';
const ownProjects='../public/index.html';
const published='../public/index.html';
const contactMe='../public/index.html';

class Navbar extends React.Component{
    render(){
        return(
            <div className="Navbar">
                <div className="Navbar-container">
                    <div className="Navbar-logo-container">
                        <a href="../public/index.html" className="Navbar-logo-container">
                            <img className="Navbar-logo" 
                            src={logo} 
                            width="80" 
                            alt="Aldhair Vera Icon"/>
                            <span className="Navbar-title">
                                <p>
                                    Aldhair
                                    <br/>
                                    Vera
                                    <br/>
                                    Camacho
                                </p>
                            </span>
                        </a>
                    </div>
                    <nav className="Navbar-links-container">
                        <ol className="Navbar-link-set">
                            <li >
                                <a className="Navbar-links" href={gamejams}>
                                    Gamejams
                                </a>
                            </li>
                            <li >
                                <a className="Navbar-links" href={ownProjects}>
                                    Own Projects
                                </a>
                            </li>
                            <li >
                                <a className="Navbar-links" href={published}>
                                    Published Projects
                                </a>
                            </li>
                            <li >
                                <a className="Navbar-links" href={contactMe}>
                                    Contact Me
                                </a>
                            </li>

                        </ol>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Navbar;