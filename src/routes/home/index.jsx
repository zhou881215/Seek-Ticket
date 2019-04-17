import React, { Component } from "react";
// import PropTypes from "prop-types";
import "./styles/index.css";
import TopBar from "./components/TopBar";

class index extends Component {
  showCityLayer = () => {
    console.log("show the city layer");
  };

  render() {
    return (
      <>
        <TopBar city={"苏州"} showCityLayer={this.showCityLayer} />
      </>
    );
  }
}

index.propTypes = {};

export default index;
