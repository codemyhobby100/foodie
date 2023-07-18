import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="">
      <h1>MEALY</h1>
      <div className="rest">
        <ul>
          <h3>Links of Interest</h3>
          <li>About Us</li>
          <li>FAQ</li>
          <li>Blog</li>
          <li>Contact Us</li>
          <li>Security</li>
        </ul>

        <ul>
          <h3>Legal</h3>
          <li>Privacy Policy </li>
          <li>Terms of use</li>
        </ul>

        <ul>
          <h3>Services</h3>
          <li>24/7 delivery services</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
