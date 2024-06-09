import React from "react";
import "./MainBody.css";

export default function MainBody(props) {
  // Wait until data is actually loaded
  if (!props.text[0] || !props.text[1] || !props.text[2])
    return <h1>Loading...</h1>;

  var tmp0, tmp1, tmp2;

  // Prepare text to render
  // Keep color
  console.log("MainBody: ", props.colors);
  if (props.colors === "colors") {
    [tmp0, tmp1, tmp2] = props.text.map((s) => s.trim().split("\n"));
  } else {
    // Toss color
    [tmp0, tmp1, tmp2] = props.text.map((s) =>
      s
        .trim()
        .replace(/tone[12345]/g, "tone6")
        .split("\n")
    );
  }

  console.log("Rendering lengths: ", tmp0.length, tmp1.length, tmp2.length);

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
        {tmp0.map((_, idx) => {
          return (
            <tr key={idx}>
              {[tmp0, tmp1, tmp2].map((tmp, idx2) => {
                return idx == 0 && tmp[0] != "None" ? (
                  <th
                    style={thStyle}
                    key={idx + "=" + idx2}
                    // This call is not a good idea - it is here to take HTML source and just shove it into the location.  A better way would be to reformulate the scripture files as JSON objects and iterate over the characters one at a time, adding classes for color as I go.
                    dangerouslySetInnerHTML={{
                      __html: tmp[idx],
                    }}
                  />
                ) : (
                  tmp[0] != "None" && (
                    <td
                      style={tdStyle}
                      key={idx + "=" + idx2}
                      // This call is not a good idea - it is here to take HTML source and just shove it into the location.  A better way would be to reformulate the scripture files as JSON objects and iterate over the characters one at a time, adding classes for color as I go.
                      dangerouslySetInnerHTML={{
                        __html: tmp[idx],
                      }}
                    />
                  )
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
