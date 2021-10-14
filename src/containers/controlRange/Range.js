import React from "react";
import "./Range.css";

const Range = ({ max, min, step, value, handleChange }) => {
  return (
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={handleChange}
      step={step}
    />
  );
};

export default Range;
