import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarOption from "./SidebarOption";

import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Sidebar = () => {
  const [channels, loading, error] = useCollection(db.collection("room"));
  const [user] = useAuthState(auth);
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Heatbreakers</h2>
          <h3>
            <FiberManualRecordIcon />
            {user.displayName}
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>

      <SidebarOption Icon={InsertCommentIcon} title=" Threads " />
      <SidebarOption Icon={InboxIcon} title=" Mentions & reactions " />
      <SidebarOption Icon={DraftsIcon} title=" Saved items " />
      <SidebarOption Icon={BookmarkBorderIcon} title=" Channel browser " />
      <SidebarOption Icon={PeopleAltIcon} title=" People & user groups " />
      <SidebarOption Icon={AppsIcon} title=" Apps " />
      <SidebarOption Icon={FileCopyIcon} title=" File browser " />
      <SidebarOption Icon={ExpandLessIcon} title=" Show less " />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title=" Channels " />
      <hr />
      <SidebarOption Icon={AddIcon} title=" Add Channel " addChannelOption />
      {channels?.docs?.map((doc) => {
        // console.log(doc.id);
        return (
          <SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
        );
      })}
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  color: white;
  background-color: #3f0f40;
  flex: 0.3;
  overflow-y: scroll;
  scroll-behavior: smooth;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  :hover {
  }

  > hr {
    margin: 10px 0;
    border: 1px solid #49274b;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 10px;
  justify-content: space-between;

  > .MuiSvgIcon-root {
    background-color: white;
    color: #49274b;
    border-radius: 50%;
    padding: 7px;
    font-size: 18px;
  }
`;
const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 5px;
  }

  > h3 {
    font-size: 12px;
    display: flex;
    align-items: center;
    font-weight: 400;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 11px;
    color: green;
    margin: 2px 2px 2px 0;
  }
`;
