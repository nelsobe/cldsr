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

  const SelectStyle = {
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
            const newBook = newbooks[0];
            console.log(newBook);
            const newchap = allbooks[newBook].start;
            console.log(event.target);
            setVol(newvol);
            setBooks(newbooks);
            setBook(newBook);
            setChap(newchap);
            setChaps(
              Array(allbooks[newBook].end)
                .fill()
                .map((_, idx) => {
                  return idx + 1;
                })
            );
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
        {vol != "Doctrine and Covenants" && (
          <Select
            style={SelectStyle}
            value={book}
            onChange={(event) => {
              const newBook = event.target.value;
              setBook(newBook);
              setChap(allbooks[newBook].start);
              setChaps(
                Array(allbooks[newBook].end)
                  .fill()
                  .map((_, idx) => {
                    return idx + 1;
                  })
              );
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
        )}
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
