import React from "react";
import "./MainBody.css";

export default function MainBody(props) {
  // Wait until data is actually loaded
  if (!props.text[0] || !props.text[1] || !props.text[2])
    return <h1>Incomplete</h1>;

  var tmp0, tmp1, tmp2;

  // Keep color and prepare text to render
  if (props.colors) {
    [tmp0, tmp1, tmp2] = props.text.map((s) => s.trim().split("\n"));
  } else {
    // Toss color and prepare text to render
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
                return idx == 0 ? (
                  <th
                    style={thStyle}
                    key={idx + "=" + idx2}
                    dangerouslySetInnerHTML={{
                      __html: tmp[0] != "None" ? tmp[idx] : null,
                    }}
                  />
                ) : (
                  <td
                    style={tdStyle}
                    key={idx + "=" + idx2}
                    dangerouslySetInnerHTML={{
                      __html: tmp[0] != "None" ? tmp[idx] : null,
                    }}
                  />
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
