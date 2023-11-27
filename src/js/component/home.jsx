import React from "react";

//include images into your bundle
import { Calculator } from "./calculator.jsx";
import { StrictMode } from "react/cjs/react.production.min.js";

//create your first component
const Home = () => {
  return (
    <StrictMode>
      <div className="container">
        <Calculator />
      </div>
    </StrictMode>
  );
};

export default Home;
