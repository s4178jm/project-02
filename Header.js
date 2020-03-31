import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Header() {
  return (
    <Router>
    <div className="nav">
      <div className="nav-item">
        <span className="nav-logo">
          <Link to="/Current_Weather/Current_Weather">Current_Weather</Link>
        </span>
      </div>
      <div className="nav-item">
        <Link to="/stocks">Stocks</Link>
      </div>
      <div className="nav-item">
        <Link to="/about">About</Link>
      </div>
    </div>
    </Router>
  );
}

export default Header;