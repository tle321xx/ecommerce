import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left">
        <h2 className="h2">New Arrivals Only</h2>
        <div>
          <div className="hand-icon">
            <p className="p">new</p>
            <img src={hand_icon} />
          </div>
          <p className="p">collections</p>
          <p className="p">for everyone</p>
        </div>
        <div className="latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} />
        </div>
      </div>
      <div className="right">
        <img src={hero_image} />
      </div>
    </div>
  );
};

export default Hero;
