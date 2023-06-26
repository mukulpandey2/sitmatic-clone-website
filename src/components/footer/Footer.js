import React from "react";
import "./footer.css";
import facebookIcon from "../../assets/image/facebook.svg";
import twitterIcon from "../../assets/image/twitter.svg";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="container">
        <ul className="footer-col-block">
          <h3 className="footer-col">Archives</h3>
          <li className="footer-menu"></li>
        </ul>
        <ul className="footer-col-block">
          <h3 className="footer-col">Categories</h3>
          <li className="footer-menu">No categories</li>
        </ul>
        <ul className="footer-col-block">
          <h3 className="footer-col">Recent Comments</h3>
          <li className="footer-menu"></li>
        </ul>
        <ul className="footer-col-block">
          <h3 className="footer-col">Meta</h3>
          <li className="footer-menu">
            <a
              className="footer-menu-a"
              href="https://sitmatic.com/wp-login.php"
            >
              Log in
            </a>
          </li>
          <li className="footer-menu">
            <a className="footer-menu-a">Entries feed</a>
          </li>
          <li className="footer-menu">
            <a
              className="footer-menu-a"
              href="https://sitmatic.com/comments/feed/"
            >
              Comments feed
            </a>
          </li>
          <li className="footer-menu">
            <a className="footer-menu-a" href="https://wordpress.org/">
              WordPress.org
            </a>
          </li>
        </ul>
        <div className="site-footer-bottom">
          <div>
            <p className="footer-copyRight-text">
              © 2019 Sitmatic All Rights Reserved. <br />
              Sitmatic <br />
              1800 Raymer Avenue <br /> Fullerton, CA 92833 <br />
              (800) 288-1492
            </p>
          </div>
          <div className="footer-socialIconBlock">
            <li
              style={{
                fontSize: "13px",
                listStyle: "none",
                marginRight: "10px",
              }}
            >
              GET SOCIAL
            </li>
            <li style={{ listStyle: "none" }}>
              <a
                href="https://www.facebook.com/Sitmatic"
                className="social-icon-item"
              >
                <img src={facebookIcon} alt="F" width="15" />
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a
                href="https://twitter.com/sitmatic"
                className="social-icon-item"
              >
                <img src={twitterIcon} alt="T" width="15" />
              </a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
