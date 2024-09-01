/**
 * Footer
 * -------
 * The footer component of the website.
 */

import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-content">
          <ul>
            <li><a data-toggle="tooltip" href="https://www.linkedin.com/in/jameslattenjr/" aria-label="Linkedin" aria-describedby="tooltip374399"><i className="fa-brands fa-linkedin" aria-hidden="true"></i></a></li>
            <li><a href="https://github.com/jamesl1500"><i className="fa-brands fa-square-github" aria-hidden="true"></i></a></li>
            <li><a href="https://twitter.com/jaye_aesthetic"><i className="fa-brands fa-square-twitter" aria-hidden="true"></i></a></li>
            <li><a href="https://www.instagram.com/jaye.aesthetic/"><i className="fa-brands fa-instagram" aria-hidden="true"></i></a></li>
          </ul>
          <h2>Made with <i className="fa-solid fa-heart"></i> in Ohio</h2>
          <p>Created by James Latten | © 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;