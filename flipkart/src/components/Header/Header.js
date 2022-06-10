import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import flipkartLogo from "../../images/logo/logo3.jpg";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ClearIcon from "@mui/icons-material/Clear";
import DropdownMenu from "../Menu/DropdownMenu";
import { useStateValue } from "../../StateProvider";
import CompleteModel from "../Modal/CompleteModel";
import { auth } from "../../firebase";

function makeDelay(ms) {
  var timer = 0;
  return function (callback) {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
}
const delay = makeDelay(500);

const Header = ({ customerData }) => {
  const navigate = useNavigate();
  const [name, setName] = useState(null);
  useEffect(() => {
    if (user) {
      setName(customerData?.firstName.stringValue);
    } else {
      setName(null);
    }
  }, [customerData]);
  // console.log({ name });

  const [{ searchValue, user, basket }, dispatch] = useStateValue();
  const handleCart = () => {
    if (user) {
      navigate("/checkout");
    } else {
      alert("Please login to view cart");
    }
  };
  const handleLogin = () => {
    if (user) {
      logout();
    }
  };
  const logout = () => {
    if (user) {
      auth.signOut();
      navigate("/");
      window.location.reload();
    }
  };
  // console.log(user);
  const setInput = (e) => {
    dispatch({
      type: "SET_SEARCH_VALUE",
      value: e.target.value,
    });
  };
  const setInputEmpty = () => {
    // delay(()=>)
    dispatch({
      type: "SET_SEARCH_VALUE",
      value: "",
    });
    dispatch({
      type: "SET_SEARCH_PRODUCTS",
      data: [],
    });
  };
  return (
    <div className="header">
      {user === null && <CompleteModel />}
      <div className="header__container">
        <div className="header_containerItem">
          <Link to="/" className="header__link">
            <div className="header__logo">
              <img src={flipkartLogo} className="logoimage" alt="" />
            </div>
          </Link>
        </div>
        <div className="header_containerItem">
          <div className="header__Search">
            <input
              onChange={setInput}
              value={searchValue}
              className="header__SearchInput"
              type="text"
              placeholder="Search for products, brands and more"
            />
            <div onClick={setInputEmpty} className="header__SearchIcon">
              <ClearIcon />
            </div>
          </div>
        </div>

        {/* <Link to="/login" className="header__link"> */}
        <div onClick={handleLogin} className="header_containerItem">
          <a
            className="btn btn-primary login__button"
            data-bs-toggle="modal"
            href="#exampleModalToggle"
            role="button"
          >
            {user ? "Logout" : "Login"}
          </a>
        </div>

        {/* </Link> */}
        <div className="header_containerItem">
          <Link to="/" className="header__link">
            <h3 className="header__text">
              {user
                ? name
                  ? name
                  : user.phoneNumber
                  ? user.phoneNumber
                  : user.email
                : "Become a seller"}
            </h3>
          </Link>
        </div>

        {/* <div className="header_containerItem">
          <div className="header__more">
            <h3 className="header__text">More</h3>
            <ExpandMoreIcon fontSize="small" className="header__moreIcon" />
          </div>
        </div> */}
        <div onClick={handleCart} className="header_containerItem">
          <div className="header__link">
            <div className="header__cart">
              <ShoppingCartOutlinedIcon
                fontSize="small"
                className="header__cartIcon"
              />
              <h3 className="header__text">
                {user
                  ? basket?.length === 0
                    ? "Cart"
                    : basket.length
                  : "Cart"}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

{
  /* <DropdownMenu
            menu={
              <a className="more">
                <span className="header__text">More</span>
                <ExpandMoreIcon />
              </a>
            }
            menus={[
              { label: "Notification Preference", href: "", icon: null },
              { label: "Sell on flipkart", href: "", icon: null },
              { label: "24x7 Customer Care", href: "", icon: null },
              { label: "Advertise", href: "", icon: null },
              { label: "Download App", href: "", icon: null },
            ]}
          /> */
}
