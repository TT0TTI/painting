import React from "react";
import "./Canvas.css";

const Canvas = ({
  canvasRef,
  CANVAS_SIZE,
  handleMouseMove,
  startPainting,
  stopPainting,
  handleCanvasClick,
  handleCM,
}) => {
  return (
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
  );
};

export default Canvas;
