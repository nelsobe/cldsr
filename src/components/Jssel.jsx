import React, { useState } from "react";
import { vols, allbooks, volbooks } from "./allbooks";

export default function Jssel(props) {
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

  const jsselStyle = {
    background: "#cfffc8",
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

  function changeVol(event) {
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
  }

  function changeBook(event) {
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
  }

  function changeChap(event) {
    setChap(event.target.value);
  }

  return (
    props.vis && (
      <div style={jsselStyle}>
        <p style={tdStyle}>Choose a book to read:</p>
        {/* This is the vols select.  On a change, populate possible books, set to first book, populate possible chapters, set to first chapter */}
        <div>
          <select
            id="VolSelect"
            style={selStyle}
            value={vol}
            onChange={changeVol}
          >
            {vols.map((v) => {
              return (
                <option key={v} value={v}>
                  {v}
                </option>
              );
            })}
          </select>
        </div>
        {/* This is the book selector.  Don't display it if the volume is D&C.  When a change is made, populate possible chapters and set to first chapter. */}
        <div>
          {vol != "Doctrine and Covenants" && (
            <select
              id="BookSelect"
              style={selStyle}
              value={book}
              onChange={changeBook}
            >
              {books.map((v, idx) => {
                return (
                  <option key={idx} value={v}>
                    {v}
                  </option>
                );
              })}
            </select>
          )}
        </div>
        {/* This is the chapters select.  Don't display for books with only a single chapter (like Enos).  */}
        <div>
          {chaps.length > 0 && (
            <select
              id="ChapterSelect"
              style={selStyle}
              value={chap}
              onChange={changeChap}
            >
              {chaps.map((v) => {
                return (
                  <option key={String(v)} value={String(v)}>
                    {String(v)}
                  </option>
                );
              })}
            </select>
          )}
        </div>
        <div>
          <button
            style={selStyle}
            onClick={() => {
              props.jsselClose(vol, book, chap);
            }}
          >
            OK
          </button>
        </div>
      </div>
    )
  );
}
