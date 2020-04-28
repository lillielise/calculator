import React from "react";

export default function ClearAndEquals(props) {
  return (
    <>
      <li
        style={{
          backgroundColor: "orange",
          padding: "10% 40%",
          gridColumn: "1 / 3",
          gridRow: "6 / 7",
        }}
      >
        C
      </li>
      <li
        style={{
          backgroundColor: "orange",
          padding: "10% 40%",
          gridColumn: "3 / 5",
          gridRow: "6 / 7",
        }}
      >
        =
      </li>
    </>
  );
}
