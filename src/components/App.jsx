import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Title from "./Title";
import MainBody from "./MainBody";
import Footer from "./Footer";
import Jssel from "./Jssel";
import Jslangs from "./Jslangs";
import allbooks from "./allbooks";
import BooksMenu from "./BooksMenu";
import {
  Button,
  Modal,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

function App() {
  const [loc, setLoc] = useState({ book: "1 Nephi", chap: 1 });
  const [langs, setLangs] = useState(["eng", "trad", "simp"]);
  const [text0, setText0] = useState();
  const [text1, setText1] = useState();
  const [text2, setText2] = useState();
  const [booksMenuVis, setBooksMenuVis] = useState(false);
  const [langsMenuVis, setLangsMenuVis] = useState(false);
  const [siz, setSiz] = useState(16);

  function jsnav(event) {
    let newChap;
    if (event.target.id == "jsnavinc") newChap = loc.chap + 1;
    else newChap = loc.chap - 1;
    const bookRecord = allbooks[loc.book];
    newChap = Math.max(Math.min(newChap, bookRecord.end), bookRecord.start);
    setLoc({ ...loc, chap: newChap });
  }

  function jsselOpen(event) {
    setBooksMenuVis(true);
  }

  function jsselClose(newvol, newbook, newchap) {
    setBooksMenuVis(false);
    setLoc({ book: newbook, chap: newchap });
    console.log("Got back: ", newvol, newbook, newchap);
  }

  function jslangsOpen(event) {
    setLangsMenuVis(true);
  }
  //
  async function jslangsClose(lang0, lang1, lang2) {
    setLangsMenuVis(false);
    if (lang1 === "None") {
      lang1 = lang2;
      lang2 = "None";
    }
    await setLangs([lang0, lang1, lang2]);
    console.log("Langs: ", lang0, lang1, lang2);
    console.log("Langs: ", langs);
  }

  function loadAndRender() {
    // Figure out exactly what to grab
    const vl = allbooks[loc.book].vol;
    const bk = allbooks[loc.book].id;
    const ch = loc.chap;
    console.log("Fetching: ", vl, bk, ch);
  }

  function jscolors(event) {}

  function jssiz(event) {
    var newsiz;
    if (event.target.id == "jssizbig") newsiz = siz + 2;
    else newsiz = siz - 2;
    setSiz(newsiz);
    console.log("Newsize: ", newsiz);
  }

  function jsabout(event) {}

  useEffect(() => {
    fetch("http://localhost:5173/contents/eng/1Ne/1.txt")
      .then((response) => response.text())
      .then((data) => setText0(data));

    if (langs[1] != "None")
      fetch("http://localhost:5173/contents/trad/1Ne/c1.txt")
        .then((response) => response.text())
        .then((data) => setText1(data));
    else setText1("None");

    if (langs[2] != "None")
      fetch("http://localhost:5173/contents/simp/1Ne/c1.txt")
        .then((response) => response.text())
        .then((data) => setText2(data));
    else setText2("None");
  }, []);

  return (
    <div>
      <Jssel vis={booksMenuVis} jsselClose={jsselClose} siz={siz} />
      <Jslangs vis={langsMenuVis} jslangsClose={jslangsClose} siz={siz} />
      <Header
        siz={siz}
        jsnav={jsnav}
        jssel={jsselOpen}
        jslangs={jslangsOpen}
        jscolosr={jscolors}
        jssiz={jssiz}
        jsabout={jsabout}
      />
      <Title loc={loc} siz={siz} />
      <MainBody siz={siz} text0={text0} text1={text1} text2={text2} />
      {/* <Footer siz={siz} /> */}
    </div>
  );
}

export default App;
//      <BooksMenu vis={booksMenuVis} closeBooksMenu={closeBooksMenu} />;
