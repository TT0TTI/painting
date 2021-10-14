import React, { useState, useEffect, useRef } from "react";
import Canvas from "./containers/canvasContainer";
import Color from "./containers/controlColor";
import ModeBtn from "./containers/controlButton";
import Range from "./containers/controlRange";
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
      <Canvas
        canvasRef={canvasRef}
        CANVAS_SIZE={CANVAS_SIZE}
        handleMouseMove={handleMouseMove}
        startPainting={startPainting}
        stopPainting={stopPainting}
        handleCanvasClick={handleCanvasClick}
        handleCM={handleCM}
      />

      <div className="controls">
        <div className="controls__range">
          <Range
            min="1"
            max="10"
            value={value}
            handleChange={handleChange}
            step="1"
          />
        </div>

        <div className="controls__btns">
          <ModeBtn clickEvent={handleModeClick} text={"Fill"} />
          <ModeBtn clickEvent={handelSave} text={"Save"} />
        </div>

        <div className="controls__colors">
          <Color handleChangeColor={handleChangeColor} color={"black"} />
          <Color handleChangeColor={handleChangeColor} color={"white"} />
          <Color handleChangeColor={handleChangeColor} color={"#FF3B30"} />
          <Color handleChangeColor={handleChangeColor} color={"#FF9500"} />
          <Color handleChangeColor={handleChangeColor} color={"#FFCC00"} />
          <Color handleChangeColor={handleChangeColor} color={"#4CD963"} />
          <Color handleChangeColor={handleChangeColor} color={"#5AC8FA"} />
          <Color handleChangeColor={handleChangeColor} color={"#0579FF"} />
          <Color handleChangeColor={handleChangeColor} color={"#5856D6"} />
        </div>
      </div>
    </>
  );
};

export default App;
