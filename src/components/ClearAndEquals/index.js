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
          backgroundColor: "#dcd6f7",
          gridColumn: "3 / 4",
          gridRow: "5 / 6",
        }}
      >
        C
      </li>
      <li
        onClick={() => handleClick("=")}
        style={{
          width: "90%",
          backgroundColor: "#dcd6f7",
          gridColumn: "1 / 6",
          gridRow: "6 / 7",
        }}
      >
        =
      </li>
    </>
  );
}
