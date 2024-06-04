import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Title from "./Title";
import MainBody from "./MainBody";
import Footer from "./Footer";
import Jssel from "./Jssel";
import allbooks from "./allbooks";
import BooksMenu from "./BooksMenu";

function App() {
  const [loc, setLoc] = useState({ book: "1 Nephi", chap: 1 });
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

  function jslangs(event) {
    setLangsMenuVis(true);
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

  return (
    <div>
      <Jssel vis={booksMenuVis} jsselClose={jsselClose} siz={siz} />
      <Header
        siz={siz}
        jsnav={jsnav}
        jssel={jsselOpen}
        jslangs={jslangs}
        jscolosr={jscolors}
        jssiz={jssiz}
        jsabout={jsabout}
      />
      <Title loc={loc} siz={siz} />
      <MainBody siz={siz} />
      <Footer siz={siz} />
    </div>
  );
}

export default App;
//      <BooksMenu vis={booksMenuVis} closeBooksMenu={closeBooksMenu} />;
