import React from 'react';
import { NavLink} from "react-router-dom"

const Navbar = () => {
    return (
        <nav >
<NavLink to="/">Home</NavLink>
<NavLink to="/airquality">AirQuality</NavLink>
<NavLink to="/information">Leyenda</NavLink>
<NavLink to="/location">Location</NavLink>

        </nav>
    );
}

export default Navbar;