import React from "react";
import "./Color.css";

const Color = ({ handleChangeColor, color }) => {
  return (
    <div
      className="controls__color"
      onClick={handleChangeColor}
      style={{ backgroundColor: `${color}` }}
    ></div>
  );
};

export default Color;
