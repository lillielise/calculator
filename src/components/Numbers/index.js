import React from "react";
import "./Numbers.css";

export default function Numbers(props) {
  function createNumbers() {
    const numbersList = [];
    const columns = ["1 / 2", "2 / 3", "3 / 4"];
    const rows = ["2 / 3", "3 / 4", "4 / 5", "5 / 6"];

    for (let i = 0; i < 10; i++) {
      numbersList.push(
        <li
          style={{
            backgroundColor: "#eeeeee",
            gridColumn: `${columns[i % 3]}`,
            gridRow: `${rows[Math.floor(i / 3)]}`,
          }}
        >
          {i}
        </li>
      );
    }
    return numbersList;
  }

  return (
    <>
      {createNumbers()}
      <li
        style={{
          backgroundColor: "#eeeeee",
          gridColumn: "2 / 3",
          gridRow: "5 / 6",
        }}
      >
        ( )
      </li>
      <li
        style={{
          backgroundColor: "#eeeeee",
          gridColumn: "3 / 4",
          gridRow: " 5 / 6",
        }}
      >
        .
      </li>
    </>
  );
}
