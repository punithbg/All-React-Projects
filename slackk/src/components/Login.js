import React from "react";
import styled from "styled-components";
import Slack from "../images/Slack.jpg";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";

const Login = () => {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <LoginContainer>
      <LoginInerContainer>
        <img src={Slack} alt=" " />
        <h1>Sign in to your account</h1>
        <Button onClick={signIn}>Sign in with Google</Button>
      </LoginInerContainer>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoginInerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.2);
  > img {
    object-fit: contain;
    height: 100px;
  }
  > Button {
    margin-top: 40px;
    text-transform: inherit;
    background-color: #0a8d48;
    color: white;
  }
  > Button:hover {
    background-color: #0a8d48;
    color: white;
    opacity: 0.9;
  }
`;
