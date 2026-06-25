import React from "react";
import Logo from "../Assets/Logo.svg"; // Adjust path if your logo image has a different name
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
        <a href="#cart" className="navbar-cart-icon">
          <BsCart2 />
        </a>
        <button className="primary-button">Bookings Now</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 />
      </div>
    </nav>
  );
};

export default Navbar;