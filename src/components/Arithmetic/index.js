import React from "react";

export default function Arithmetic(props) {
  function handleClick(val) {
    if (val === "√") {
      props.buildCalculationString(val, "squareRoot")
    } else {
      props.buildCalculationString(val, "sign");
    }
  }

  function createSigns() {
    const signsList = [];
    const signs = ["÷", "x", "-", "+"];
    const rows = ["2 / 3", "3 / 4", "4 / 5", "5 / 6"];

    for (let i = 0; i < signs.length; i++) {
      signsList.push(
        <li
          onClick={() => handleClick(signs[i])}
          key={i}
          style={{
            backgroundColor: "#a6b1e1",
            gridColumn: "4 / 5",
            gridRow: `${rows[i]}`,
          }}
        >
          {signs[i]}
        </li>
      );
    }
    return signsList;
  }

  return (
    <>
      {createSigns()}
    </>
  );
}
