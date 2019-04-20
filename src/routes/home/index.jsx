import React, { Component } from "react";
// import PropTypes from "prop-types";
import "./styles/index.css";
import TopBar from "./components/TopBar";
import PosterSlider from "./components/Slider";

class index extends Component {
  showCityLayer = () => {
    console.log("show the city layer");
  };

  render() {
    return (
      <div className="home">
        <TopBar city={"苏州"} showCityLayer={this.showCityLayer} />
        <div className="home_slide">
          <div className="home_slideWrap">
            <PosterSlider data={[]} />
          </div>
        </div>
      </div>
    );
  }
}

index.propTypes = {};

export default index;
