import React, { useState, useRef, useEffect } from "react";
import { Display } from "./display";
import { CalcButton } from "./button";

import "../../styles/calculator.css";

const Calculator = () => {
  const [dispNum, setDispNum] = useState("0");
  const value = useRef(0);

  // useState makes variables that React cares about.
  // i.e, this won't update the rendered page:
  // let dispNum = "0";
  // const setDispNum = (input) => {
  //   dispNum = input;
  // }

  useEffect(() => {
    value.current = Number(dispNum);
  }, [dispNum]);

  const inputValue = (input) => {
    const earlyReturns = [
      dispNum.includes(".") && input === ".",
      dispNum === "0" && input === "0",
    ]

    if (earlyReturns.some(x => x)) {
      return
    }

    if (dispNum === "0" && input !== ".") {
      setDispNum(input.toString());
    } else {
      setDispNum(dispNum + input.toString());
    }
  };

  const invertValue = () => {
    if (dispNum[0] !== "-"){
      setDispNum("-" + dispNum);
    } else {
      setDispNum(dispNum.slice(1));
    }
  }

  return (
    <div className="card" style={{ width: "75%", margin: "auto" }}>
      <div className="card-body">
        <Display>{dispNum}</Display>
        <div className="calc_grid">
          <CalcButton text="AC" color="danger" onClick={() => setDispNum("0")} />
          <CalcButton text="+/-" onClick={invertValue} />
          <CalcButton text="%" />
          <CalcButton text="+" />
          {/*  */}
          <CalcButton text="7" onClick={() => inputValue("7")} />
          <CalcButton text="8" onClick={() => inputValue("8")} />
          <CalcButton text="9" onClick={() => inputValue("9")} />
          <CalcButton text="-" />
          {/*  */}
          <CalcButton text="4" onClick={() => inputValue("4")} />
          <CalcButton text="5" onClick={() => inputValue("5")} />
          <CalcButton text="6" onClick={() => inputValue("6")} />
          <CalcButton text="*" />
          {/*  */}
          <CalcButton text="1" onClick={() => inputValue("1")} />
          <CalcButton text="2" onClick={() => inputValue("2")} />
          <CalcButton text="3" onClick={() => inputValue("3")} />
          <CalcButton text="/" />
          {/*  */}
          <CalcButton text="0" onClick={() => inputValue("0")} isWide />
          <CalcButton text="." onClick={() => inputValue(".")} />
          <CalcButton text="=" color="success" />
        </div>
      </div>
    </div>
  );
};

export { Calculator };
