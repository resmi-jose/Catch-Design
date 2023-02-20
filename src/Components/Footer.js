import React from "react";
import "../Scss/index.scss";
import { Link } from "react-router-dom";
import Facebook from "../Img/icon-facebook.png";
import Instagram from "../Img/icon-instagram.png";
import Youtube from "../Img/icon-youtube.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-section">
        <div className="section1">
          <div className="social-icons">
            <div>
              <img src={Facebook} />
            </div>
            <div>
              <img src={Instagram} />
            </div>
            <div>
              <img src={Youtube} />
            </div>
          </div>
          <p>
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh.
          </p>
        </div>
        <div className="section2">
          <address className="address">
            <strong>Main Office</strong>
            <br />
            6235 Thalia Terrace Apt. 695
            <br />
            Frederikfurt
            <br />
            Jamaica
          </address>

          <address>
            <strong> Contact</strong>
            <br />
            735-421-6378
            <br />
            <span>myname@gmail.com</span>
          </address>
        </div>
      </div>
    </div>
  );
};

export default Footer;
