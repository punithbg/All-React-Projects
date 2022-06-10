import { Button } from "bootstrap";
import React from "react";
import "./CheckoutProduct.css";
import ClearIcon from "@mui/icons-material/Clear";
import { useStateValue } from "../../StateProvider";

const CheckoutProduct = ({ id, img, title, subtitle, optional }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <div className="checkoutProduct__Left">
        <img src={img} alt={title} />
      </div>
      <div className="checkoutProduct__Right">
        <h5>{title}</h5>
        {subtitle ? (
          <h5 className="checkoutProduct__RightStars">
            {Array(Number(subtitle.slice(0, 1)))
              .fill()
              .map((_) => (
                <p>⭐</p>
              ))}
          </h5>
        ) : (
          <h5 className="checkoutProduct__RightStars">
            {Array(3)
              .fill()
              .map((_) => (
                <p>⭐</p>
              ))}
          </h5>
        )}

        <p>₹ {optional ? (Number(optional) * 50).toFixed(1) : 275}</p>
        <button
          className="checkoutProduct__RightButton"
          onClick={removeFromCart}
        >
          <ClearIcon
            className="checkoutProduct__RightButtonIcon"
            fontSize="small"
          />
          Remove fromCart
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
