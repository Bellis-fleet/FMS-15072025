
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'; // optional: for custom styling

const Sidebar = () => {
  return (
    <div className="sidebar bg-dark text-white p-3 vh-100">
      <h4 className="text-center mb-4">FMS Panel</h4>
      <nav className="nav flex-column">
        <NavLink to="/dashboard" className="nav-link text-white" activeClassName="active">
        Dashboard
        </NavLink>
        <NavLink to="/vehicles" className="nav-link text-white" activeClassName="active">
          🚗 Vehicles
        </NavLink>
        <NavLink to="/drivers" className="nav-link text-white" activeClassName="active">
          👨‍✈️ Drivers
        </NavLink>
        <NavLink to="/reports" className="nav-link text-white" activeClassName="active">
          📊 Reports
        </NavLink>
        <NavLink to="/alerts" className="nav-link text-white" activeClassName="active">
          🚨 Alerts
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
