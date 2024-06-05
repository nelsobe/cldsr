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
import "./Header.css";

function Header(props) {
  function bookName() {
    return "abc";
    const tmp = allbooks.filter((bk) => {
      return bookName.id === props.name;
    });
    console.log(tmp);
    return tmp.book;
  }

  const imgStyle = {
    height: 1.4 * props.siz,
    margin: 0.0 * props.siz,
  };

  const appbarStyle = {
    backgroundColor: "Black",
    height: 3 * props.siz,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const boxStyle = {
    width: 1.2 * props.siz,
  };

  return (
    <AppBar style={appbarStyle}>
      <ToolBar>
        <img style={imgStyle} src={shu} onClick={props.jssel} />
        <Box style={boxStyle} />
        <img style={imgStyle} src={yan} onClick={props.jslangs} />
        <Box style={boxStyle} />
        <img style={imgStyle} src={se} onClick={props.jscolors} />
        <Box style={boxStyle} />
        <img style={imgStyle} src={da} onClick={props.jssiz} id="jssizbig" />
        <img
          style={imgStyle}
          src={xiao}
          onClick={props.jssiz}
          id="jssizsmall"
        />
        <Box style={boxStyle} />
        <img style={imgStyle} src={xia} onClick={props.jsnav} id="jsnavinc" />
        <img style={imgStyle} src={shang} onClick={props.jsnav} id="jsnavdec" />
        <Box style={boxStyle} />
        <img style={imgStyle} src={question} onClick={props.jsabout} />
      </ToolBar>
    </AppBar>
  );
}

export default Header;
