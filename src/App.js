import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [value, setValue] = useState(5);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <canvas className="canvas"></canvas>

      <div className="controls">
        <div className="controls__range">
          <input
            type="range"
            className="jsRange"
            min="1"
            max="10"
            value={value}
            onChange={handleChange}
            step="1"
          />
        </div>

        <div className="controls__btns">
          <button className="jsMode">Fill</button>
          <button className="jsSave">Save</button>
          <button className="jsMode">Fill2</button>
        </div>

        <div className="controls__colors">
          <div
            className="controls__color"
            style={{ backgroundColor: "black" }}
          ></div>
          <div
            className="controls__color"
            style={{ backgroundColor: "white" }}
          ></div>
          <div
            className="controls__color"
            style={{ backgroundColor: "#FF3B30" }}
          ></div>
          <div
            className="controls__color"
            style={{ backgroundColor: "#FF9500" }}
          ></div>
          <div
            className="controls__color"
            style={{ backgroundColor: "#FFCC00" }}
          ></div>
          <div
            className="controls__color"
            style={{ backgroundColor: "#4CD963" }}
          ></div>
          <div
            className="controls__color"
            style={{ backgroundColor: "#5AC8FA" }}
          ></div>
          <div
            className="controls__color"
            style={{ backgroundColor: "#0579FF" }}
          ></div>
          <div
            className="controls__color"
            style={{ backgroundColor: "#5856D6" }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default App;
