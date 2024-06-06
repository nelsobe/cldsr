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
        {/* This is the vols select.  On a change, populate possible books, set to first book, populate possible chapters, set to first chapter */}
        <Select
          id="VolSelect"
          style={SelectStyle}
          value={vol}
          onChange={(event) => {
            const newvol = event.target.value;
            const newbooks = volbooks[newvol];
            const newBook = newbooks[0];
            const newchap = allbooks[newBook].start;

            setVol(newvol);
            setBooks(newbooks);
            setBook(newBook);
            setChaps(
              Array(allbooks[newBook].end)
                .fill()
                .map((_, idx) => {
                  return idx + 1;
                })
            );
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
        {/* This is the book selector.  Don't display it if the volume is D&C.  When a change is made, populate possible chapters and set to first chapter. */}
        {vol != "Doctrine and Covenants" && (
          <Select
            id="BookSelect"
            style={SelectStyle}
            value={book}
            onChange={(event) => {
              const newBook = event.target.value;
              setBook(newBook);
              setChaps(
                Array(allbooks[newBook].end)
                  .fill()
                  .map((_, idx) => {
                    return idx + 1;
                  })
              );
              setChap(allbooks[newBook].start);
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
        {/* This is the chapters select.  Don't display for books with only a single chapter (like Enos).  */}
        {chaps.length > 0 && (
          <Select
            id="ChapterSelect"
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
        {/* The button that selects it all. */}
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
