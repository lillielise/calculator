/* eslint-disable no-fallthrough */
import React, {
  useState
} from "react";
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
  const [dividendOrMultiplier, setDividendOrMultiplier] = useState(1);
  let currentValueFloat;
  let previousSubAddCalc;
  let length;

  function prevIsNotEmptyOrSign() {
    return (
      calculationDisplay.length !== 0 &&
      calculationDisplay[calculationDisplay.length - 1] !== " "
    );
  }

  function multiply(x, y) { return x * y }

  function divide(x, y) { return x / y }

  function buildCalculationString(val, type) {

    if (type === "sign") {
      if (prevIsNotEmptyOrSign()) {
        setCalculationDisplay(`${calculationDisplay} ${val} `);
        setCurrentSign(val);
        setCurrentValue("");
      }
    }

    if (type === "number" || (type === "decimal" && prevIsNotEmptyOrSign())) {
      setCalculationDisplay(calculationDisplay + val);
      setCurrentValue(currentValue + val);
      previousSubAddCalc = currentValue ? parseFloat(currentValue) : 0;
      currentValueFloat = parseFloat(currentValue + val);
      length = currentValueFloat.toString().length;

      let modifier = 1;
      switch (currentSign) {
        case "-":
          modifier = -1;
        case "+":
          setResult(result - modifier * previousSubAddCalc + modifier * currentValueFloat);
          setPreviousValue(modifier * currentValueFloat);
          break;
        case "x":
        case "÷":
          let execute = currentSign === "x" ? multiply : divide;
          let tempDividendOrMultiplier = dividendOrMultiplier;
          if (length === 1) {
            tempDividendOrMultiplier = previousValue;
            setDividendOrMultiplier(previousValue);
          }
          setResult(result - previousValue + execute(tempDividendOrMultiplier, currentValueFloat))
          setPreviousValue(execute(tempDividendOrMultiplier, currentValueFloat))
          break;
        default:
          console.error("value is not valid");
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
      setCalculationDisplay(parseFloat(result.toFixed(5)));
      setCurrentSign("");
      setPreviousValue("");
    }
  }

  return (
    <div className="Calculator" >
      <div className="calculator-container" >
        <Arithmetic buildCalculationString={buildCalculationString} />
        <Display result={result}
          calculationDisplay={calculationDisplay} />
        <Numbers buildCalculationString={buildCalculationString} />
        <ClearAndEquals handlClearOrEquals={handlClearOrEquals} />
      </div>
    </div>
  );
}

export default Calculator;