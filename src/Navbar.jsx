import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Create this CSS file for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Insight</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/about">About Us</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
