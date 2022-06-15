import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomeBeforeLogin.css";
const HomeBeforeLogin = () => {
  const navigate = useNavigate();

  return (
    <div className="homebrforelogin">
      <div className="homebrforelogin-container">
        <div className="homebrforelogin-container-left">
          <div className="homebrforelogin-container-left-box">
            <h1>Welcome to Prime Video</h1>
            <h3>
              Join Prime to watch the latest movies, TV shows and award-winning
              Amazon Originals
            </h3>
            <button onClick={() => navigate("./login")}>
              Start your 30-day free trial
            </button>
            <p>With select credit or debit cards</p>
          </div>
        </div>
        <div className="homebrforelogin-container-right"></div>
        {/* <h1>Welcome To Prime Video</h1> */}
      </div>
    </div>
  );
};

export default HomeBeforeLogin;
