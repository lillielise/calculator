import React from "react";

export default function Numbers(props) {

  function handleClick(val) {
    if (val === ".") {
      props.buildCalculationString(val, "decimal");
    } else {
      props.buildCalculationString(val, "number");
    }
  }

  function createNumbers() {
    const numbersList = [];
    const columns = ["1 / 2", "2 / 3", "3 / 4"];
    const rows = ["2 / 3", "3 / 4", "4 / 5", "5 / 6"];

    for (let i = 0; i < 10; i++) {
      numbersList.push(
        <li key={
          i
        }
          onClick={
            () => handleClick(i)
          }
          style={
            {
              gridColumn: `${columns[(i % 3)]}`,
              gridRow: `${rows[Math.floor(i / 3)]}`,
            }
          } >
          {
            i
          } </li>
      );
    }
    return numbersList;
  }

  return (<> {
    createNumbers()
  }
    <li onClick={
      () => handleClick(".")
    }
      style={
        {
          gridColumn: "2 / 3",
          gridRow: " 5 / 6",
        }
      } >
      . </li>
  </>
  );
}