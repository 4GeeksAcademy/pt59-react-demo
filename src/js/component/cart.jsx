import React from "react";

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

const CartItem = ({ lineItem, incr, decr, remove }) => {
  return (
    <div className="list-group-item list-group-item-action">
      <img src={lineItem.image} className="cart_image" />
      <div>
        {lineItem.sku} - {lineItem.title}
      </div>
      <div>
        <strike>${lineItem.price.toFixed(2)}</strike> $
        {lineItem.salePrice.toFixed(2)}
      </div>
      <div>
        <button className="btn btn-secondary" onClick={incr}>▲</button>
        {lineItem.qty}x - ${(lineItem.salePrice * lineItem.qty).toFixed(2)}
        <button className="btn btn-secondary" onClick={decr}>▼</button>
        <button className="btn btn-danger" onClick={remove}>⊘</button>
      </div>
    </div>
  );
};

export { Cart, CartToggle, CartItem };
