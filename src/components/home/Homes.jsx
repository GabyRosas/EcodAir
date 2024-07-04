import React from "react";
import Logo from "../../../public/logo.jpg"
import './Home.scss';
import { NavLink } from 'react-router-dom';


const Homes = () => {

    return (
        <div className="landingPage">
            <h2>Air Pollution Meter</h2>
            <img src = {Logo} alt="Logo"/>
            <div className="buttonContainer">
            <NavLink to="/airquality"><button>Today's Air Quality</button></NavLink>
            <NavLink to="/leyenda"><button>More Information</button></NavLink>
            </div>
        </div>
    );
};

export default Homes;