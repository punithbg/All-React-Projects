import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { auth } from "../firebase";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();
    console.log("register");
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log("registered");

        navigate("/");
      })
      .catch((e) => alert(e.message));
  };

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log("signed In");
        navigate("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          // src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/avod/AV_Logo_150._CB430404026_.png"
          alt="Logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          {/* <button onClick={login}>Sign In</button> */}
          <button onClick={login}>Sign In</button>
        </form>
        <p>
          By signing-in you agree to Amazon's Conditions of Use & Sale.Please
          see our Privacy Notice,our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
        {/* <button onClick={register}>Create your Amazon Account</button> */}
        <button onClick={register}>Create your Amazon Account</button>
      </div>
    </div>
  );
};

export default Login;
