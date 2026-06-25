import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper" id="testimonials">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
           Good food is all about taste, quality, and the joy it brings to people. 
  From fresh ingredients to delicious flavors, every dish tells a story. 
  Whether it’s street food or fine dining, food lovers always enjoy exploring new recipes and cuisines that satisfy both heart and hunger.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
           “Best food experience ever! Quick delivery and incredible flavors that never disappoint.”
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>John Doe</h2>
      </div>
    </div>
  );
};

export default Testimonial;