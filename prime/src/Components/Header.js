import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

import LanguageIcon from "@mui/icons-material/Language";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { dropdown } from "bootstrap";
import { useStateValue } from "../StateProvider";
import { Dropdown, Toggle, Menu, Item, Divider } from "bootstrap";
import { auth } from "../firebase";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  const navigate = useNavigate();
  const [{ searchValue, user }, dispatch] = useStateValue();

  const [inputFull, setInputFull] = useState(false);
  const [insideWidth, setInsideWidth] = useState(window.innerWidth);

  useEffect(() => {
    setInsideWidth(window.innerWidth);
    console.log({ insideWidth });
  }, [window.innerWidth]);

  const setInput = (e) => {
    dispatch({
      type: "SET_SEARCH_VALUE",
      value: e.target.value,
    });
  };

  console.log({ inputFull });

  console.log(searchValue);
  return (
    <div className="header">
      <div
        className="header-left1"
        style={
          insideWidth <= 600 && inputFull
            ? { display: "none" }
            : { display: "block" }
        }
      >
        <img
          onClick={() => navigate("/")}
          className="logo"
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDczIiBoZWlnaHQ9IjE0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMTQuODMgOTIuMzY2Yy4xNTgtMS4wMjMuOTY3LTEuODAyIDIuMDkxLTEuODAyLjUyNCAwIDEuMTE4LjE3MSAxLjc0NC41NjIgMzQuNzMxIDIxLjc4MSA3Ny42OTcgMzQuOTAzIDEyMi4wNjcgMzQuOTAzIDI5Ljk0MyAwIDYyLjg0MS02LjcwMSA5My4xMTctMjAuNTQ0IDQuNTYzLTIuMDc5IDguMzg2IDMuMjM5IDMuOTIyIDYuODExLTI3LjAwOCAyMS40NzItNjYuMTYzIDMyLjg5Ny05OS44NzkgMzIuODk3LTQ3LjI0OCAwLTg5Ljc5NS0xOC44My0xMjIuMDA0LTUwLjE2OC0uNjMyLS42MTQtLjk2NC0xLjI4Ny0xLjA1OC0xLjkxOXYtLjc0WiIvPjxwYXRoIGQ9Ik0zMTUuNDkzIDk1Ljc1MWM3Ljk4Ni02LjAzIDE4LjYwNC04LjA0MiAyNy40MDgtOC4wNDIgOC4yMzUgMCAxNC44ODYgMS43NjMgMTYuMzAyIDMuNjQ4IDIuOTc2IDMuOTMzLS43NjYgMzEuMjAxLTE1LjI2MSA0NC4yMDYtMi4yMTggMi4wMTQtNC4zMjguOTI5LTMuMzUtMS42OTkgMy4yNTktOC43MjIgMTAuNTUzLTI4LjMwNiA3LjA5Ni0zMy4wNTQtMy40NTItNC43NTktMjIuODM1LTIuMjY4LTMxLjUyNy0xLjE0NS0xLjM0Ny4xNzEtMi4xMTMtLjM4LTIuMjI1LTEuMjAxdi0uNDQzYy4wOTEtLjcxMi41OTYtMS41NDMgMS41NTctMi4yN1pNNDUwLjM1OSAxOS44NjNjNy4xIDAgMTIuNjQ4IDIuMTUyIDE2LjY0NSA2LjQ1NkM0NzEuMDAxIDMwLjYyMiA0NzMgMzYuNTk2IDQ3MyA0NC4yNDFjMCA3LjcwNC0xLjk5OSAxMy43MDgtNS45OTYgMTguMDEyLTMuOTk3IDQuMzA0LTkuNTQ1IDYuNDU2LTE2LjY0NSA2LjQ1Ni03LjA5OSAwLTEyLjY0OC0yLjE1Mi0xNi42NDUtNi40NTZzLTUuOTk2LTEwLjMwOC01Ljk5Ni0xOC4wMTJjMC03LjY0NSAxLjk5OS0xMy42MTkgNS45OTYtMTcuOTIyIDMuOTk3LTQuMzA0IDkuNTQ2LTYuNDU2IDE2LjY0NS02LjQ1NlptMCAxMC4xMTJjLTYuMjY0IDAtOS4zOTYgNC43NTUtOS4zOTYgMTQuMjY2IDAgOS41NyAzLjEzMiAxNC4zNTUgOS4zOTYgMTQuMzU1IDYuMjY0IDAgOS4zOTctNC43ODUgOS4zOTctMTQuMzU1IDAtOS41MTEtMy4xMzMtMTQuMjY2LTkuMzk3LTE0LjI2NlpNNDAzLjE5MSAyMC4yOWM1LjQzMiAwIDkuNjg0IDEuMzI4IDEyLjc0NyAzLjk4NCAzLjA2NCAyLjY1NyA0LjU5OSA2LjIwMSA0LjU5OSAxMC42MjYgMCA0LjQzMi0xLjY1MyA3Ljc4Mi00Ljk0NSAxMC4wNTEtMy4zIDIuMjc1LTguMTY0IDMuNDEtMTQuNTg2IDMuNDEtMy4zMjkgMC02LjIyMy0uMzIxLTguNjczLS45Ny4zNDcgMy45NTQgMS41MzUgNi43OSAzLjU1IDguNDk5IDIuMDE1IDEuNzA4IDUuMDY0IDIuNTY2IDkuMTUzIDIuNTY2IDEuNjMxIDAgMy4yMjYtLjEwNCA0Ljc3Ni0uMzEzIDEuNTQzLS4yMDIgMy42OTEtLjY2NCA2LjQzNy0xLjM2Ni4xNjktLjA1OS4zNDYtLjEwNC41MjQtLjEzNC4xNzctLjAzLjMxNy0uMDQ1LjQzNS0uMDQ1Ljk5NyAwIDEuNDkxLjY3OSAxLjQ5MSAyLjAzN3Y0LjA3NWMwIC45NC0uMTMzIDEuNjA0LS4zOTEgMS45OTItLjI2Ni4zOC0uNzc1LjcyNC0xLjUzNSAxLjAxNS00LjI2NyAxLjY0OS04Ljc5MiAyLjQ3Ny0xMy41ODIgMi40NzctNy4yNDEgMC0xMi44LTItMTYuNjgyLTYuMDIyLTMuODgzLTQuMDE0LTUuODI0LTkuNzY3LTUuODI0LTE3LjI2NiAwLTcuNjcxIDEuOTg1LTEzLjY5MiA1Ljk1Ni0xOC4wNTggMy45NzItNC4zNzIgOS40ODYtNi41NTggMTYuNTUtNi41NThabS0uOTYgOC45NDZjLTUuNjEgMC04Ljg1IDMuNDg1LTkuNzIxIDEwLjQ0NyAyLjMzMi40NzcgNC45MzEuNzA5IDcuNzk1LjcwOSAyLjk3NCAwIDUuMTM3LS40NTYgNi40OC0xLjM3MyAxLjM0NC0uOTExIDIuMDE2LTIuMzE0IDIuMDE2LTQuMjAxIDAtMy43MjQtMi4xOTMtNS41ODItNi41Ny01LjU4MlpNMzY5LjA2OS41NDJjLjgzNSAwIDEuNDE3LjE2NSAxLjc0NS40OTYuMzI4LjMzMS40OTIuOTE4LjQ5MiAxLjc2MXY2Mi4yOThjMCAuNzgzLS4xNjQgMS4zNTQtLjQ5MiAxLjcxNi0uMzI4LjM2MS0uOTEuNTQxLTEuNzQ1LjU0MWgtNy4xNTljLS43MTYgMC0xLjI2OC0uMTUtMS42NTYtLjQ1MS0uMzg3LS4zMDEtLjY3MS0uODEzLS44NS0xLjUzNWwtLjUzNy0yLjA3N2MtMy42OTkgMy4zNzEtOC4wODMgNS4wNTYtMTMuMTU1IDUuMDU2LTMuODc3IDAtNy4yNDgtMS4wMDgtMTAuMTEyLTMuMDI0LTIuODY0LTIuMDE3LTUuMDU2LTQuODE1LTYuNTc3LTguMzk3LTEuNTIyLTMuNTgxLTIuMjgyLTcuNzE5LTIuMjgyLTEyLjQxNCAwLTcuNDY0IDEuNzU5LTEzLjQzOCA1LjI3OS0xNy45MjIgMy41Mi00LjQ4NSA4LjE3NC02LjcyNyAxMy45NjEtNi43MjcgNC43MTMgMCA4LjggMS4zNTQgMTIuMjYgNC4wNjNWMi43OTljMC0uODQzLjE3OS0xLjQzLjUzNy0xLjc2MS4zNTgtLjMzMS45MjUtLjQ5NiAxLjctLjQ5Nmg4LjU5MVptLTE5LjY4OCAyOS4yNTNjLTMuMTYyIDAtNS41MTggMS4xODktNy4wNjkgMy41NjYtMS41NTEgMi4zNzgtMi4zMjcgNS45NzQtMi4zMjcgMTAuNzg5IDAgNC44MTYuODIgOC4zOTcgMi40NjEgMTAuNzQ1IDEuNjQxIDIuMzQ3IDQuMTYxIDMuNTIxIDcuNTYyIDMuNTIxIDIuODY0IDAgNS42MDgtLjg0MyA4LjIzMy0yLjUyOFYzMi4wNTJjLTIuNTY1LTEuNTA1LTUuNTE5LTIuMjU3LTguODYtMi4yNTdaTTMwNy4zMjMgNjcuMzU0Yy0uNzc2IDAtMS4zNDMtLjE4LTEuNzAxLS41NDEtLjM1OC0uMzYyLS41MzctLjkzMy0uNTM3LTEuNzE2VjIzLjQ3NWMwLS44NDMuMTc5LTEuNDMuNTM3LTEuNzYxLjM1OC0uMzMxLjkyNS0uNDk3IDEuNzAxLS40OTdoOC41OTFjLjgzNSAwIDEuNDE3LjE2NiAxLjc0NS40OTcuMzI4LjMzMS40OTIuOTE4LjQ5MiAxLjc2MXY0MS42MjJjMCAuNzgzLS4xNjQgMS4zNTQtLjQ5MiAxLjcxNi0uMzI4LjM2MS0uOTEuNTQxLTEuNzQ1LjU0MWgtOC41OTFaTTMxMS42MTggMTQuMDg1Yy0yLjI2NyAwLTQuMDg3LS42MzItNS40NTktMS44OTYtMS4zNzItMS4yNjQtMi4wNTgtMi45OC0yLjA1OC01LjE0NyAwLTIuMTY2LjY4Ni0zLjg4MiAyLjA1OC01LjE0NkMzMDcuNTMxLjYzMiAzMDkuMzUxIDAgMzExLjYxOCAwYzIuMjY3IDAgNC4wODcuNjMyIDUuNDU5IDEuODk2IDEuMzcyIDEuMjY0IDIuMDU4IDIuOTggMi4wNTggNS4xNDYgMCAyLjE2Ny0uNjg2IDMuODgzLTIuMDU4IDUuMTQ3LTEuMzcyIDEuMjY0LTMuMTkyIDEuODk2LTUuNDU5IDEuODk2Wk0yNzEuODIyIDY3LjM1NGMtLjU5NyAwLTEuMDg5LS4wNzUtMS40NzctLjIyNWEyLjM0IDIuMzQgMCAwIDEtLjk4NC0uNzIzYy0uMjY5LS4zMzEtLjUyMi0uNzk3LS43NjEtMS4zOTlsLTE1LjMwMy00MC4xNzhhMzYuNzI0IDM2LjcyNCAwIDAgMS0uNDQ3LTEuMjY0IDMuMTk2IDMuMTk2IDAgMCAxLS4xNzktLjk5M2MwLS45MDMuNTk3LTEuMzU1IDEuNzktMS4zNTVoOC45NDljLjk1NCAwIDEuNjU1LjE4MSAyLjEwMy41NDIuNDQ3LjM2MS43OS45NjMgMS4wMjkgMS44MDZsOS4yMTcgMzEuOTYyIDkuMzk3LTMxLjk2MmMuMjM4LS44NDMuNTgxLTEuNDQ1IDEuMDI5LTEuODA2LjQ0Ny0uMzYxIDEuMTQ4LS41NDIgMi4xMDMtLjU0Mmg4LjY4YzEuMTk0IDAgMS43OS40NTIgMS43OSAxLjM1NSAwIC4zMDEtLjA1OS42MzItLjE3OS45OTMtLjExOS4zNjEtLjI2OC43ODItLjQ0NyAxLjI2NGwtMTUuMzAzIDQwLjE3OGMtLjIzOS42MDItLjQ5MiAxLjA2OC0uNzYxIDEuMzk5YTIuNDA2IDIuNDA2IDAgMCAxLS45MzkuNzIzYy0uMzU4LjE1LS44NjUuMjI1LTEuNTIyLjIyNWgtNy43ODVaTTIxNC43MTcgMTkuODY5YzUuNTc0IDAgOS45MzYgMS4zNTUgMTMuMDc5IDQuMDY1IDMuMTQyIDIuNzEgNC43MTggNi4zMjYgNC43MTggMTAuODQgMCA0LjUyMS0xLjY5NyA3LjkzOS01LjA3NCAxMC4yNTMtMy4zODYgMi4zMjItOC4zNzYgMy40NzktMTQuOTY1IDMuNDc5LTMuNDE1IDAtNi4zODQtLjMyOC04Ljg5OC0uOTkuMzU2IDQuMDM1IDEuNTc1IDYuOTI3IDMuNjQzIDguNjcgMi4wNjcgMS43NDQgNS4xOTUgMi42MTkgOS4zOSAyLjYxOSAxLjY3NCAwIDMuMzEtLjEwNyA0LjktLjMyIDEuNTgzLS4yMDUgMy43ODYtLjY3NyA2LjYwNC0xLjM5M2EzLjMzIDMuMzMgMCAwIDEgLjUzNy0uMTM3Yy4xODItLjAzLjMyNi0uMDQ2LjQ0Ny0uMDQ2IDEuMDIyIDAgMS41My42OTMgMS41MyAyLjA3OXY0LjE1NmMwIC45NTktLjEzNyAxLjYzNi0uNDAyIDIuMDMyLS4yNzIuMzg4LS43OTUuNzM5LTEuNTc1IDEuMDM1LTQuMzc3IDEuNjgzLTkuMDE5IDIuNTI4LTEzLjkzNCAyLjUyOC03LjQyOSAwLTEzLjEzMi0yLjA0LTE3LjExNS02LjE0My0zLjk4NC00LjA5Ni01Ljk3NS05Ljk2NC01Ljk3NS0xNy42MTUgMC03LjgyNSAyLjAzNy0xMy45NjggNi4xMTEtMTguNDIxIDQuMDc0LTQuNDYxIDkuNzMyLTYuNjkxIDE2Ljk3OS02LjY5MVptLS45ODUgOS4xMjdjLTUuNzU1IDAtOS4wOCAzLjU1NS05Ljk3MyAxMC42NTcgMi4zOTMuNDg3IDUuMDU5LjcyMyA3Ljk5Ny43MjMgMy4wNTIgMCA1LjI3MS0uNDY0IDYuNjQ5LTEuNDAxIDEuMzc4LS45MjggMi4wNjctMi4zNTkgMi4wNjctNC4yODUgMC0zLjc5OS0yLjI0OS01LjY5NC02Ljc0LTUuNjk0Wk0xMjYuMDIzIDI1LjY1NGMzLjE3My0yLjEwOSA2LjAzNi0zLjYwMSA4LjU4LTQuNDY5YTI0LjA2MyAyNC4wNjMgMCAwIDEgNy44NjktMS4zMTdjNS4zOTIgMCA5LjE5MyAxLjkzNCAxMS40MTIgNS43ODYgMy4wNTItMi4wNDggNS45My0zLjUyNSA4LjYyNi00LjQyM2EyNi4wNjQgMjYuMDY0IDAgMCAxIDguMzUzLTEuMzYzYzQuMTk1IDAgNy40NDQgMS4xOCA5Ljc1NCAzLjUyNSAyLjMwMiAyLjM1MiAzLjQ2MSA1LjYzMyAzLjQ2MSA5Ljg1VjY1LjEzYzAgLjc4NC0uMTY3IDEuMzU1LS40OTIgMS43MTMtLjMzNC4zNjUtLjkxNy41NC0xLjc1Ny41NGgtOC42MjZjLS43OCAwLTEuMzQ4LS4xNzUtMS43MDQtLjU0LS4zNjMtLjM1OC0uNTQ1LS45MjktLjU0NS0xLjcxM1YzNi4xMzVjMC00LjA5NS0xLjgyNS02LjE0My01LjQ4My02LjE0My0zLjIzNCAwLTYuNDk4Ljc3Ny05Ljc5MiAyLjM0NVY2NS4xM2MwIC43ODQtLjE2NyAxLjM1NS0uNDkyIDEuNzEzLS4zMzMuMzY1LS45MTcuNTQtMS43NTcuNTRoLTguNjI2Yy0uNzggMC0xLjM0OC0uMTc1LTEuNzA0LS41NC0uMzYzLS4zNTgtLjUzNy0uOTI5LS41MzctMS43MTNWMzYuMTM1YzAtNC4wOTUtMS44MzMtNi4xNDMtNS40ODMtNi4xNDMtMy4zNTUgMC02LjY0OS44MDctOS44OTEgMi40MzZWNjUuMTNjMCAuNzg0LS4xNjYgMS4zNTUtLjQ5MiAxLjcxMy0uMzMzLjM2NS0uOTE2LjU0LTEuNzQ5LjU0aC04LjYzNGMtLjc3MiAwLTEuMzQ4LS4xNzUtMS43MDMtLjU0LS4zNTYtLjM1OC0uNTM4LS45MjktLjUzOC0xLjcxM1YyMy40ODRjMC0uODQ1LjE4Mi0xLjQzMS41MzgtMS43NTguMzU1LS4zMzUuOTMxLS40OTUgMS43MDMtLjQ5NWg2LjQ3NWMxLjM3OSAwIDIuMjEyLjY2MiAyLjUxNSAxLjk4N2wuNzE5IDIuNDM2Wk04OS44MjUgMjMuNDg2YzAtLjg0NS4xODItMS40MzEuNTM4LTEuNzU5LjM2NC0uMzM1LjkzMi0uNTAyIDEuNzEyLS41MDJoOC42MjVjLjg0MSAwIDEuNDI0LjE2NyAxLjc1LjUwMi4zMzMuMzI4LjUuOTE0LjUgMS43NTl2NDEuNjM4YzAgLjc4NC0uMTY3IDEuMzYyLS41IDEuNzItLjMyNi4zNTgtLjkwOS41NDEtMS43NS41NDFoLTguNjI1Yy0uNzggMC0xLjM0OC0uMTgzLTEuNzEyLS41NDEtLjM1Ni0uMzU4LS41MzgtLjkzNi0uNTM4LTEuNzJWMjMuNDg2Wk05Ni4zODQgMTQuMDkyYy0yLjI4IDAtNC4xMDUtLjYzMi01LjQ4My0xLjg5NS0xLjM3OC0xLjI3MS0yLjA2LTIuOTg0LTIuMDYtNS4xNTQgMC0yLjE2OS42ODItMy44ODIgMi4wNi01LjE0NUM5Mi4yNzkuNjM0IDk0LjEwNC4wMDIgOTYuMzg0LjAwMmMyLjI3OSAwIDQuMTA0LjYzMiA1LjQ4MyAxLjg5NiAxLjM3OCAxLjI2MyAyLjA2NyAyLjk3NiAyLjA2NyA1LjE0NSAwIDIuMTctLjY4OSAzLjg4My0yLjA2NyA1LjE1NC0xLjM3OSAxLjI2My0zLjIwNCAxLjg5NS01LjQ4MyAxLjg5NVpNNjYuMzE2IDI4LjA5MmMyLjM5My0yLjY0OSA0LjY1Ny00LjUyOSA2Ljc4NS01LjY0OGExNC40NDEgMTQuNDQxIDAgMCAxIDYuNzg2LTEuNjY3aDEuMjU3Yy44NCAwIDEuNDM5LjE2OCAxLjc5NS40OTUuMzYzLjMzNS41MzcuOTIxLjUzNyAxLjc1OHY3LjU5YzAgLjc4NC0uMTU5IDEuMzU1LS40OTIgMS43Mi0uMzI2LjM1OC0uOTA5LjU0LTEuNzQ5LjU0LS40MjQgMC0uOTYyLS4wMy0xLjYyMS0uMDkxYTI4LjI2NiAyOC4yNjYgMCAwIDAtMi41MTQtLjA5MWMtMS4zNzkgMC0zLjA1Mi4xOTgtNS4wMzYuNTg2LTEuOTc3LjM5Ni0zLjY1MS44OS01LjAyOSAxLjQ5MnYzMC4zNDljMCAuNzg0LS4xNjYgMS4zNTUtLjQ5MiAxLjcyMS0uMzMzLjM1Ny0uOTE2LjU0LTEuNzU3LjU0SDU2LjE2Yy0uNzggMC0xLjM0OC0uMTgzLTEuNzA0LS41NC0uMzYzLS4zNjYtLjU0NS0uOTM3LS41NDUtMS43MjFWMjMuNDg3YzAtLjg0NS4xODItMS40MzEuNTQ1LTEuNzY2LjM1Ni0uMzI3LjkyNC0uNDk1IDEuNzA0LS40OTVoNi40NjhjMS4zNzggMCAyLjIxOS42NjMgMi41MjIgMS45ODdsMS4xNjYgNC44NzlaTTI2LjI0OCAxOS44NzVjNS44MDggMCAxMC40MDUgMi4xMzkgMTMuNzkgNi40MSAzLjM4NSA0LjI3OCA1LjA4MiAxMC4wNTUgNS4wODIgMTcuMzQ4IDAgNC45OTMtLjg0MSA5LjM2Mi0yLjUxNSAxMy4wOTItMS42ODEgMy43MzgtMy45NiA2LjYxNS02LjgzMSA4LjYyNS0yLjg3NyAyLjAyNS02LjE3MiAzLjAyOS05Ljg5IDMuMDI5LTIuNDU0IDAtNC43OTQtLjM4OC03LjAwNS0xLjE3Mi0yLjIxOS0uNzg0LTQuMTA1LTEuODY1LTUuNjY1LTMuMjV2MTkuNzc2YzAgLjg0NS0uMTY2IDEuNDMxLS40OTIgMS43NjYtLjMzMy4zMjctLjkxNi40OTUtMS43NTcuNDk1SDIuMzRjLS43OCAwLTEuMzQ4LS4xNjgtMS43MDQtLjQ5NS0uMzY0LS4zMzUtLjU0Ni0uOTIxLS41NDYtMS43NjZ2LTYwLjI1YzAtLjgzNy4xODItMS40MjMuNTQ2LTEuNzU4LjM1Ni0uMzM1LjkyNC0uNDk1IDEuNzA0LS40OTVoNi40NzRjMS4zNzkgMCAyLjIxMi42NjIgMi41MTUgMS45ODdsLjYyOCAyLjM0NGMxLjc5NS0xLjc0MyAzLjk2OS0zLjEyOCA2LjUxMy00LjE1NiAyLjU0NS0xLjAyIDUuMTQyLTEuNTMgNy43NzgtMS41M1ptLTQuMjI2IDkuOTM0Yy0zLjExMyAwLTYuMDUxLjgxNC04LjgwOCAyLjQzNnYyMy43NTdjMi42MzYgMS42MjkgNS41NzQgMi40NDQgOC44MDggMi40NDQgMy4zNTUgMCA1LjgyNC0xLjE0MiA3LjQxNC0zLjQzMyAxLjU5LTIuMjkyIDIuMzg1LTUuOSAyLjM4NS0xMC44NCAwLTUuMDAxLS43OC04LjY0LTIuMzQtMTAuOTMxLTEuNTYtMi4yOTEtNC4wNDQtMy40MzMtNy40NTktMy40MzNaIi8+PC9nPjwvc3ZnPg=="
          alt="amazon prime video"
        />
      </div>
      <div
        className="header-left2"
        style={
          insideWidth <= 600 && inputFull
            ? { display: "none" }
            : { display: "block" }
        }
      >
        <div className="header-left2-container">
          <h4
            onClick={() => {
              return (
                dispatch({ type: "SET_SEARCH_VALUE", value: "" }), navigate("/")
              );
            }}
          >
            Home
          </h4>
          {/* <h4 onClick={() => navigate("/store")}>
            {user ? user.email : "Store"}
          </h4> */}
          <h4>
            <div class="dropdown">
              <div
                class="dropdown-toggle"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                CATEGORIES
              </div>

              <ul
                class="dropdown-menu dropdown-menu-dark menu-list"
                aria-labelledby="dropdownMenuButton2"
              >
                <li
                  class="dropdown-item "
                  onClick={() =>
                    dispatch({ type: "SET_CATEGORY", data: "movie" })
                  }
                >
                  MOVIES
                </li>
                <li
                  class="dropdown-item "
                  onClick={() => dispatch({ type: "SET_CATEGORY", data: "tv" })}
                >
                  TV SHOWS
                </li>
              </ul>
            </div>
          </h4>
          {/* <h4 onClick={() => navigate("/mystuff")}>My Stuff</h4> */}
        </div>
        <div className="header-left2-container-short">
          <div class="dropdown">
            <div
              class="dropdown-toggle"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Browse
            </div>

            <ul
              class="dropdown-menu dropdown-menu-dark menu-list"
              aria-labelledby="dropdownMenuButton2"
            >
              <li class="dropdown-item " onClick={() => navigate("/")}>
                Home
              </li>
              {/* <li class="dropdown-item " onClick={() => navigate("/store")}>
                Store
              </li> */}
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li class="dropdown-item dropdown-toggle">Categories </li>
              <li
                class="dropdown-item "
                onClick={() =>
                  dispatch({ type: "SET_CATEGORY", data: "movie" })
                }
              >
                MOVIES
              </li>
              <li
                class="dropdown-item "
                onClick={() => dispatch({ type: "SET_CATEGORY", data: "tv" })}
              >
                TV SHOWS
              </li>

              {/* <li class="dropdown-item " onClick={() => navigate("/mystuff")}>
                My Stuff
              </li> */}
            </ul>
          </div>
        </div>
      </div>
      <div className="header-right1">
        <div
          className="header-right1-container"
          style={insideWidth <= 600 && inputFull ? { marginLeft: "30px" } : {}}
        >
          <SearchIcon className="search-logo" fontSize="medium" />
          <input
            onFocus={() => setInputFull(true)}
            onBlur={() => setInputFull(false)}
            type="text"
            class="search-click"
            value={searchValue}
            onChange={setInput}
            placeholder="search here..."
          />
          {/* <ClearIcon /> */}
        </div>
      </div>
      <div className="header-right2">
        <div className="header-right2-container">
          <div className="header-right2-language">
            {/* <LanguageIcon /> */}
            <div class="dropdown">
              <div
                class="dropdown-toggle"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <LanguageIcon />
              </div>

              <ul
                class="dropdown-menu dropdown-menu-dark"
                aria-labelledby="dropdownMenuButton2"
              >
                <li class="dropdown-item ">ಕನ್ನಡ</li>
                <li class="dropdown-item ">हिन्दी</li>
                <li class="dropdown-item ">தமிழ்</li>
                <li class="dropdown-item ">తెలుగు</li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li class="dropdown-item ">日本語</li>
              </ul>
            </div>
          </div>
          <div className="header-right2-user">
            <div class="dropdown">
              <div
                class="dropdown-toggle"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {user ? (
                  <>
                    {/* <AccountCircleIcon /> */}
                    <span>
                      {insideWidth < 600
                        ? user.email.length <= 4
                          ? user.email
                          : user.email.substring(0, 4) + "..."
                        : user.email}
                    </span>
                  </>
                ) : (
                  <PersonOutlineIcon className="personIcon" />
                )}
              </div>

              <ul
                class="dropdown-menu dropdown-menu-dark"
                aria-labelledby="dropdownMenuButton2"
              >
                <li
                  class="dropdown-item "
                  onClick={() => {
                    user ? auth.signOut() : navigate("./login");
                  }}
                >
                  {user ? "Logout" : "Sign In"}
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li
                  style={user ? { display: "none" } : { display: "block" }}
                  class="dropdown-item "
                  onClick={() => navigate("./login")}
                >
                  Register
                </li>
                <li style={user ? { display: "none" } : { display: "block" }}>
                  <hr class="dropdown-divider" />
                </li>
                <li class="dropdown-item " onClick={() => navigate("./login")}>
                  Watch Anywhere
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li
                  class="dropdown-item "
                  onClick={
                    () =>
                      window.location.replace(
                        "https://www.primevideo.com/help/ref=atv_nb_lcl_en_US?ie=UTF8"
                      )
                    // navigate(
                    //   "www.primevideo.com/help/ref=atv_nb_lcl_en_US?ie=UTF8"
                    // )
                  }
                >
                  Help
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
