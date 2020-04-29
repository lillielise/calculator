import React from "react";

export default function ClearAndEquals(props) {
  function handleClick(val) {
    props.handlClearOrEquals(val);
  }

  return (
    <>
      <li
        onClick={() => handleClick("C")}
        style={{
          width: "80%",
          backgroundColor: "#dcd6f7",
          gridColumn: "1 / 3",
          gridRow: "6 / 7",
        }}
      >
        C
      </li>
      <li
        onClick={() => handleClick("=")}
        style={{
          width: "80%",
          backgroundColor: "#dcd6f7",
          gridColumn: "3 / 5",
          gridRow: "6 / 7",
        }}
      >
        =
      </li>
    </>
  );
}
