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
                <h1>Menu</h1>

                <ul>
                    <li>
                        <a className="menu-item" href="#home">Home</a>
                    </li>

                    <li>
                        <a className="menu-item" href="#about">About</a>
                    </li>

                    <li>
                        <a className="menu-item" href="#skills">Skills</a>
                    </li>

                    <li>
                        <a className="menu-item" href="#workExp">Work Experience</a>
                    </li>

                    <li>
                        <a className="menu-item" href="#contact">Contact me</a>
                    </li>

                    <button className="contact-btn" onClick={() => {}}>
                        Resume
                    </button>
                </ul>
            </div>
        </div>
        </>
    );    
}

export default MobileNav