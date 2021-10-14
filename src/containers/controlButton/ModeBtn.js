import React from "react";
import "./ModeBtn.css";

const ModeBtn = ({ clickEvent, text }) => {
  return (
    <button className="control" onClick={clickEvent}>
      {text}
    </button>
  );
};

export default ModeBtn;
