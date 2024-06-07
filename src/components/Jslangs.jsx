import React, { useState, useEffect } from "react";
import { Button, Dialog, InputLabel, MenuItem, Select } from "@mui/material";

export default function Jslangs(props) {
  const LangsStyle = {
    background: "#ffcfc8",
    textAlign: "left",
    position: "fixed",
    top: 3.0 * props.siz,
    left: 0,
    padding: 20,
    fontSize: 1.0 * props.siz,
  };

  const [open, setOpen] = React.useState(false);

  const [lang0, setlang0] = useState("eng");
  const [lang1, setlang1] = useState("trad");
  const [lang2, setlang2] = useState("None");

  const SelectStyle = {
    width: "auto",
    height: 2 * props.siz + "px",
    backgroundColor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 0,
    // borderStyle: "none",
    borderWidth: 1,
    // position: "fixed",
    // top: 0,
    // left: 0,
    // padding: 20,
  };

  const tdStyle = {
    fontSize: 1.2 * props.siz,
  };

  return (
    props.vis && (
      <div style={LangsStyle}>
        <p style={tdStyle}>Select languages:</p>
        <div>
          <select
            style={SelectStyle}
            value={lang0}
            onChange={(event) => {
              setlang0(event.target.value);
            }}
          >
            {[
              ["English", "eng"],
              ["Simplified", "simp"],
              ["Traditional", "trad"],
              ["PinYin", "py"],
            ].map((lang) => {
              return (
                <option key={lang[1]} value={lang[1]}>
                  {lang[0]}
                </option>
              );
            })}
          </select>{" "}
        </div>
        <div>
          <select
            style={SelectStyle}
            value={lang1}
            onChange={(event) => {
              setlang1(event.target.value);
            }}
          >
            {[
              ["English", "eng"],
              ["Simplified", "simp"],
              ["Traditional", "trad"],
              ["PinYin", "py"],
              ["None", "None"],
            ].map((lang) => {
              return (
                <option key={lang[1]} value={lang[1]}>
                  {lang[0]}
                </option>
              );
            })}
          </select>{" "}
        </div>
        <div>
          <select
            style={SelectStyle}
            value={lang2}
            onChange={(event) => {
              setlang2(event.target.value);
            }}
          >
            {[
              ["English", "eng"],
              ["Simplified", "simp"],
              ["Traditional", "trad"],
              ["PinYin", "py"],
              ["None", "None"],
            ].map((lang) => {
              return (
                <option key={lang[1]} value={lang[1]}>
                  {lang[0]}
                </option>
              );
            })}
          </select>
        </div>
        <button
          style={SelectStyle}
          onClick={(event) => {
            event.preventDefault();
            props.jslangsClose(lang0, lang1, lang2);
          }}
        >
          OK
        </button>
      </div>
    )
  );
}
