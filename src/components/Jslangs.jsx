import React, { useState, useEffect } from "react";
import { Button, Dialog, InputLabel, MenuItem, Select } from "@mui/material";

export default function Jslangs(props) {
  const LangsStyle = {
    //position: "absolute",
    //top: "50%",
    // left: "50%",
    // transform: "translate(-50%, -50%)",
    width: "auto",
    height: 2 * props.siz + "px",
    backgroundColor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 0,
  };

  const [open, setOpen] = React.useState(false);

  const [lang1, setLang1] = useState("eng");
  const [lang2, setLang2] = useState("simp");
  const [lang3, setLang3] = useState("None");

  // console.log("Langs: ", props.langs);

  return (
    props.vis && (
      <Dialog open={props.vis}>
        <InputLabel>Select languages:</InputLabel>
        <Select
          style={LangsStyle}
          value={lang1}
          onChange={(event) => {
            setLang1(event.target.value);
          }}
        >
          {[
            ["English", "eng"],
            ["Simplified", "simp"],
            ["Traditional", "trad"],
            ["PinYin", "py"],
          ].map((lang) => {
            return (
              <MenuItem key={lang[1]} value={lang[1]}>
                {lang[0]}
              </MenuItem>
            );
          })}
        </Select>
        <Select
          style={LangsStyle}
          value={lang2}
          onChange={(event) => {
            setLang2(event.target.value);
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
              <MenuItem key={lang[1]} value={lang[1]}>
                {lang[0]}
              </MenuItem>
            );
          })}
        </Select>
        <Select
          style={LangsStyle}
          value={lang3}
          onChange={(event) => {
            setLang3(event.target.value);
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
              <MenuItem key={lang[1]} value={lang[1]}>
                {lang[0]}
              </MenuItem>
            );
          })}
        </Select>
        <Button
          onClick={(event) => {
            event.preventDefault();
            props.jslangsClose(lang1, lang2, lang3);
          }}
        >
          Submit
        </Button>
      </Dialog>
    )
  );
}
