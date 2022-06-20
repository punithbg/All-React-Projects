import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { auth, db } from "../firebase";
import firebase from "firebase/compat/app";
import { useAuthState } from "react-firebase-hooks/auth";

const ChatInput = ({ chatRef, channelName, channelId }) => {
  const [user] = useAuthState(auth);
  // const inputRef = useRef(null);

  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault(); //to prevent refreshing the screen

    if (channelId) {
      db.collection("room").doc(channelId).collection("messages").add({
        // message: inputRef.current.value,
        message: { input },
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
      });
      chatRef?.current?.scrollIntoView({ behavior: "smooth" });
    }
    setInput("");
    // inputRef.current.value = "";
  };
  return (
    <ChatInputContainer>
      <form onSubmit={sendMessage}>
        {/* ref={inputRef} */}
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={channelName ? `message #${channelName}` : "message"}
        />
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;
  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }
  > form > input {
    position: fixed;
    bottom: 30px;
    width: 70%;
    border: 1px solid gray;
    padding: 10px;
    border-radius: 10px;
    outline: none;
  }
`;
