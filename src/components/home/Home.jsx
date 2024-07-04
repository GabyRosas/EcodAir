import React from "react";
import Logo from "../../../public/logo.jpg"

const Home = () => {

    return (
        <div className="landingPage">
            <p>Air Pollution Meter</p>
            <img src = {Logo} alt="Logo"/>
            <div className="buttonContainer">
                <button className="landingButton">Today's Air Quality</button>
                <button className="landingButton">More Information</button>
            </div>
        </div>
    );
};

export default Home;