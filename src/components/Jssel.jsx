import React, { useState } from "react";
import { vols, allbooks, volbooks } from "./allbooks";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

export default function Jssel(props) {
  const [vol, setVol] = useState("bom");
  const [book, setBook] = useState("1 Nephi");
  const [chap, setChap] = useState(1);

  const [books, setBooks] = useState(volbooks.bom);
  const [chaps, setChaps] = useState(
    Array(allbooks["1 Nephi"].end)
      .fill()
      .map((_, idx) => {
        return idx + 1;
      })
  );

  function handleCancel(event) {
    props.jsseldone();
  }

  function handleDone(event) {
    console.log(event.target);
  }

  function handleVolChange(event) {
    const newvol = event.target.value;
    const newbooks = volbooks[newvol];
    const newbook = newbooks[0];
    const newchap = allbooks[newbook].start;
    setVol(newvol);
    setBooks(newbooks);
    setBook(newbook);
    setChap(newchap);
  }

  function populateChaps(event) {}

  function handleBookChange(event) {
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
  }

  function handleChapChange(event) {
    console.log(event.target);
    setChap(event.target.value);
    console.log("Selected combo: ", vol, book, event.target.value);
  }

  function renderChaps() {
    console.log("Book: ", book, allbooks[book]);
  }

  function handleSubmit(event) {
    console.log("Submitted combo: ", vol, book, chap);
    event.preventDefault();
    props.jsselClose(vol, book, chap);
  }

  return (
    props.vis && (
      <form>
        <InputLabel id="demo-simple-select-label">
          Select volume, book, and chapter:
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={vol}
          label="Volume"
          onChange={handleVolChange}
        >
          {vols.map((v) => {
            return (
              <MenuItem key={v[0]} value={v[0]}>
                {v[1]}
              </MenuItem>
            );
          })}
        </Select>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={book}
          label="Books"
          onChange={handleBookChange}
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
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={chap}
            label="Chapters"
            onChange={handleChapChange}
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
        <button onClick={handleSubmit}>Submit</button>
      </form>
    )
  );
}
//          <MenuItem value={"dc"}>D&C</MenuItem>
//        <MenuItem value={"pgp"}>PGP</MenuItem>
//      <MenuItem value={"nt"}>NT</MenuItem>

//          {vols.map((v, idx) => (
//            <option key={v[0]} id={v[0]}>
//              {v[1]}
//            </option>

//<div id="selectMenu" className="optionsMenu hidden popup">
//        <h1>Please choose a book to read:</h1>
//        <Select
//          value={vol}
//          name="volSelect"
//          id="volSelect"
//          onChange={populateBooks}
//        >
//          <option value="BoM">Book of Mormon</option>
//          <option value="DC">D&C</option>
//          <option value="PGP">Pearl of Great Price</option>
//          <option value="NT">New Testament</option>
//        </Select>
//        <button onClick={handleDone}>OK</button>
//        <button onClick={handleCancel}>Cancel</button>
//      </div>
//    )
//  );
//
