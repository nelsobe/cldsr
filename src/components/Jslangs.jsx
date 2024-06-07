import React, { useState, useEffect } from "react";

export default function Jslangs(props) {
  const [lang0, setlang0] = useState("eng");
  const [lang1, setlang1] = useState("trad");
  const [lang2, setlang2] = useState("None");

  const langsStyle = {
    background: "#ffcfc8",
    textAlign: "left",
    position: "fixed",
    top: 3.0 * props.siz,
    left: 0,
    padding: 20,
    fontSize: 1.0 * props.siz,
  };

  const selStyle = {
    width: "auto",
    height: 2 * props.siz + "px",
    backgroundColor: "background.paper",
    border: "1px solid #000",
  };

  const tdStyle = {
    fontSize: 1.2 * props.siz,
  };

  return (
    props.vis && (
      <div style={langsStyle}>
        <p style={tdStyle}>Select languages:</p>
        <div>
          <select
            style={selStyle}
            value={lang0}
            onChange={(event) => {
              setlang0(event.target.value);
              props.jslangsClose(event.target.value, lang1, lang2);
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
            style={selStyle}
            value={lang1}
            onChange={(event) => {
              setlang1(event.target.value);
              props.jslangsClose(lang0, event.target.value, lang2);
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
            style={selStyle}
            value={lang2}
            onChange={(event) => {
              setlang2(event.target.value);
              props.jslangsClose(lang0, lang1, event.target.value);
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
      </div>
    )
  );
}
