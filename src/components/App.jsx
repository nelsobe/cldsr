import React, { useState, useEffect } from "react";
import Header from "./Header";
import Title from "./Title";
import MainBody from "./MainBody";
import Jssel from "./Jssel";
import Jslangs from "./Jslangs";
import About from "./About";
import allbooks from "./allbooks";

//////////////////////////////////////////////////////////////////////
function App() {
  const URL = "http://localhost:5173";
  const [loc, setLoc] = useState({ book: "1 Nephi", chap: 1 });
  const [langs, setLangs] = useState(["eng", "trad", "None"]);
  const [text0, setText0] = useState();
  const [text1, setText1] = useState();
  const [text2, setText2] = useState();
  const [booksMenuVis, setBooksMenuVis] = useState(false);
  const [langsMenuVis, setLangsMenuVis] = useState(false);
  const [aboutVis, setAboutVis] = useState(false);
  const [siz, setSiz] = useState(16);
  const [colors, setColors] = useState(true);
  const [hist, setHist] = useState(1.0);

  //////////////////////////////////////////////////////////////////////
  // Go to next/prev chapter
  function jsnav(event) {
    let newChap;
    if (event.target.id == "jsnavinc") newChap = loc.chap + 1;
    else newChap = loc.chap - 1;
    const bookRecord = allbooks[loc.book];
    newChap = Math.max(Math.min(newChap, bookRecord.end), bookRecord.start);
    setLoc({ ...loc, chap: newChap });
    load(langs, loc.book, newChap);
  }

  //////////////////////////////////////////////////////////////////////
  // Book select menu closed
  function jsselClose(newvol, newbook, newchap) {
    setBooksMenuVis(false);
    setLoc({ book: newbook, chap: newchap });
    load(langs, newbook, newchap);
  }

  //////////////////////////////////////////////////////////////////////
  // Languages select menu closed
  function jslangsClose(lang0, lang1, lang2) {
    console.log("Langs: ", lang0, lang1, lang2);
    // Make langs menu invisible
    setLangsMenuVis(false);
    // Rearrange to put None on the right
    if (lang1 === "None") {
      lang1 = lang2;
      lang2 = "None";
    }
    setLangs([lang0, lang1, lang2]);
    load([lang0, lang1, lang2], loc.book, loc.chap);
  }

  //////////////////////////////////////////////////////////////////////
  // Change the text size
  function jssiz(event) {
    var newsiz;
    if (event.target.id == "jssizbig") newsiz = siz + 2;
    else newsiz = siz - 2;
    setSiz(newsiz);
    console.log("Newsize: ", newsiz);
  }

  //////////////////////////////////////////////////////////////////////
  // The About (?) screen
  function jsabout(event) {}

  function aboutClose(value) {
    setAboutVis(false);
    console.log(value);
    setHist(value);
  }

  //////////////////////////////////////////////////////////////////////
  // Load the needed books from the website and place into text0-text2
  function load(langs, book, chap) {
    const bk = allbooks[book].id;

    // Get chapter (colored or not)
    const ch = langs.map((lang) => {
      if (["simp", "trad"].includes(lang)) return "c" + chap;
      else return chap;
    });

    const settexts = [setText0, setText1, setText2];

    console.log("Loading: ", langs, bk, ch);

    /* Load each requested document from web server (see URL).  
       This is a promise-based fetch and so things will come back at some point.  
       When that happens, things will get rendered. 
    */
    langs.map((lang, idx) => {
      if (lang != "None")
        fetch(`${URL}/contents/${lang}/${bk}/${ch[idx]}.txt`)
          .then((response) => response.text())
          .then((data) => settexts[idx](data));
      else settexts[idx]("None");
    });
  }

  //////////////////////////////////////////////////////////////////////
  // This useEffect() does the initial loading of the docuents when the App is first loaded and started.
  useEffect(() => {
    load(langs, loc.book, loc.chap);
  }, []);

  //////////////////////////////////////////////////////////////////////
  // This is what <App /> returns
  //////////////////////////////////////////////////////////////////////
  return (
    <div>
      {/* These first three are popup windows (initially invisible) */}
      <Jssel vis={booksMenuVis} jsselClose={jsselClose} siz={siz} />
      <Jslangs vis={langsMenuVis} jslangsClose={jslangsClose} siz={siz} />
      <About vis={aboutVis} aboutClose={aboutClose} siz={siz} loc={loc} />
      {/* Now for the actual header, title, and body */}
      <Header
        siz={siz}
        jsnav={jsnav}
        jssel={() => {
          setBooksMenuVis(true);
        }}
        jslangs={() => {
          setLangsMenuVis(true);
        }}
        jscolors={() => {
          setColors(!colors);
        }}
        jsabout={() => {
          setAboutVis(true);
        }}
        jssiz={jssiz}
      />
      <Title loc={loc} siz={siz} />
      <MainBody siz={siz} text={[text0, text1, text2]} colors={colors} />
    </div>
  );
}

//////////////////////////////////////////////////////////////////////
export default App;
