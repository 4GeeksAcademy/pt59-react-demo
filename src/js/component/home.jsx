import React, { useState, useEffect } from "react";

//include images into your bundle
import { Cart, CartItem, CartToggle } from "./cart";
import { Product } from "./product";

//create your first component
const Home = () => {
  /**
   * maybe save cart to session storage?
   * Fix cart to not assume all products have a sale price.
   * Make product allow qty change if item in cart
   */
  const [products] = useState([
    {
      image: "https://c1.neweggimages.com/ProductImageCompressAll1280/14-131-808-01.jpg",
      sku: "GPU001",
      title: "AMD RX 7900 XTX (24GB GDR6)",
      price: 899.99,
      salePrice: 799.99,
    },
    {
      image: "https://assets.biglots.com/is/image/biglots/810596373-2?$medium$",
      sku: "PIL001",
      title: "BigLots Rainbow Pillow",
      price: 14.99,
      salePrice: 9.95,
    },
    {
      image: "https://i.ebayimg.com/images/g/no4AAOSwpMJjr-v4/s-l1600.jpg",
      sku: "VIN001",
      title: "Coheed And Cambria Good Apollo I'm Burning Star IV | Volume One: From Fear Through The Eyes Of Madness - Mint Condition, Never Opened, Vinyl LP",
      price: 350.00,
      salePrice: null,
    }
  ])

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    for (let idx in cartItems) {
      if (cartItems[idx].qty <= 0) {
        setCartItems(cartItems.toSpliced(idx, 1));
      }
    }
  }, [cartItems]);

  const changeQtyFunc = (idx) => {
    return (diff) => {
      let tempItems = [...cartItems];
      tempItems[idx].qty += diff;
      setCartItems(tempItems);
    }
  }

  const addToCartFunc = (sku) => {
    return () => {
      if (cartItems.map(i => i.sku).includes(sku)) {
        return;
      }

      setCartItems([
        ...cartItems,
        { ...products.find((i) => i.sku === sku), qty: 1 }
      ])
    }
  }

  return (
    <>
      <nav className="navbar bg-body-tertiary sticky-top mb-3">
        <CartToggle cartID="Cart">
          <h1>Wobsite</h1>
        </CartToggle>
      </nav>
      <div className="container">
        <Cart cartID="Cart">
          {cartItems.length ? cartItems.map((item, idx) => (
            <CartItem
              lineItem={item}
              key={idx}
              changeQty={changeQtyFunc(idx)}
              remove={() => setCartItems(cartItems.toSpliced(idx, 1))}
            />)) : <p className="balanced-text">There's nothing in your cart, why not add something?</p>}
        </Cart>
        <section className="container mb-5">
          <div className="d-flex flex-row flex-wrap justify-content-center gap-3">
            {products.map((product, idx) => <Product
              product={product}
              addToCart={addToCartFunc(product.sku)}
              isInCart={false}
              key={idx}
            />)}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
