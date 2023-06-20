import React from "react";
import "../styles/slider.css";
import Button from "./Button";


const Slider = ({ image, text }) => {
  return (
    <div className="slider">
      <div className="slider__callToAction">
        <strong>{text}</strong>
        <Button text="Buy now" classname="slider__button" />
      </div>
      <div className="slider__img">
        <div className="background"></div>
        <img src={image} alt="" />
      </div>
    </div>
  );
};
export default Slider;
