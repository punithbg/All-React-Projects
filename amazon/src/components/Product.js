import React, { useContext, useState } from "react";
import { useStateValue } from "../StateProvider";
import "./Product.css";

const Product = ({ id, title, price, rating, image }) => {
  const [state, dispatch] = useStateValue();
  //adding item to basket
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">₹ {price}</p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
