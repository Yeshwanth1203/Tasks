import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Yash</h1>
      <ul>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/About">AboutUs</Link></li>
        <li><Link to="/Services">Services</Link></li>
        <li><Link to="/Contact">Contactus</Link></li> 
        <li><Link to="/login">Login</Link></li>
        
      </ul>
    </nav>
  );
}

export default Navbar;