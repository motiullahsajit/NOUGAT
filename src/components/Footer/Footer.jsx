import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>&copy; {new Date().getFullYear()} NOUGAT. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
