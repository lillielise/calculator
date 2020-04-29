import React from "react";
import "./Display.css";

export default function Display(props) {
  return (
    <div className="display-container">
      <p id="calculation-display">{props.calculationDisplay}</p>
      <p id="result-display">{props.result}</p>
    </div>
  );
}
