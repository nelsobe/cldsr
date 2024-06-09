import React, { useState, useEffect } from "react";
import Header from "./Header";
import Title from "./Title";
import MainBody from "./MainBody";
import Jssel from "./Jssel";
import Jslangs from "./Jslangs";
import About from "./About";
import allbooks from "./allbooks";
import tradHist from "../assets/tradHist";
import simpHist from "../assets/simpHist";
import Cookies from "js-cookie";
import { HTMLToJSON } from "html-to-json-parser";

//////////////////////////////////////////////////////////////////////
function App() {
  const [book, setBook] = useState(Cookies.get("cldsBook") || "1 Nephi");
  const [chap, setChap] = useState(Cookies.get("cldsChap") || 1);
  const [lang0, setLang0] = useState(Cookies.get("cldsLang0") || "eng");
  const [lang1, setLang1] = useState(Cookies.get("cldsLang1") || "trad");
  const [lang2, setLang2] = useState(Cookies.get("cldsLang2") || "None");
  const [text0, setText0] = useState();
  const [text1, setText1] = useState();
  const [text2, setText2] = useState();
  const [booksMenuVis, setBooksMenuVis] = useState(false);
  const [langsMenuVis, setLangsMenuVis] = useState(false);
  const [aboutVis, setAboutVis] = useState(false);
  const [siz, setSiz] = useState(Cookies.get("cldsSiz") || 16);
  const [colors, setColors] = useState(Cookies.get("cldsColors") || "nocolors");
  const [hist, setHist] = useState(Cookies.get("cldsHist") || 1.0);

  //////////////////////////////////////////////////////////////////////
  // Go to next/prev chapter
  function jsnav(event) {
    let newChap;
    if (event.target.id == "jsnavinc") newChap = chap + 1;
    else newChap = chap - 1;
    const bookRecord = allbooks[book];
    newChap = Math.max(Math.min(newChap, bookRecord.end), bookRecord.start);
    setChap(newChap);
    Cookies.set("cldsChap", newChap);
    Cookies.set("cldsBook", book);
    load([lang0, lang1, lang2], book, newChap);
  }

  //////////////////////////////////////////////////////////////////////
  // Book select menu closed
  function jsselClose(newvol, newbook, newchap) {
    setBooksMenuVis(false);
    setBook(newbook);
    setChap(newchap);
    Cookies.set("cldsBook", newbook);
    Cookies.set("cldsChap", newchap);
    load([lang0, lang1, lang2], newbook, newchap);
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
    setLang0(lang0);
    setLang1(lang1);
    setLang2(lang2);
    Cookies.set("cldsLang0", lang0);
    Cookies.set("cldsLang1", lang1);
    Cookies.set("cldsLang2", lang2);
    load([lang0, lang1, lang2], book, chap);
  }

  //////////////////////////////////////////////////////////////////////
  // Change the text size
  function jssiz(event) {
    var newsiz;
    if (event.target.id == "jssizbig") newsiz = parseInt(siz) + 2;
    else newsiz = parseInt(siz) - 2;
    setSiz(newsiz);
    Cookies.set("cldsSiz", newsiz);
    console.log("Newsize: ", newsiz);
  }

  //////////////////////////////////////////////////////////////////////
  // The About (?) screen
  function jsabout(event) {}

  function aboutClose(value) {
    setAboutVis(false);
    setHist(value);
    Cookies.set("cldsHist", value);
    console.log("aboutClose: ", value);
  }

  //////////////////////////////////////////////////////////////////////
  // Caching stuff
  function cacheWrite(lang, id, chap, s) {
    // return;
    let key = lang + id + chap;
    let success;
    console.log("Starting cache write: ", key);
    do {
      success = true;
      try {
        window.sessionStorage.setItem(key, s);
        console.log("Cache write: ", key);
        return;
      } catch (error) {
        success = false;
        console.log("Write failed: cache full...");
        // console.log("Cache contents:");
        // for (let i = 0; i < window.sessionStorage.length; i++)
        // console.log(`   ${window.sessionStorage.key(i)}`);
        // Kick out random entry
        let k = window.sessionStorage.key(
          Math.floor(Math.random() * window.sessionStorage.length)
        );
        window.sessionStorage.removeItem(k);
        console.log(`Cache remove: ${k}`);
      }
    } while (success == false);
  }

  function cacheLookup(lang, id, chap) {
    window.sessionStorage.clear();
    // return "This is come cache lookup text...";
    let key = lang + id + chap;
    console.log("cacheLookup: " + key);
    let s = window.sessionStorage.getItem(key);
    if (s != null) {
      console.log("  Found it...");
      return s;
    }
    console.log("  Didn't find it...");
    return null;
  }

  //////////////////////////////////////////////////////////////////////
  // Load the needed books from the website and place into text0-text2
  function load(langs, book, chap) {
    console.log("Loading: ", langs, book, chap);
    const bk = allbooks[book].id;

    // Get chapter (colored or not)
    const ch = langs.map((lang) => {
      if (["simp", "trad"].includes(lang)) return "c" + chap;
      else return chap;
    });

    const settexts = [setText0, setText1, setText2];

    console.log("Loading: ", langs, bk, ch);

    /* Load each requested document from web server.
       This is a promise-based get and so things will come back at some point.  
       When that happens, things will get rendered. 
    */
    langs.map((lang, idx) => {
      if (lang != "None") {
        // Get it from cache if we have it
        let s = cacheLookup(lang, allbooks[book].id, chap);
        if (s) {
          const newData = colorizeData(s);
          settexts[idx](newData);
        } else {
          // Must fetch it
          const URL = "https://nelsobe.github.io/cldsr";
          // const URL = "https://raw.githubusercontent.com/nelsobe/cldsr/main";
          fetch(`${URL}/contents/${lang}/${bk}/${ch[idx]}.txt`)
            .then((response) => response.text())
            .then((data) => {
              cacheWrite(lang, allbooks[book].id, chap, data);
              const newData = colorizeData(data);
              settexts[idx](newData);
            });
        }
      } else settexts[idx]("None");
    });
    window.scrollTo(0, 0); // Scroll to top of new page
  }

  function toneChar(s) {
    return s;
    console.log("Got: ", s, "returning:  ", s.slice(-8, -7));
    const tone = s.slice(-10, -9);
    const ch = s.slice(-8, -7);
    let loc = tradHist.findIndex((tmp) => tmp == ch);
    console.log("toneChar: ch = ", ch, " loc = ", loc);
    if (colors && loc != -1 && loc < tradHist.length * hist) {
      // Return unchanged
      return s;
    } else {
      // Turn black
      return `<span class="tone6">${ch}</span>`;
    }
  }

  // On hold until I figure out how to do this
  function colorizeData(data) {
    console.log("colorizing: ", data.slice(0, 200));
    let newData = data.replace(
      /<span class=\"tone[123456]\">.<\/span>/g,
      (s) => {
        return toneChar(s);
      }
    );
    console.log("Colorized: ", newData.slice(0, 30));
    return newData;
    let arr = ["tone1", "tone2", "tone3", "tone4", "tone5"];

    for (let tone = 0; tone < arr.length; tone++) {
      toneName = "tone" + (tone + 1);
      collection = $("." + toneName);
      for (let i = collection.length - 1; i >= 0; i--) {
        let elmt = collection[i];
        histlen = hist.length;

        // Set to proper color
        let loc = hist.search(elmt.textContent);
        // Gray will always be gray
        if (params.colors == true && toneName == "tone5") {
          elmt.classList.remove("toneblack");
          elmt.classList.add(toneName);
        }
        // Only colorize if the loc is within histogram percent range
        else if (
          params.colors == true &&
          loc != -1 &&
          loc < histlen * params.histpercent
        ) {
          elmt.classList.remove("toneblack");
          elmt.classList.add(toneName);
        } // Else set to black
        else elmt.classList.add("toneblack");
      }
    }
  }

  function loadHistogramDocs() {}
  //////////////////////////////////////////////////////////////////////
  // This useEffect() does the initial loading of the docuents when the App is first loaded and started.
  useEffect(() => {
    console.log("useEffect: ", book, chap);
    load([lang0, lang1, lang2], book, chap);
    loadHistogramDocs();
  }, []);

  //////////////////////////////////////////////////////////////////////
  // This is what <App /> returns
  //////////////////////////////////////////////////////////////////////
  return (
    <div>
      {/* These first three are popup windows (initially invisible) */}
      <Jssel vis={booksMenuVis} jsselClose={jsselClose} siz={siz} />
      <Jslangs vis={langsMenuVis} jslangsClose={jslangsClose} siz={siz} />
      <About
        vis={aboutVis}
        aboutClose={aboutClose}
        siz={siz}
        book={book}
        chap={chap}
      />
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
          if (colors == "colors") {
            Cookies.set("cldsColors", "nocolors");
            setColors("nocolors");
          } else {
            Cookies.set("cldsColors", "colors");
            setColors("colors");
          }
        }}
        jsabout={() => {
          setAboutVis(true);
        }}
        jssiz={jssiz}
      />
      <Title book={book} chap={chap} siz={siz} />
      <MainBody siz={siz} text={[text0, text1, text2]} colors={colors} />
    </div>
  );
}

//////////////////////////////////////////////////////////////////////
export default App;
