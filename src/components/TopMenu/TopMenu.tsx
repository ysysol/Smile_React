import React from 'react';
import { FaHome, FaUser, FaCog, FaSearch } from 'react-icons/fa';
import './TopMenu.css';

const TopMenu: React.FC = () => {
  return (
    <div className="top-menu">
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search..." className="search-input" />
      </div>
      <div className="menu-icons">
        <div className="menu-item">
          <FaHome />
        </div>
        <div className="menu-item">
          <FaUser />
        </div>
        <div className="menu-item">
          <FaCog />
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
