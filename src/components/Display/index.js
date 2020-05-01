import React from "react";
import "./Display.css";

export default function Display(props) {

  function cleanResultDisplay() {
    return parseFloat(props.result.toFixed(5))
  }
  return (
    <div className="display-container">
      <p id="calculation-display">{props.calculationDisplay}</p>
      <p id="result-display">{cleanResultDisplay()}</p>
    </div>
  );
}
