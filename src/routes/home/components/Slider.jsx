import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "./styles/slider.css";

const PosterSlider = ({ data }) => {
  const settings = {
    dots: true,
    autoPlay: true,
    className: "posterSlider",
    dotsClass: "posterSlider_dots"
  };
  const slideData = data.map(item => item);
  console.log(slideData);
  return (
    <Slider {...settings}>
      <div>
        <img
          className="posterSlider_img"
          src="/source/slide/slide1.jpeg"
          alt=""
        />
      </div>
      <div>
        <img
          className="posterSlider_img"
          src="/source/slide/slide2.jpeg"
          alt=""
        />
      </div>
      <div>
        <img
          className="posterSlider_img"
          src="/source/slide/slide3.jpeg"
          alt=""
        />
      </div>
      <div>
        <img
          className="posterSlider_img"
          src="/source/slide/slide4.jpeg"
          alt=""
        />
      </div>
      <div>
        <img
          className="posterSlider_img"
          src="/source/slide/slide5.jpeg"
          alt=""
        />
      </div>
    </Slider>
  );
};

PosterSlider.propTypes = {
  data: PropTypes.array.isRequired
};

export default PosterSlider;
