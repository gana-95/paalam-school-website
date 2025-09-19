import React from "react";

export default function Header() {
  return (
    <header>
      <nav className="navbar" aria-label="Main Navigation">
        <div className="brand">
          <h1 className="school-name">Paalam School</h1>
        </div>

        <ul className="nav-links">
          <li><a href="#mission">Mission</a></li>
          <li><a href="#resources">Resources</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
