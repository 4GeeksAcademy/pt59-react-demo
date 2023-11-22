import React from "react";

const CalcButton = ({ text, onClick }) => {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      {text ? text : "0"}
    </button>
  );
};

export { CalcButton };
