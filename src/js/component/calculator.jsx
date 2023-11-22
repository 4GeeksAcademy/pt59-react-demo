import React, { useState } from "react";
import { Display } from "./display";
import { CalcButton } from "./button";

import "../../styles/calculator.css";

const Calculator = () => {
  const [dispNum, setDispNum] = useState("0");
  const inputValue = (value) => {
    if (dispNum === "0") {
      setDispNum(value.toString());
    } else {
      setDispNum(dispNum + value.toString());
    }
  };

  return (
    <div className="card" style={{ width: "75%", margin: "auto" }}>
      <div className="card-body">
        <Display>{dispNum}</Display>
        <div className="calc_grid">
          <CalcButton text="0" onClick={() => inputValue("0")} />
          <CalcButton text="1" onClick={() => inputValue("1")} />
          <CalcButton text="2" onClick={() => inputValue("2")} />
          <CalcButton text="3" onClick={() => inputValue("3")} />
          <CalcButton text="4" onClick={() => inputValue("4")} />
          <CalcButton text="5" onClick={() => inputValue("5")} />
          <CalcButton text="6" onClick={() => inputValue("6")} />
          <CalcButton text="7" onClick={() => inputValue("7")} />
          <CalcButton text="8" onClick={() => inputValue("8")} />
          <CalcButton text="9" onClick={() => inputValue("9")} />
          <CalcButton text="." onClick={() => inputValue(".")} />
          <CalcButton text="AC" onClick={() => setDispNum("0")} />
          <CalcButton text="+/-" />
          <CalcButton text="%" />
          <CalcButton text="+" />
          <CalcButton text="-" />
          <CalcButton text="*" />
          <CalcButton text="/" />
          <CalcButton text="=" />
        </div>
      </div>
    </div>
  );
};

export { Calculator };
