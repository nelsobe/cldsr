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
      <h1 style={h1style}>Welcome to CLDSR - Chinese Scriptures</h1>
      <h2 style={h2style}>
        {props.loc.book}{" "}
        {(props.loc.book == "D&C" && "Section") ||
          (String(props.loc.chap) !== "0" && "Chapter")}{" "}
        {String(props.loc.chap) != "0" && props.loc.chap}
      </h2>
    </div>
  );
}
