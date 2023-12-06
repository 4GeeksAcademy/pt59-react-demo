import React, { useState } from "react";

const CartToggle = ({ cartID, children }) => {
  return (
    <a
      className="navbar-brand"
      data-bs-toggle="offcanvas"
      href={`#${cartID}`}
      role="button"
    >
      {children}
    </a>
  );
};

const Cart = ({ children, cartID }) => {
  return (
    <section>
      <div className="offcanvas offcanvas-start" id={cartID}>
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Hello Valued Customer!
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="list-group sidebar-list-group">{children}</div>
        </div>
      </div>
    </section>
  );
};

const CartItem = ({ lineItem, changeQty, remove }) => {
  return (
    <div className="list-group-item list-group-item-action">
      <div className="d-flex justify-content-around">
        <img src={lineItem.image} className="cart_image" />
        <span>{lineItem.sku} - {lineItem.title}</span>
      </div>
      <div className="d-flex justify-content-around">
        {lineItem.salePrice ? <span className="sale-price">${lineItem.salePrice.toFixed(2)}</span> : ""}
        {lineItem.price ? <span className="price">${lineItem.price.toFixed(2)}</span> : ""}
      </div>
      <div className="d-flex justify-content-around">
        <button className="btn btn-secondary" onClick={() => changeQty(1)}>▲</button>
        {lineItem.qty}x - ${((lineItem.salePrice || lineItem.price) * lineItem.qty).toFixed(2)}
        <button className="btn btn-secondary" onClick={() => changeQty(-1)}>▼</button>
        <button className="btn btn-danger" onClick={remove}>⊘</button>
      </div>
    </div>
  );
};

export { Cart, CartToggle, CartItem };
