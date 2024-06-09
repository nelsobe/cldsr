import React, { useState } from "react";

export default function About(props) {
  const [hist, setHist] = useState(1.0);

  const aboutStyle = {
    background: "#efe8ff",
    textAlign: "center",
    position: "fixed",
    top: 3.0 * props.siz,
    left: 0,
    padding: 20,
    fontSize: 1.0 * props.siz,
  };

  function updateHist(event) {
    setHist(parseFloat(event.target.value));
  }

  function aboutClose() {
    props.aboutClose(hist);
  }

  return (
    props.vis && (
      <div style={aboutStyle}>
        <p>CLDS: Multi-column Chinese Scriptures</p>
        <p> Eng, 简体, 繁體, PY</p>
        <p>Brent Nelson, May 2024</p>
        <p id="aboutChap">
          {props.book}{" "}
          {(props.book == "D&C" && "Section") ||
            (String(props.chap) !== "0" && "Chapter")}{" "}
          {String(props.chap) != "0" && props.chap}
        </p>
        <p>Text size = {props.siz}</p>
        <p>
          Screen size = <span>{screen.width}</span> x{" "}
          <span>{screen.height}</span>
        </p>
        <div>
          <label for="histp">Histogram Fraction (0.0-1.0): </label>
          <input
            type="text"
            id="histp"
            name="histp"
            value={hist}
            onChange={(event) => {
              setHist(event.target.value);
            }}
          />
        </div>
        <div>
          <button
            style={{ marginTop: 0.7 * props.siz }}
            id="jsaboutBtn"
            onClick={aboutClose}
          >
            Change
          </button>
        </div>
        <div>
          <p style={{ marginBottom: 0.3 * props.siz }}>
            Session Storage Cache has length = {window.sessionStorage.length}
            {"    "}
            (full is ~210)
          </p>
          <button
            style={{ marginTop: 0.0 * props.siz }}
            onClick={() => {
              window.sessionStorage.clear();
              aboutClose();
            }}
          >
            Clear
          </button>
        </div>
        <div>
          <button
            style={{ marginTop: 1.5 * props.siz }}
            onClick={() => {
              aboutClose();
            }}
          >
            Close
          </button>
        </div>
      </div>
    )
  );
}
