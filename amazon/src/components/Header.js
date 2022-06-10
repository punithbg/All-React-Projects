import React, { useContext } from "react";
import { Link } from "react-router-dom";
import amazonLogo from "../images/amazon.png";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

const Header = () => {
  const logout = () => {
    if (user) auth.signOut();
  };
  const [state, dispatch] = useStateValue();
  const { basket, user } = state;
  // console.log(basket);
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={amazonLogo} alt="amazon logo" />
      </Link>
      <div className="header__address">
        <LocationOnOutlinedIcon />
        <p>Deliver to {user?.email}</p>
      </div>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div onClick={logout} className="header__option">
            <span className="header__optionLineOne">Hello {user?.email}</span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Return</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
      </div>
      <Link to="./checkout" className="header__link">
        <div className="header__optionBasket">
          <ShoppingCartOutlinedIcon />
          <span className="header__optionLineTwo header__basketCount">
            {basket ? basket.length : 0}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Header;
