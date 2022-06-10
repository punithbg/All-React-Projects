import React, { useContext } from "react";
import { useStateValue } from "../StateProvider";
import Header from "./Header";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
const Checkout = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__add"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="add"
        />
        {basket?.length === 0 ? (
          <div>
            <h1>Your Shopping Basket is empty</h1>
          </div>
        ) : (
          <div>
            <h1 className="checkout__title">Your Shopping Basket</h1>
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket?.length > 0 && (
        <div className="checkout__left">
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
