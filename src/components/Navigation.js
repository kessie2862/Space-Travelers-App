import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navigation.css';

function Navigation() {
  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <div className="nav-logo">
            <img src="planet.png" alt="" />
            <h2 className="logo">Space Travelers&apos; Hub</h2>
          </div>
          <div className="nav-items">
            <Link to="/rockets" className="categories">
              Rockets
            </Link>
            <Link to="/missions" className="categories">
              Missions
            </Link>
            <Link to="/profile" className="categories border">
              My Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
