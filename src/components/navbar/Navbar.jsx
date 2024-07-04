// import React from 'react';
import { NavLink} from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/airquality" className="nav-link">AirQuality</NavLink>
            <NavLink to="/leyenda" className="nav-link">Leyenda</NavLink>
            <NavLink to="/location" className="nav-link">Location</NavLink>
        </nav>
    );
}

export default Navbar;