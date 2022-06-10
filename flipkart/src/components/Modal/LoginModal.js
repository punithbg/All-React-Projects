import React, { useState } from "react";
import "./LoginModal.css";
import LoginLogo from "../../images/Modal/login.png";
import { MaterialInput, MaterialButton } from "../MaterialUI/index";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../StateProvider";

const LoginModal = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [{ searchValue, user }, dispatch] = useStateValue();
  // console.log({ user });

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {})
      .catch((e) => alert(e.message));
  };
  return (
    <>
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="box">
              <div className="box__left">
                <h3 className="box__leftTitle">Login</h3>
                <h5 className="box__leftSubTitle">
                  Get access to your Orders,Whislist and Recommendations
                </h5>
                <img className="box__leftImage" src={LoginLogo} alt="" />
              </div>
              <div className="box__right">
                <div className="box__rightTop">
                  <MaterialInput
                    type="text"
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <MaterialInput
                    type="password"
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="box__rightMiddle">
                  <p
                    style={{
                      marginTop: "20px",
                      fontSize: "12px",
                      color: "gray",
                    }}
                  >
                    By continuing, you agree to Flipkart's
                    <span style={{ color: "#2874f0" }}>Terms of Use</span> and
                    <span style={{ color: "#2874f0" }}>Privacy Policy.</span>
                  </p>
                  <div
                    onClick={login}
                    type="button close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <MaterialButton
                      title="Login"
                      bgColor="#fb641b"
                      textColor="#ffffff"
                      style={{
                        margin: "40px 0 20px 0",
                      }}
                    />
                  </div>
                  <p
                    style={{
                      textAlign: "center",
                      marginBottom: "-20px",
                    }}
                  >
                    OR
                  </p>
                  <div
                    // className="newToFlipkart"
                    data-bs-target="#exampleModalToggle3"
                    data-bs-toggle="modal"
                  >
                    <MaterialButton
                      title="Login with Mobile Number"
                      bgColor="#ffffff"
                      textColor="#2874f0"
                      style={{
                        margin: "20px 0",
                      }}
                    />
                  </div>
                  <p
                    className="newToFlipkart"
                    data-bs-target="#exampleModalToggle2"
                    data-bs-toggle="modal"
                  >
                    New to Flipkart? Create an account
                  </p>
                </div>
              </div>
              <button
                type="button "
                className="btn-close close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
