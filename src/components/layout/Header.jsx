import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      
      
      <nav className="navbar" aria-label="Main Navigation">
        <Link to="/" className="logo-link">
          <h1 className="school-name">Paalam School</h1>
        </Link>

        <ul className="nav-links">
          <li><Link to="/admissions">Admissions</Link></li>
          <li><Link to="/academics">Academics</Link></li>
          <li><Link to="/events">Student Life</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
