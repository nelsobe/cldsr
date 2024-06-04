import React, { useState } from "react";
import { vols, allbooks, volbooks } from "./allbooks";
import {
  Button,
  Dialog,
  Modal,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

export default function Jssel(props) {
  const SelectStyle = {
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

  const MenuItemStyle = {
    height: "12px",
    p: 0,
  };
  const [open, setOpen] = React.useState(false);
  const [vol, setVol] = useState("Book of Mormon");
  const [book, setBook] = useState("1 Nephi");
  const [chap, setChap] = useState(1);

  const [books, setBooks] = useState(volbooks["Book of Mormon"]);
  const [chaps, setChaps] = useState(
    Array(allbooks["1 Nephi"].end)
      .fill()
      .map((_, idx) => {
        return idx + 1;
      })
  );

  return (
    props.vis && (
      <Dialog open={props.vis}>
        <InputLabel>Select volume, book, and chapter:</InputLabel>
        <Select
          style={SelectStyle}
          value={vol}
          onChange={(event) => {
            const newvol = event.target.value;
            const newbooks = volbooks[newvol];
            console.log(newbooks);
            const newbook = newbooks[0];
            console.log(newbook);
            const newchap = allbooks[newbook].start;
            console.log(event.target);
            setVol(newvol);
            setBooks(newbooks);
            setBook(newbook);
            setChap(newchap);
          }}
        >
          {vols.map((v) => {
            return (
              <MenuItem key={v} value={v}>
                {v}
              </MenuItem>
            );
          })}
        </Select>
        <Select
          style={SelectStyle}
          value={book}
          onChange={(event) => {
            const newBook = event.target.value;
            setBook(newBook);
            setChap(allbooks[newBook].start);
            const tmpChaps = Array(allbooks[newBook].end)
              .fill()
              .map((_, idx) => {
                return idx + 1;
              });
            console.log(tmpChaps);
            setChaps(tmpChaps);
          }}
        >
          {books.map((v, idx) => {
            return (
              <MenuItem key={idx} value={v}>
                {v}
              </MenuItem>
            );
          })}
        </Select>
        {chaps.length > 0 && (
          <Select
            style={SelectStyle}
            value={chap}
            onChange={(event) => {
              setChap(event.target.value);
            }}
          >
            {chaps.map((v) => {
              return (
                <MenuItem key={String(v)} value={String(v)}>
                  {String(v)}
                </MenuItem>
              );
            })}
          </Select>
        )}
        <Button
          onClick={(event) => {
            event.preventDefault();
            props.jsselClose(vol, book, chap);
          }}
        >
          Submit
        </Button>
      </Dialog>
    )
  );
}
