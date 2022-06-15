import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import HomeAfterLogin from "./HomeAfterLogin";
import HomeBeforeLogin from "./HomeBeforeLogin";
import { useStateValue } from "../StateProvider";

const Home = () => {
  const navigate = useNavigate();
  const [{ searchValue, user }, dispatch] = useStateValue();
  console.log("user", user);
  return (
    <div className="home">
      {user ? <HomeAfterLogin /> : <HomeBeforeLogin />}
    </div>
  );
};

export default Home;
