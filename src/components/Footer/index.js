import React from "react";
import "./style.scss";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="wrap">
        Copyright &copy; {new Date().getFullYear()} All Rights Reserved. Kennis
        Group
      </div>
    </footer>
  );
};

export default Footer;
