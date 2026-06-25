import React from 'react'
import logo from "../Assets/Logo.svg"
import { BsTwitter } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one" >
        <div className="footer-logo-container">
          <img src={logo} alt="" />
          
        </div>
        <p className="footer-description">
          We serve the best food for ypou and your family. Our food is very delicious and very affordable
        </p>
        <div className="footer-icons">
          <BsTwitter />
          <FaLinkedin />
          <BsYoutube />
          <FaFacebook />
          <FaInstagram />
        </div>

      </div>
      <div className="footer-section-two">
       <div className="footer-section-two">

  <div className="footer-section-columns">
    <h3>Quality</h3>
    <span>Home</span>
    <span>About</span>
    <span>Menu</span>
    <span>Services</span>
  </div>


  <div className="footer-section-columns">
    <h3>Help</h3>
    <span>Contact</span>
    <span>FAQ</span>
    <span>Support</span>
    <span>Feedback</span>
  </div>


  <div className="footer-section-columns">
    <h3>Share</h3>
    <span>Terms & Conditions</span>
    <span>Privacy Policy</span>
    <span>Social Media</span>
  </div>


  <div className="footer-section-columns">
    <h3>Careers</h3>
    <span>Join Us</span>
    <span>Work With Us</span>
    <span>Become Partner</span>
  </div>


</div>
        <div className="footer-section-columns">
           <span>244-5333-7783</span>
            <span>hello@food.com</span>
             <span>press@food.com</span>
              <span>contact@food.com</span>

        </div>
        <div className="footer-section-columns">
           <span>terms & conditions</span>
            <span>privacy policy</span>
        </div>

      </div>

    </div>
  )
}

export default Footer