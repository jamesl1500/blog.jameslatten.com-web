"use client";

/**
 * Header
 * -------
 * The header component of the website.
 */

import React from "react";
import Image from "next/image";

import logo from "../static/images/favicon.png";

const Header = () => {
    const openSidebar = () => {
        const sidebar = document.querySelector(".sidebar")!;
        const overlay = document.querySelector(".overlay")!;

        sidebar.classList.toggle("active");
        overlay.classList.toggle("active");
    };

    return (
        <header className="header-main container-fluid">
        <div className="header-inner">
            <div className="header-row row">
                <div className="header-branding col-lg-4">
                    <div className="header-logo">
                        <a href="/">
                            <Image src={logo} alt="Logo" />
                        </a>
                    </div>
                </div>
                <div className="header-name col-lg-4">
                    <div className="header-name-inner">
                        <p>Blog</p>
                    </div>
                </div>
                <div className="header-nav col-lg-4">
                    <div className="header-nav-inner">
                        <nav className="header-nav-parent">
                            <ul>
                                <li className="sidebar-open" onClick={openSidebar}>
                                    {/* Bar lines using spans */}
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        </header>
    );
};

export default Header;