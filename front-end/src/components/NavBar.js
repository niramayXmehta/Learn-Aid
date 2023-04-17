import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/coursepage.css';

function Navbar() {
  return (
    <div>
        <nav>
            <ul>
              <li><a href="./..">Home</a></li>
              <li><a href="./../module-page">Modules</a></li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
            </ul>
         </nav>
         {/* sub content */}
            <div className="menu-container">
                <h3> Welcome!!!! </h3>
                <ul className="menu-list">
                <li className="menu-item"> <button className="settingsBtn"> Modules </button></li>
                <li className="menu-item"> <button className="settingsBtn"> Favourite Modules</button></li>
                <li className="menu-item"> <button className="settingsBtn"> Progress </button></li>
  
                </ul>
                <div className="menu-line"></div>
            </div>
    </div>
    
    
  );
}

export default Navbar;