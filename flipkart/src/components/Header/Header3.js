import React from "react";
import "./Header3.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import img1 from "../../images/header3/1.jpg";
import img2 from "../../images/header3/2.webp";
import img3 from "../../images/header3/3.webp";
import img4 from "../../images/header3/4.webp";
import img5 from "../../images/header3/5.webp";
import img6 from "../../images/header3/6.webp";
import img7 from "../../images/header3/7.webp";
import img8 from "../../images/header3/8.webp";
import img9 from "../../images/header3/9.webp";
import { useStateValue } from "../../StateProvider";

const Container = ({ img, title }) => {
  const [{ searchValue }, dispatch] = useStateValue();
  const setInput = () => {
    dispatch({
      type: "SET_SEARCH_VALUE",
      value: title,
    });
  };
  return (
    <div onClick={setInput} className="header3__container">
      <img className="dp" src={img} alt="" />
      <div className="header3__containerContents">
        <p className="header3__text">{title}</p>
        <ExpandMoreIcon fontSize="small" className="header3__moreIcon" />
      </div>
    </div>
  );
};
const Header3 = () => {
  return (
    <div className="header3">
      <div className="header3__containers">
        {/* {Containerr(img1, "Top Offers")} */}
        <Container img={img1} title="Top Offers" />
        <Container img={img2} title="Grocery" />
        <Container img={img3} title="Phones" />
        <Container img={img4} title="Fashion" />
        <Container img={img5} title="Electronics" />
        <Container img={img6} title="Home" />
        <Container img={img7} title="Appliances" />
        <Container img={img8} title="Travel" />
        <Container img={img9} title="Beauty, Toys & More" />
      </div>
    </div>
  );
};

export default Header3;
