import React from "react";
import data from "../data";
import { Link } from "react-router-dom";
export default (props) => {
  return (
    <ul className="products">
      {data.products.map((product) => (
        <li>
          <div className="product">
            <img className="product-image" src={product.image} alt="product" />
            <div className="product-name">
              <Link to={"/product/" + product._id}>{product.name}</Link>
            </div>
            <div className="product-brand">{product.brand}</div>
            <div className="product-price">{product.price}</div>
            <div className="product-rating">{product.rating} Starts </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
