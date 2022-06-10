import React from "react";
import { useStateValue } from "../../StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";

const Checkout = () => {
  const [{ basket }] = useStateValue();
  const value = basket?.reduce(
    (amount, item) =>
      Number(item.optional ? (Number(item.optional) * 50).toFixed(1) : 275) +
      amount,
    0
  );

  return (
    <div className="checkout">
      {basket?.length === 0 ? (
        <div className="checkout__empty">
          <img
            className="checkout__emptyImage"
            src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
            alt=""
          />
          <h3 className="checkout__emptyTitle">Your cart is empty!</h3>
          <p className="checkout__emptySubTitle">
            It's a good day to buy the items you saved for later!
          </p>
        </div>
      ) : (
        <div className="checkout__items">
          <div className="left">
            <div className="checkout__itemsTitle">
              <h3>
                Your basket has total {basket.length}{" "}
                {basket.length == 1 ? "item" : "items"}
              </h3>
            </div>
            {basket?.map((item) => {
              console.log(item);
              return (
                <div className="checkout__Products">
                  <CheckoutProduct
                    id={item.id}
                    img={item.img}
                    title={item.title}
                    subtitle={item.subtitle}
                    optional={item.optional}
                  />
                </div>
              );
            })}
          </div>
          <div className="right">
            <div className="right__Pricedetails">
              <h5>Price Details</h5>
            </div>
            <div className="right__Charges">
              <div className="right__ChargesItem">
                <p>
                  Price ({basket.length} {basket.length == 1 ? "item" : "items"}{" "}
                  )
                </p>
                <p>₹{value}</p>
              </div>
              <div className="right__ChargesItem">
                <p>Discount</p>
                <p style={{ color: "#388e3c" }}>
                  - ₹{((value / 100) * 15).toFixed(1)}
                </p>
              </div>
              <div className="right__ChargesItem">
                <p>Delivery Charges</p>
                <p style={{ color: "#388e3c" }}>FREE</p>
              </div>
            </div>
            <div className="right__TotalCost">
              <h5>Total Amount</h5>
              <p>₹{(value - (value / 100) * 15).toFixed(1)}</p>
            </div>
            <div style={{ color: "#388e3c" }} className="right__TotalSaved">
              <h5>
                You will save ₹{((value / 100) * 15).toFixed(1)} on this order
              </h5>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
