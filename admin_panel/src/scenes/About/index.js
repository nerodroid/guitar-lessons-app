import React from "react";
import {Link, Outlet} from "react-router-dom";

const About = () => {
    return (
        <div>
            <nav>
                <Link to={"/about"}>about</Link>
                <Link to={"/about/us"}>about us</Link>
            </nav>
            <Outlet/>
        </div>
    );
};

export default About;
