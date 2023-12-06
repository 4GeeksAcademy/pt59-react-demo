import React, { useEffect, useState } from "react";
import "../../styles/product.css";

const Product = ({ product, addToCart }) => {
  const [qty, setQty] = useState(1);

  useEffect(() => {
    if (qty < 1) {
      setQty(1);
    }
  }, [qty])

  return <div className="card" style={{
    maxWidth: "25rem",
    width: "100%"
  }}>
    <img src={product.image} alt="" className="card-img-top" />
    <div className="card-body">
      <h5 className="card-title">{product.title}</h5>
      <p className="card-text">{product.sku}</p>
    </div>
    <div className="card-footer text-body-secondary d-flex flex-row justify-content-around gap-3">
      {product.salePrice ? <span className="sale-price">
        ${product.salePrice}
      </span> : ""}
      <span className="price">
        ${product.price}
      </span>
      <button className="btn btn-secondary" onClick={() => setQty(qty + 1)}>▲</button>
      <button className="btn btn-primary" onClick={() => addToCart(qty)}>
        Add {qty} To Cart!
      </button>
      <button className="btn btn-secondary" onClick={() => setQty(qty - 1)}>▼</button>
    </div>
  </div>
}

export { Product }
