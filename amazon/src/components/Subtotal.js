import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";

const Subtotal = () => {
  const [{ basket }] = useStateValue();
  const value = basket?.reduce((amount, item) => item.price + amount, 0);

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items) :<strong>₹{value}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" />
        This order contains a gift.
      </small>
      <button>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
