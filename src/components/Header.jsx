import React from "react";
import allbooks from "./allbooks";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import ToolBar from "@mui/material/ToolBar";
import Box from "@mui/material/Box";
import da from "../assets/da.jpg";
import question from "../assets/question.jpg";
import se from "../assets/se.jpg";
import shang from "../assets/shang.jpg";
import shu from "../assets/shu.jpg";
import xia from "../assets/xia.jpg";
import xiao from "../assets/xiao.jpg";
import yan from "../assets/yan.jpg";

function Header(props) {
  const appbarStyle = {
    backgroundColor: "Black",
    height: 3 * props.siz,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const imgStyle = {
    height: 1.4 * props.siz,
  };

  const boxStyle = {
    width: 1.2 * props.siz,
  };

  const navbarStyle = {
    backgroundColor: "black",
    color: "white",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: 3 * props.siz,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    fontSize: 1.5 * props.siz,
  };

  const navbarImgStyle = {
    height: 1.2 * props.siz,
    margin: 0.1 * props.siz,
  };

  return (
    <div style={navbarStyle}>
      <img style={imgStyle} src={shu} onClick={props.jssel} />
      <img style={imgStyle} src={yan} onClick={props.jslangs} />
      <img style={imgStyle} src={se} onClick={props.jscolors} />
      <div>
        <img style={imgStyle} src={da} onClick={props.jssiz} id="jssizbig" />
        <img style={imgStyle} src={xiao} onClick={props.jssiz} />
      </div>
      <div>
        <img style={imgStyle} src={xia} onClick={props.jsnav} id="jsnavinc" />
        <img style={imgStyle} src={shang} onClick={props.jsnav} id="jsnavdec" />
      </div>
      <img style={imgStyle} src={question} onClick={props.jsabout} />
    </div>
  );
}

export default Header;
