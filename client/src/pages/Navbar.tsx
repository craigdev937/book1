import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = (): JSX.Element => (
    <React.Fragment>
        <nav className="navbar">
            <ul className="navbar__ul">
                <Link className="navbar__link" to="/">Books</Link>
                <Link className="navbar__link" to="/create">Create</Link>
            </ul>
        </nav>
    </React.Fragment>
);



