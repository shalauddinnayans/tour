import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  const a = {
    ab: "jdkfjlsd",
  };
  return (
    <div className="footer">
      <div className="footet-items">
        <div>
          <h2>Product</h2>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div>
          <h2>Information</h2>
          <ul>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/support">Support</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2>Company</h2>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2>Subscribe</h2>
          <form action="">
            <input type="text" name="" id="" />
            <input type="submit" value="" />
          </form>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis ipsa
            natus at quis provident dolorem tempore veniam hic alias eos aliquid
            omnis fugiat praesentium quod odit, reiciendis atque! Et,
            aspernatur.
          </p>
        </div>
      </div>
      <div className="footer-most-down">
        <div>
          <h1>LOGO</h1>
        </div>
        <div>
          <Link to="/">Terms</Link>
          <Link to="/">Privacy</Link>
          <Link to="/">Cookies</Link>
        </div>
        <div>
          <a href="https://www.facebook.com/">fb</a>
          <a href="https://www.facebook.com/">fb</a>
          <a href="https://www.facebook.com/">fb</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
