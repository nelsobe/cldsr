import React from "react";

export default function Title(props) {
  const h1style = {
    textAlign: "center",
    fontSize: 1.7 * props.siz,
    margin: 0,
    marginTop: 6,
  };
  const h2style = { ...h1style, fontSize: 1.4 * props.siz };

  return (
    <div>
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
