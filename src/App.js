import React, { useState } from "react";
import "./App.css";
import Arithmetic from "./components/Arithmetic";
import Numbers from "./components/Numbers";
import Display from "./components/Display";
import ClearAndEquals from "./components/ClearAndEquals";

function App() {
  const [calculationDisplay, setCalculationDisplay] = useState(
    "22222 + 8 / 2 + 4 / 3"
  );
  const [result, setResult] = useState(23456);

  return (
    <div className="App">
      <div className="calculator-container">
        <Arithmetic />
        <Display result={result} calculationDisplay={calculationDisplay} />
        <Numbers />
        <ClearAndEquals />
      </div>
    </div>
  );
}

export default App;
