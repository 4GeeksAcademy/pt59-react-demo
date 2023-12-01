import React, { useState, useRef, useEffect } from "react";
import { Display } from "./display";
import { CalcButton } from "./button";

import "../../styles/calculator.css";

const Calculator = () => {
  const [dispNum, setDispNum] = useState("0");
  const value = useRef(0);
  const register = useRef(0);
  const operation = useRef(null);

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
      dispNum === "NaN",
      dispNum === "Infinity",
      dispNum === "-Infinity",
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

  const swapRegister = () => {
    register.current = value.current;
    setDispNum("0");
  }

  const startOperation = (op) => {
    swapRegister();
    operation.current = op;
  }

  const completeOperation = () => {
    switch(operation.current) {
      case "add":
        setDispNum((register.current + value.current).toString());
        break;
      case "sub":
        setDispNum((register.current - value.current).toString());
        break;
      case "mul":
        setDispNum((register.current * value.current).toString());
        break;
      case "div":
        setDispNum((register.current / value.current).toString());
        break;
      case "mod":
        setDispNum((register.current % value.current).toString());
        break;
      default:
        break;
    }
  }

  return (
    <div className="card" style={{ width: "75%", margin: "auto" }}>
      <div className="card-body">
        <Display>{dispNum}</Display>
        <div className="calc_grid">
          <CalcButton text="AC" color="danger" onClick={() => setDispNum("0")} />
          <CalcButton text="+/-" onClick={invertValue} />
          <CalcButton text="%" onClick={() => startOperation("mod")} />
          <CalcButton text="+" onClick={() => startOperation("add")} />
          {/*  */}
          <CalcButton text="7" onClick={() => inputValue("7")} />
          <CalcButton text="8" onClick={() => inputValue("8")} />
          <CalcButton text="9" onClick={() => inputValue("9")} />
          <CalcButton text="-" onClick={() => startOperation("sub")} />
          {/*  */}
          <CalcButton text="4" onClick={() => inputValue("4")} />
          <CalcButton text="5" onClick={() => inputValue("5")} />
          <CalcButton text="6" onClick={() => inputValue("6")} />
          <CalcButton text="×" onClick={() => startOperation("mul")} />
          {/*  */}
          <CalcButton text="1" onClick={() => inputValue("1")} />
          <CalcButton text="2" onClick={() => inputValue("2")} />
          <CalcButton text="3" onClick={() => inputValue("3")} />
          <CalcButton text="÷" onClick={() => startOperation("div")} />
          {/*  */}
          <CalcButton text="0" onClick={() => inputValue("0")} isWide />
          <CalcButton text="." onClick={() => inputValue(".")} />
          <CalcButton text="=" color="success" onClick={completeOperation} />
        </div>
      </div>
    </div>
  );
};

export { Calculator };
