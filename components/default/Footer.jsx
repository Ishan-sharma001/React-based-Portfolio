import React from "react";
import "../default/styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Ishan Sharma. All rights reserved.</p>
    </footer>
  );
};

export default Footer;