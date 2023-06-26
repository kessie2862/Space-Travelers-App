import React from 'react';
import { NavLink } from 'react-router-dom';
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
            <NavLink to="/rockets" className="categories" activeclass="active">
              Rockets
            </NavLink>
            <NavLink to="/missions" className="categories" activeclass="active">
              Missions
            </NavLink>
            <NavLink
              to="/profile"
              className="categories border"
              activeclass="active"
            >
              My Profile
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
