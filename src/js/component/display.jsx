import React from "react";

const Display = ({ children }) => {
  return (
    <div className="card-title">
      <code className="calc_display">{children}</code>
    </div>
  );
};

export { Display };
