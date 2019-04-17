import React from "react";
import PropTypes from "prop-types";
import "./styles/TopBar.css";

const TopBar = ({ city, showCityLayer }) => {
  return (
    <div className="topBar">
      <div className="topBar_city" onClick={showCityLayer}>
        {city}
      </div>
      <div className="topBar_search">搜索</div>
      <div className="topBar_scan" />
    </div>
  );
};

TopBar.propTypes = {
  city: PropTypes.string.isRequired,
  showCityLayer: PropTypes.func.isRequired
};

export default TopBar;
