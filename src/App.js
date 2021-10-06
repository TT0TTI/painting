import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const App = () => {
  const [value, setValue] = useState(5);
  const canvasRef = useRef(null);
  const ctx = useRef(null);
  const [painting, setPainting] = useState(false);
  const [filling, setFilling] = useState(false);

  const CANVAS_SIZE = 700;
  const CANVAS_COLOR = "#2c2c2c";

  useEffect(() => {
    if (canvasRef.current) {
      ctx.current = canvasRef.current.getContext("2d");
      ctx.current.fillStyle = "white";
      ctx.current.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
      ctx.current.strokeStyle = CANVAS_COLOR;
      ctx.current.fillStyle = CANVAS_COLOR;
      ctx.current.lineWidth = 2.5;
    }
  }, []);

  /*range js*/

  const handleChange = (e) => {
    const lineSize = e.target.value;
    if (lineSize) {
      setValue(lineSize);
      ctx.current.lineWidth = lineSize;
    }
  };

  /*canvas js */

  const stopPainting = () => {
    setPainting(false);
  };

  const startPainting = () => {
    setPainting(true);
  };

  const handleMouseMove = ({ nativeEvent }) => {
    const x = nativeEvent.offsetX;
    const y = nativeEvent.offsetY;

    if (!ctx.current) return;

    if (!painting) {
      ctx.current.beginPath();
      ctx.current.moveTo(x, y);
    } else {
      ctx.current.lineTo(x, y);
      ctx.current.stroke();
    }
  };

  const handleCanvasClick = () => {
    if (filling) {
      ctx.current.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    }
  };

  const handleCM = (e) => {
    e.preventDefault();
  };

  /*colors js*/

  const handleChangeColor = ({ nativeEvent }) => {
    const color = nativeEvent.srcElement.style.backgroundColor;
    if (color) {
      ctx.current.strokeStyle = color;
      ctx.current.fillStyle = color;
    }
  };

  /*controls js*/
  const handleModeClick = ({ nativeEvent }) => {
    if (filling) {
      setFilling(false);
      nativeEvent.srcElement.innerHTML = "Fill";
    } else {
      setFilling(true);
      nativeEvent.srcElement.innerHTML = "Paint";
    }
  };

  const handelSave = () => {
    const image = canvasRef.current.toDataURL();
    const link = document.createElement("a");
    link.href = image;
    link.download = "PaintJS[EXPORT]";
    link.click();
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        className="canvas"
        width={CANVAS_SIZE}
        height={CANVAS_SIZE}
        onMouseMove={handleMouseMove}
        onMouseDown={startPainting}
        onMouseUp={stopPainting}
        onMouseLeave={stopPainting}
        onClick={handleCanvasClick}
        onContextMenu={handleCM}
      ></canvas>

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
          <button className="jsMode" onClick={handleModeClick}>
            Fill
          </button>
          <button className="jsSave" onClick={handelSave}>
            Save
          </button>
        </div>

        <div className="controls__colors">
          <div
            className="controls__color"
            onClick={handleChangeColor}
            style={{ backgroundColor: "black" }}
          ></div>
          <div
            className="controls__color"
            onClick={handleChangeColor}
            style={{ backgroundColor: "white" }}
          ></div>
          <div
            className="controls__color"
            onClick={handleChangeColor}
            style={{ backgroundColor: "#FF3B30" }}
          ></div>
          <div
            className="controls__color"
            onClick={handleChangeColor}
            style={{ backgroundColor: "#FF9500" }}
          ></div>
          <div
            className="controls__color"
            onClick={handleChangeColor}
            style={{ backgroundColor: "#FFCC00" }}
          ></div>
          <div
            className="controls__color"
            onClick={handleChangeColor}
            style={{ backgroundColor: "#4CD963" }}
          ></div>
          <div
            className="controls__color"
            onClick={handleChangeColor}
            style={{ backgroundColor: "#5AC8FA" }}
          ></div>
          <div
            className="controls__color"
            onClick={handleChangeColor}
            style={{ backgroundColor: "#0579FF" }}
          ></div>
          <div
            className="controls__color"
            onClick={handleChangeColor}
            style={{ backgroundColor: "#5856D6" }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default App;
