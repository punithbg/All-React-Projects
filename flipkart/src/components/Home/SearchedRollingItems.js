import { Button } from "bootstrap";
import React from "react";
import "./SearchedRollingItems.css";
import { useStateValue } from "../../StateProvider";
import Spinner from "react-spinkit";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Container = ({ id, img, title, subtitle, optional }) => {
  const [{ user }, dispatch] = useStateValue();

  const addToCart = () => {
    if (user) {
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: id,
          img: img,
          title: title,
          subtitle: subtitle,
          optional: optional,
        },
      });
    } else {
      alert("please login to add items to cart");
    }
  };

  return (
    <div className="roll1__containerBottomItem">
      <img className="roll1__containerBottomItemImage" src={img} alt="" />
      <h4 className="roll1__containerBottomItemTitle">{title}</h4>
      {subtitle ? (
        <h4 className="roll1__containerBottomItemOffer">
          {Array(Number(subtitle.slice(0, 1)))
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </h4>
      ) : (
        <h4 className="roll1__containerBottomItemOffer">
          {Array(3)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </h4>
      )}
      {/* {console.log(Number(subtitle.slice(0, 1)))} */}
      {/* <h4 className="roll1__containerBottomItemOffer">{subtitle}</h4> */}
      <p className="roll1__containerBottomItemOptional">
        ₹ {optional ? (Number(optional) * 50).toFixed(1) : 275}
      </p>
      <button className="roll1__containerBottomItemButton" onClick={addToCart}>
        <ShoppingCartIcon
          className="roll1__containerBottomItemButtonIcon"
          fontSize="small"
        />
        Add to Cart
      </button>
    </div>
  );
};

const SearchedRoll1ingItems = () => {
  const [{ searchValue, searchProducts, loading, user }, dispatch] =
    useStateValue();

  return (
    <>
      <div className="roll1">
        <div className="roll1__container">
          <div className="roll1__containerTop">
            <h2>{searchValue}</h2>
            <div className="view1All">
              <button type="button" className="btn btn-primary view1All">
                View All
              </button>
            </div>
          </div>
          <div className="roll1__containerBottom">
            {searchProducts?.map((item) => {
              return (
                <Container
                  id={item.product_id}
                  img={item.product_main_image_url}
                  title={item.product_title}
                  subtitle={item.evaluate_rate}
                  optional={item.app_sale_price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchedRoll1ingItems;

{
  /* 
          // app_sale_price: "9.74"
          // app_sale_price_currency: "$"
          // evaluate_rate: "4.3 out of 5 stars"
          // isBestSeller: false
          // isPrime: true
          // original_price: null
          // product_detail_url: "https://www.amazon.com/dp/B07HH1QSLB"
          // product_id: "B07HH1QSLB"
          // product_main_image_url: "https://m.media-amazon.com/images/I/51xZdrJfCzL._AC_UY218_.jpg"
          // product_title: "Amazon Basics In-Ear Wired Headphones, Earbuds with Microphone, Black"
           */
}
