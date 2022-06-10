import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function HeaderOption(props) {
  const { AvatarIcon, Icon, title } = props;

  const user = useSelector(selectUser);
  // console.log(user.photoUrl);
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption_icon" />}
      {AvatarIcon && (
        <Avatar className="headerOption_icon" src={user?.photoUrl}>
          {user?.email[0]}
        </Avatar>
      )}
      <h3 className="headerOption_title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
