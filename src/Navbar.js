import React from "react";
import './Navbar.css';


const Navbar = () => {
    return (
        <div>
            
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <a className="navbar-brand" href="atomic"><b>Atomic</b></a>
                        <button className="navbar-toggler btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="offcanvas offcanvas-end sidebar" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            <ul className="navbar-nav sidebar-list">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="about">About</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="service" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Services
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a className="dropdown-item" href="Act1">Action1</a></li>
                                        <li><a className="dropdown-item" href="Act2">Action2</a></li>
                                        <li><a className="dropdown-item" href="Act3">Action3</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="gallary">Gallery</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="blog">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            
        </div>
    )
}

export default Navbar;
