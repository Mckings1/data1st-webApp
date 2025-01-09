import React from "react";
import logo from "../Images/image.png";
import instagram from "../Images/instagram_logo.png";
import linkedin from "../Images/Path 2520.png";
import facebook from "../Images/g10.png";
import whatsapp from "../Images/whatsapp_symbol.png";
import phone from "../Images/ri-phone-line.png";
import mail from "../Images/ri-mail-line.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Contact Info */}
        <div className="footer-left">
          <img src={logo} alt="Logo" className="footer-logo" />
          <div className="footer-socials">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="logo" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="logo" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="logo" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whatsapp} alt="logo" />
            </a>
          </div>
        </div>
        <div className="footer-middle">
          <a href="+234123456789">
            <img src={phone} alt="logo" />
            <p>+234123456789</p>
          </a>
          <a href="info@datalst.com">
            <img src={mail} alt="logo" />
            <p>info@datalst.com</p>
          </a>
        </div>

        {/* Address and Map */}
        <div className="footer-right">
          <p>Street, City, State, Country</p>
          <div className="footer-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31722.462579915744!2d3.400487947310271!3d6.447296302901725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf51d1da8e027%3A0x8e173ef4d4d9f4ed!2sMTN%20Nigeria%20Lagos%20Head%20Office!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
              width="550"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MTN Office Map"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
