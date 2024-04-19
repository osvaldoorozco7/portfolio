import React from "react";
import "./MobileNav.css";

const MobileNav = ({isOpen, toggleMenu}) => {

    return(
        <>
        <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
        >
            <div className="mobile-menu-container">
                <img className="logo" src="public\images\computer-malware.svg" alt="" />

                <ul>
                    <li>
                        <a className="menu-item" href="">Home</a>
                    </li>

                    <li>
                        <a className="menu-item" href="">Skills</a>
                    </li>

                    <li>
                        <a className="menu-item" href="">Work Experience</a>
                    </li>

                    <li>
                        <a className="menu-item" href="">Contact me</a>
                    </li>

                    <button className="contact-btn" onClick={() => {}}>
                        Hire me
                    </button>
                </ul>
            </div>
        </div>
        </>
    );    
}

export default MobileNav