import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="footer">
      <div className="footer-container">
        <img
          onClick={() => navigate("/")}
          src="	https://m.media-amazon.com/images/G/01/digital/video/acquisition/web_footer_logo._CB462908456_.png"
          alt=""
        />
        <h5>
          <span>Terms and Privacy NoticeSend us feedbackHelp</span> © 1996-2022,
          Amazon.com, Inc. or its affiliates
        </h5>
      </div>
    </div>
  );
};

export default Footer;
