import React from 'react';
import { Link } from 'react-scroll';
import './Header.css'; // Importing custom CSS file for the header

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        {/* <h1 className="logo">ALEX ACM</h1> */}
        <img src="assets/ACM_logo2.png" alt="Logo" className="logo-image" />
        <div className="nav-links">
          <Link to="about-section" smooth duration={500} className="nav-link">CS-Week</Link>
          <Link to="speakers-section" smooth duration={500} className="nav-link">Speakers</Link>
          <Link to="schedule-section" smooth duration={500} className="nav-link">Schedule</Link>
          <Link to="sponsers-section" smooth duration={500} className="nav-link">Sponsers</Link>
          <Link to="prizes-section" smooth duration={500} className="nav-link">Prizes</Link>
          <Link to="registration-section" smooth duration={500} className="nav-link">Register</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
