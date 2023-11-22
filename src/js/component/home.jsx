import React from "react";

//include images into your bundle
import { Calculator } from "./calculator.jsx";

//create your first component
const Home = () => {
  return (
    <div className="container">
      <Calculator />
    </div>
  );
};

export default Home;
