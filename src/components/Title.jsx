import React from "react";
import Box from "@mui/material/Box";

export default function Title(props) {
  const h1style = {
    textAlign: "center",
    fontSize: 1.4 * props.siz,
    margin: 0,
  };
  const h2style = { ...h1style, fontSize: 1.2 * props.siz };

  const boxStyle = { height: 3.4 * props.siz };

  return (
    <div>
      <Box style={boxStyle} width="100%" />
      <h1 style={h1style}>Welcome to CLDSr - Chinese Scriptures</h1>
      <h2 style={h2style}>
        {props.book}{" "}
        {(props.book == "D&C" && "Section") ||
          (String(props.chap) !== "0" && "Chapter")}{" "}
        {String(props.chap) != "0" && props.chap}
      </h2>
    </div>
  );
}
