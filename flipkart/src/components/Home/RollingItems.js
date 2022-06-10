import { Button } from "bootstrap";
import React from "react";
import { useStateValue } from "../../StateProvider";
import "./RollingItems.css";

const Container = ({ img, title, subtitle, optional }) => {
  const [{ searchValue }, dispatch] = useStateValue();
  const setInput = () => {
    dispatch({
      type: "SET_SEARCH_VALUE",
      value: title,
    });
  };
  return (
    <div onClick={setInput} className="roll__containerBottomItem">
      <img className="roll__containerBottomItemImage" src={img} alt="" />
      <h4 className="roll__containerBottomItemTitle">{title}</h4>
      <h4 className="roll__containerBottomItemOffer">{subtitle}</h4>
      {optional != "" && (
        <p className="roll__containerBottomItemOptional">{optional}</p>
      )}
    </div>
  );
};

const RollingItems = ({ headerTitle, row }) => {
  return (
    <div className="roll">
      <div className="roll__container">
        <div className="roll__containerTop">
          <h2>{headerTitle}</h2>
          <div className="view1All">
            <button type="button" class="btn btn-primary ">
              View All
            </button>
          </div>
        </div>
        <div className="roll__containerBottom">
          {row?.map((item) => {
            return (
              <Container
                img={item.img}
                title={item.title}
                subtitle={item.subtitle}
                optional={item.optional}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RollingItems;
