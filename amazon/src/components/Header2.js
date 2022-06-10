import React from "react";
import "./Header2.css";
import MenuIcon from "@mui/icons-material/Menu";
const Header2 = ({ image }) => {
  return (
    <div className="header2">
      <div className="header2__items">
        <div className="header2__all">
          <MenuIcon />
          <p>All</p>
        </div>
        <div>
          <p>Fresh</p>
        </div>
        <div>
          <p>Amazon Pay</p>
        </div>
        <div>
          <p>Mobiles</p>
        </div>
        <div>
          <p>Computers</p>
        </div>
        <div>
          <p>Health,HouseHold & Personal Care</p>
        </div>
        <div>
          <p>Buy Again</p>
        </div>
      </div>
      <img className="header2__image" src={image} alt="" />
    </div>
  );
};

export default Header2;
