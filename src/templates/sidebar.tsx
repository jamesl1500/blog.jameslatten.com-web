/**
 * Sidebar
 * -------
 * The sidebar component of the website.
 */
"use client";

import React from "react";

const Sidebar = () => {
  const closeSidebar = () => {
    const sidebar = document.querySelector(".sidebar")!;
    const overlay = document.querySelector(".overlay")!;

    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  }

  return (
    <aside className="sidebar-parent">
        <div className="sidebar-inner">
            <div className="sidebar-inner-header">
                <div className="sidebar-branding">
                    <h1>Explore</h1>
                </div>
                <div className="sidebar-close">
                    <span className="closeSidebar" onClick={closeSidebar}>X</span>
                </div>
            </div>
            <div className="sidebar-inner-content">
                <nav className="sidebar-nav">
                    <p>Navigation</p>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </nav>
                <div className="sidebar-social">
                    <p>Social</p>
                    <ul>
                        <li><a data-toggle="tooltip" href="https://www.linkedin.com/in/jameslattenjr/" aria-label="Linkedin"><i className="fa-brands fa-linkedin" aria-hidden="true"></i> LinkedIn</a></li>
                        <li><a href="https://github.com/jamesl1500"><i className="fa-brands fa-square-github" aria-hidden="true"></i> Github</a></li>
                        <li><a href="https://twitter.com/jaye_aesthetic"><i className="fa-brands fa-square-twitter" aria-hidden="true"></i> Twitter</a></li>
                        <li><a href="https://www.instagram.com/jaye.aesthetic/"><i className="fa-brands fa-instagram" aria-hidden="true"></i> Instagram</a></li>
                    </ul>
                </div>
                <div className="sidebar-footer">
                    <h2>Made with <i className="fa-solid fa-heart" aria-hidden="true"></i> in Ohio</h2>
                    <p>Created by James Latten | Copyright © 2024</p>
                </div>
            </div>
        </div>
    </aside>
  );
};

export default Sidebar;