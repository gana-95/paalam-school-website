import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="navbar" aria-label="Main Navigation">
        <div className="nav-links">
          <Link to="/">
          <h1 className="school-name">Paalam School</h1>
          </Link>
        </div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/resources">Resources</Link></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
