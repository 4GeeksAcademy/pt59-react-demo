import React from "react";

const Card = ({ children, img, title, buttonText, buttonLink }) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{children}</p>
          <a href={buttonLink} className="btn btn-primary">
            {buttonText}
          </a>
        </div>
      </div>
    </>
  );
};

export { Card };
