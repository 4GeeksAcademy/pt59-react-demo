import React from "react";
import { ModalButton } from "./Modal";

const Card = ({ children, img, title, onClick }) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{children}</p>
          <ModalButton onClick={onClick} modalId="recipe-modal">
            Show Recipe
          </ModalButton>
        </div>
      </div>
    </>
  );
};

export { Card };
