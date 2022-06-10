import React from "react";
import "./Header2.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Container = ({ title }) => {
  return (
    <div className="header2__containerContents">
      <p className="header2__text">{title}</p>
      <ExpandMoreIcon fontSize="small" className="header2__moreIcon" />
    </div>
  );
};

const Header2 = () => {
  return (
    <div className="header2">
      <div className="header2__container">
        <Container title="Electronics" />
        <Container title="TVs & Appliances" />
        <Container title="Men" />
        <Container title="Women" />
        <Container title="Baby & Kids" />
        <Container title="Home & Furniture" />
        <Container title="Sports, Books & More" />
        <Container title="Flights" />
        <Container title="Offer Zone" />
        <Container title="Top Offers" />
      </div>
    </div>
  );
};

export default Header2;
