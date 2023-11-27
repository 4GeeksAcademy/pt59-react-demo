import React from "react";

const CalcButton = ({ text, onClick, isWide, color="primary" }) => {
  return (
    <button className={`btn btn-${color}${isWide ? " btn-wide": ""}`} onClick={onClick}>
      {text ? text : "0"}
    </button>
  );
};

export { CalcButton };
