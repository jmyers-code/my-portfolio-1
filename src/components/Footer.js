import React from "react";
// import { Link } from "react-router-dom";
import "../style/Footer.css";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaGithub,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>#6 Shaibu Bako Rd.</p>
              <p>Lartebiokorshie, Accra.</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +233 595 950 241 / +233 558 260 912
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              myerseltonjohn@gmail.com / ltnmyers@protonmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>
            My name is Elton John Myers. I am the founder and CEO of Elohim
            Consult. I enjoy providing top quality solutions for my clients.
          </p>
          <div className="socials">
            <FaGithub
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaYoutube
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
