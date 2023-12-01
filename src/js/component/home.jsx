import React, { useState, useEffect } from "react";

//include images into your bundle
import { StrictMode } from "react/cjs/react.production.min.js";
import { Cart, CartItem, CartToggle } from "./cart";

//create your first component
const Home = () => {
  /**
   * Add add item functionality
   * maybe clean up the incr/decr/remove functions?
   * remove ability to have negative items in cart
   * maybe save cart to session storage?
   */

  const [items, setItems] = useState([
    {
      image: "https://placekitten.com/350",
      sku: "abc123",
      title: "Cats are cool",
      price: 123.00,
      salePrice: 155.00,
      qty: 5,
    },
    {
      image: "https://placekitten.com/250",
      sku: "abc125",
      title: "Some Other Thing",
      price: 125.00,
      salePrice: 175.00,
      qty: 2,
    },
  ]);

  const changeQty = (idx, diff) => {
    let tempItems = [...items];
    tempItems[idx].qty += diff;
    setItems(tempItems);
  }

  return (
    <StrictMode>
      <div className="container">
        <CartToggle cartID="Cart">
          Wobsite
        </CartToggle>
        <Cart cartID="Cart">
          {items.map((item, idx) => (
            <CartItem
              lineItem={item}
              key={idx}
              incr={() => changeQty(idx, 1)}
              decr={() => changeQty(idx, -1)}
              remove={() => setItems(items.toSpliced(idx, 1))}
            />))}
        </Cart>
      </div>
    </StrictMode>
  );
};

export default Home;
