import React from "react";

export default function Arithmetic(props) {
  function createSigns() {
    const signsList = [];
    const signs = ["÷", "x", "-", "+"];
    const rows = ["2 / 3", "3 / 4", "4 / 5", "5 / 6"];

    for (let i = 0; i < signs.length; i++) {
      signsList.push(
        <li
          style={{
            backgroundColor: "#bbbbbb",
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

  return <>{createSigns()}</>;
}
