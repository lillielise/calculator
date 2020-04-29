import React, { useState } from "react";
import "./Calculator.css";
import Arithmetic from "../Arithmetic";
import Numbers from "../Numbers";
import Display from "..//Display";
import ClearAndEquals from "../ClearAndEquals";

function Calculator() {
  const [calculationDisplay, setCalculationDisplay] = useState("");
  const [result, setResult] = useState(0);
  const [currentSign, setCurrentSign] = useState("+");
  const [currentValue, setCurrentValue] = useState("");
  const [previousValue, setPreviousValue] = useState(0);
  let currentNumber;

  function signIsValid() {
    return !(
      calculationDisplay.length === 0 ||
      calculationDisplay[calculationDisplay.length - 1] === " "
    );
  }

  function buildCalculationString(val, type) {
    if (type === "sign") {
      if (signIsValid()) {
        setCalculationDisplay(`${calculationDisplay} ${val} `);
        setCurrentSign(val);
        setCurrentValue("");
      }
    }

    if (type === "number") {
      setCalculationDisplay(calculationDisplay + val);
      setCurrentValue(currentValue + val);
      currentNumber = parseInt(currentValue + val);

      switch (currentSign) {
        case "+":
          setResult(result - currentValue + currentNumber);
          setPreviousValue(currentNumber);
          break;
        case "-":
          setResult(result - currentValue - currentNumber);
          setPreviousValue(-currentNumber);
          break;
        case "x":
          setResult(result - previousValue + previousValue * currentNumber);
          setPreviousValue(previousValue * currentNumber);
          break;
        case "÷":
          setResult(result - previousValue + previousValue / currentNumber);
          setPreviousValue(previousValue / currentNumber);
          break;
        default:
          console.log("what do you want from me");
      }
    }
  }

  function handlClearOrEquals(val) {
    if (val === "C") {
      setCalculationDisplay("");
      setResult(0);
      setCurrentSign("+");
      setCurrentValue("");
      setPreviousValue("");
    }
    if (val === "=") {
      setCalculationDisplay(result);
      setCurrentSign("");
      setPreviousValue("");
    }
  }

  return (
    <div className="Calculator">
      <div className="calculator-container">
        <Arithmetic buildCalculationString={buildCalculationString} />
        <Display result={result} calculationDisplay={calculationDisplay} />
        <Numbers buildCalculationString={buildCalculationString} />
        <ClearAndEquals handlClearOrEquals={handlClearOrEquals} />
      </div>
    </div>
  );
}

export default Calculator;
