import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/rpet064"><FontAwesomeIcon className="footer-icon" icon={["fab", "github"]} title="Github"/></a>
        <a href="www.linkedin.com/in/robert-pether-ba9968113"><FontAwesomeIcon className="footer-icon" icon={["fab", "linkedin"]} title="Linkedin"/></a>
        <a href="mailto:rpether@hotmail.co.nz"><FontAwesomeIcon className="footer-icon" icon={["fas", "envelope"]} title="Email"/></a>
      </div>
      <p>Copyright Robert Pether {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
