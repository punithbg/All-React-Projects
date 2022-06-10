import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import linkedInBackground from "./images/linkedInBackground.jpg";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);
  console.log(user.email);
  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <p># {topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src={linkedInBackground} alt="linkedInBackground" />
        <Avatar src={user.photoUrl} className="sidebar_avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">2577</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="sidebar_statNumber">2475</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("react")}
        {recentItem("programming")}
        {recentItem("frontend")}
        {recentItem("cool")}
      </div>
    </div>
  );
}

export default Sidebar;
