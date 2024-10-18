// src/layout/MainLayout.js
import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/MainLayout.css';

const MainLayout = ({ children, text }) => {
  return (
    <div className="main-container">
      <Navbar />
      <div className="content">
        <div className="text-section">
          <p>{text}</p>
        </div>
        <div className="form-section">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
