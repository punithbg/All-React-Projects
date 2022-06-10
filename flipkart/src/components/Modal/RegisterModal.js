import React, { useState } from "react";
import "./RegisterModal.css";
import { MaterialInput, MaterialButton } from "../MaterialUI/index";

import LoginLogo from "../../images/Modal/login.png";
import { auth, db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../StateProvider";

const RegisterModal = () => {
  const [{ searchValue, user, basket }, dispatch] = useStateValue();

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");

  if (mobileNumber.length > 12) {
    setMobileNumber("");
  }

  const register = (e) => {
    e.preventDefault();
    console.log("register");
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        db.collection("data").add({
          firstName: firstName,
          lastname: lastname,
          email: email,
          mobileNumber: mobileNumber,
        });
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div
      className="modal fade"
      id="exampleModalToggle2"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel2"
      tabindex="-1"
    >
      <div className="modal-dialog ">
        <div className="modal-content">
          {/* <div className="container"> */}
          <div className="box1">
            <div className="box1__left">
              <h3 className="box1__leftTitle">Looks like you're new here!</h3>
              <h5 className="box1__leftSubTitle">
                Sign up with your email and mobile number to get started
              </h5>
              <img className="box1__leftImage" src={LoginLogo} alt="" />
            </div>
            <div className="box1__right">
              <div className="box1__rightTop">
                <MaterialInput
                  type="text"
                  label="First Name "
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <MaterialInput
                  type="text"
                  label="Last Name"
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <MaterialInput
                  type="text"
                  label="Email"
                  maxLength={10}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MaterialInput
                  type="number"
                  label="Mobile Number(with +91)"
                  len
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
                <MaterialInput
                  type="password"
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="box1__rightMiddle">
                <p className="terms">
                  By continuing, you agree to Flipkart's
                  <span style={{ color: "#2874f0" }}>Terms of Use</span> and
                  <span style={{ color: "#2874f0" }}>Privacy Policy.</span>
                </p>
                <div
                  onClick={register}
                  type="button close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <MaterialButton
                    title="Register"
                    bgColor="#fb641b"
                    textColor="#ffffff"
                    style={{
                      margin: "40px 0 20px 0",
                    }}
                  />
                </div>
                <p
                  className="newToFlipkart1"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                >
                  Existing User? Click here to Login
                </p>
              </div>
            </div>
            <button
              type="button close"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default RegisterModal;
