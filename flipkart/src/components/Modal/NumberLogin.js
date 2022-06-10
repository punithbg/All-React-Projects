import React, { useState } from "react";
import firebase from "firebase/compat/app";

import "./NumberModal.css";
import LoginLogo from "../../images/Modal/login.png";
import { MaterialInput, MaterialButton } from "../MaterialUI/index";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { Login } from "@mui/icons-material";

const NumberLogin = () => {
  const navigate = useNavigate();

  const [mynumber, setnumber] = useState("");
  const [otp, setotp] = useState("");
  const [show, setshow] = useState(false);
  const [final, setfinal] = useState("");
  const [success, setSuccess] = useState(false);
  const [{ searchValue, user }, dispatch] = useStateValue();

  // Sent OTP
  const signin = () => {
    if (mynumber === "" || mynumber.length < 10) return;

    let verify = new firebase.auth.RecaptchaVerifier("recaptcha-container");
    auth
      .signInWithPhoneNumber(mynumber, verify)
      .then((result) => {
        setfinal(result);
        alert("code sent");
        setshow(true);
      })
      .catch((err) => {
        alert(err);
        window.location.reload();
      });
  };

  // Validate OTP
  const ValidateOtp = () => {
    if (otp === null || final === null) return;
    final
      .confirm(otp)
      .then((result) => {
        // success
        setSuccess(true);
        window.location.reload();
      })
      .catch((err) => {
        alert("Wrong code");
      });
  };

  return (
    <>
      <div
        className="modal fade"
        id="exampleModalToggle3"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel3"
        tabindex="-1"
      >
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="box3">
              <div className="box3__left">
                <h3 className="box3__leftTitle">Login</h3>
                <h5 className="box3__leftSubTitle">
                  Get access to your Orders,Whislist and Recommendations
                </h5>
                <img className="box3__leftImage" src={LoginLogo} alt="" />
              </div>
              <div className="box3__right">
                <div className="box3__rightTop">
                  <div style={{ display: !show ? "block" : "none" }}>
                    <MaterialInput
                      label="Phone number (with +91)"
                      value={mynumber}
                      onChange={(e) => setnumber(e.target.value)}
                    />
                    <div id="recaptcha-container"></div>
                    <div onClick={signin}>
                      <MaterialButton
                        title="Request OTP"
                        bgColor="#ffffff"
                        textColor="#2874f0"
                        style={{
                          margin: "20px 0",
                        }}
                      />
                    </div>
                  </div>
                  <div style={{ display: show ? "block" : "none" }}>
                    <MaterialInput
                      type="text"
                      label="Otp"
                      value={otp}
                      onChange={(e) => setotp(e.target.value)}
                    />
                    <br />
                    <div
                      onClick={ValidateOtp}
                      //   {Success && }
                      type={success && "button close"}
                      data-bs-dismiss={success && "modal"}
                      aria-label={success && "Close"}
                    >
                      <MaterialButton
                        title="Verify OTP"
                        bgColor="#ffffff"
                        textColor="#2874f0"
                        style={{
                          margin: "20px 0",
                        }}
                      />
                    </div>
                  </div>
                </div>

                <p
                  className="newToFlipkart"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  style={{ marginTop: "150px" }}
                >
                  Login with Email? Click here
                </p>
              </div>
              <button
                type="button close"
                className="btn-close"
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

export default NumberLogin;

// type="button close"
// data-bs-dismiss="modal"
// aria-label="Close"
