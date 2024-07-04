// eslint-disable-next-line no-unused-vars
import React from 'react';
import { NavLink } from "react-router-dom";
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <NavLink to="/" className="nav-link">
                <img src="/images/iconos/homeIcon.svg" alt="Home" className="nav-icon" />
            </NavLink>
            <NavLink to="/airquality" className="nav-link">
                <img src="/images/iconos/señalIcon.svg" alt="Air Quality" className="nav-icon" />
            </NavLink>
            <NavLink to="/leyenda" className="nav-link">
                <img src="/images/iconos/leyendaIcon.svg" alt="Leyenda" className="nav-icon" />
            </NavLink>
            <NavLink to="/credits" className="nav-link">
                <img src="/images/iconos/locationIcon.svg" alt="Location" className="nav-icon" />
            </NavLink>
        </footer>
    );
}

export default Footer;
