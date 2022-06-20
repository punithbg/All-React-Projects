import React from "react";
import styled from "styled-components";

const Message = ({ message, timestamp, user, userImage }) => {
  console.log(message);

  return (
    <MessageContainer>
      <img src={userImage} />
      <MessageInfo>
        <h4>
          {user} <span>{new Date(timestamp?.toDate()).toString()}</span>
        </h4>
        <p>{message.input}</p>
      </MessageInfo>
    </MessageContainer>
  );
};

export default Message;

const MessageContainer = styled.div`
  display: flex;
  margin: 10px;
  align-items: center;

  > img {
    height: 50px;
    border-radius: 50%;
    margin-right: 20px;
  }
`;
const MessageInfo = styled.div`
  > h4 > span {
    color: gray;
    font-weight: 300;
    font-size: 10px;
  }
`;
