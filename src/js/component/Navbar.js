import React from "react";
import Logo from "../../img/2.png"

const Navbar = () => {
    return (
            <nav>
                <img src={Logo} className="nav-logo" />
                <p id="journal">my travel journal</p>
            </nav>
        )
    }



export default Navbar