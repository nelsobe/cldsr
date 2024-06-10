import React from "react";
import "./MainBody.css";

export default function MainBody(props) {
  function text2Array(text) {
    let i = 0;
    let ret = [];

    while (i < text.length) {
      if (text[i] != "<") {
        ret.push(text[i]);
        i++;
      } else {
        ret.push([text[i + 20], text[i + 17]]);
        i += 28;
      }
    }
    //console.log("text2Array: ", ret);
    return ret;
    //<span class="tone2">尼</span>
  }

  ////////////////////////////////////////////////////////////////////////
  // Step 1: Wait until data is actually loaded.
  // The MainBody function can be triggered when just one of its texts changes.  Need to wait for them all.
  // First, make sure all are non-null.  Originally thought this was good enough but was erroring on some partially filled ones
  for (let i = 0; i < props.text.length; i++) {
    if (!props.text[i]) return <h1>Loading...</h1>;
  }

  // Get rid of the "None" ones and then trim and split into arrays of verses
  let tmps = props.text
    .filter((t) => t != "None")
    .map((s) => s.trim().split("\n"));

  // Make sure all are same length before proceeding (should be easoer way)
  for (let i = 0; i < tmps.length; i++)
    for (let j = i + 1; j < tmps.length; j++)
      if (tmps[i].length != tmps[j].length)
        return <h1>Finishing loading...</h1>;

  console.log(
    "Rendering lengths: ",
    tmps.map((t) => t.length)
  );

  //////////////////////////////////////////////////////////////////////
  // Step 2: Prepare text to render
  let headers = tmps.map((s) => s[0]);
  let verses = tmps.map((s) => s.slice(1));

  const tabstyle = {
    fontSize: 1.0 * props.siz,
    margin: 0,
    marginTop: 16,
    borderSpacing: 0.5 * props.siz,
  };

  const thStyle = {
    fontWeight: "bolder",
    backgroundColor: "#eaffff",
    verticalAlign: "top",
    outlineStyle: "solid",
    outlineWidth: "thin",
    outlineColor: "#e0e0e0",
    textAlign: "left",
  };

  const tdStyle = {
    textAlign: "left",
    verticalAlign: "top",
  };

  return (
    <table style={tabstyle}>
      <tbody>
        <tr key="h">
          {/* Map across columns  */}
          {headers.map((l, hidx) => {
            // console.log(l);
            let ll = text2Array(l);
            // console.log(ll);
            return (
              <th key={"h" + hidx} style={thStyle}>
                {ll.map((c, vidx) => {
                  if (c.length == 1) return String(c);
                  else if (props.colors == "nocolors") return String(c[0]);
                  else
                    return (
                      <span key={hidx + "-" + vidx} className={"tone" + c[1]}>
                        {c[0]}
                      </span>
                    );
                })}
              </th>
            );
          })}
        </tr>
        {/* Map for each verse */}
        {verses[0].map((_, idx) => {
          return (
            <tr key={"v" + idx}>
              {/* Map across columns */}
              {verses.map((l, idx2) => {
                if (!l[idx]) console.log("xxx: ", idx2, idx);
                let ll = text2Array(l[idx]);
                // console.log(ll);
                return (
                  <td key={idx2 + "-" + idx} style={tdStyle}>
                    {/* Map through each character of a verse, doing color or not */}
                    {ll.map((c, idx3) => {
                      if (c.length == 1) return String(c);
                      else if (props.colors == "nocolors") return String(c[0]);
                      else
                        return (
                          <span
                            key={"v" + idx + "-" + idx2 + "-" + idx3}
                            className={"tone" + c[1]}
                          >
                            {c[0]}
                          </span>
                        );
                    })}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
