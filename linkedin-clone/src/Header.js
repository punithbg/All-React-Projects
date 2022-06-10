import React, { useEffect, useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LinkedInIcon from "./images/linkedin.png";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AvatarPic from "./images/Avatar-icon.jpg";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function Header() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        setIsUserLoggedIn(true);
      }
    });
  }, []);

  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
    setIsUserLoggedIn(false);
  };
  return (
    <div className="header">
      <div className="header_left">
        <img src={LinkedInIcon} alt="linkedin logo" />
        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder="search" />
        </div>
      </div>

      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="BusinessCenter" />
        <HeaderOption Icon={ChatIcon} title="Chat" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        {isUserLoggedIn && (
          <HeaderOption AvatarIcon="true" title={user.displayName} />
        )}
        {isUserLoggedIn && (
          <button className="header_logout" onClick={logoutOfApp}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
