import React from "react";
import "./App.css";
import styled from "styled-components";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./components/Login";

import SlackLogo from "./images/Slack.jpg";
import Spinner from "react-spinkit";

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img src={SlackLogo} />
          <Spinner name="line-scale" color="goldenrod" fadeIn="none" />
        </AppLoadingContents>
      </AppLoading>
    );
  }
  return (
    <div className="app">
      <Router>
        {user ? (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Routes>
                <Route path="/" element={<Chat />} />
              </Routes>
            </AppBody>
          </>
        ) : (
          <Login />
        )}
      </Router>
    </div>
  );
}

export default App;

const AppLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const AppLoadingContents = styled.div`
  text-align: center;
  > img {
    object-fit: contain;
    height: 100px;
    padding-bottom: 20px;
  }
`;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
