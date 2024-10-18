// src/components/Navbar.js
import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <img src="/logo.png" alt="Logo" className="logo" />  {/* Adjust the path as needed */}
      <a href="#" className="contact-link">Contact</a>
    </div>
  );
};

export default Navbar;
