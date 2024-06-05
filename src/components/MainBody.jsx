import React from "react";
import "./MainBody.css";

export default function MainBody(props) {
  // Wait until data is actually loaded
  if (!props.text0 || !props.text1 || !props.text2) return <h1>Incomplete</h1>;

  var tmp0, tmp1, tmp2;
  // Keep color and prepare text to render
  if (props.colors) {
    [tmp0, tmp1, tmp2] = [props.text0, props.text1, props.text2].map((s) =>
      s.trim().split("\n")
    );
  } else {
    // Toss color and prepare text to render
    [tmp0, tmp1, tmp2] = [props.text0, props.text1, props.text2].map((s) =>
      s
        .trim()
        .replace(/tone[12345]/g, "tone6")
        .split("\n")
    );
  }

  if (
    tmp0.length != tmp1.length ||
    tmp1.length != tmp2.length ||
    tmp0.length != tmp2.length
  )
    console.log(
      "Rendering length mismatch: ",
      tmp0.length,
      tmp1.length,
      tmp2.length
    );

  const tabstyle = {
    fontSize: 1.0 * props.siz,
    margin: 0,
    marginTop: 16,
  };

  return (
    <table style={tabstyle}>
      <tbody>
        {tmp0.map((_, idx) => {
          return (
            <tr key={idx}>
              {idx == 0 ? (
                <th
                  key={"0"}
                  dangerouslySetInnerHTML={{
                    __html: tmp0[0] != "None" ? tmp0[idx] : null,
                  }}
                />
              ) : (
                <td
                  key={"0"}
                  dangerouslySetInnerHTML={{
                    __html: tmp0[0] != "None" ? tmp0[idx] : null,
                  }}
                />
              )}
              {idx == 0 ? (
                <th
                  key={"1"}
                  dangerouslySetInnerHTML={{
                    __html: tmp1[0] != "None" ? tmp1[idx] : null,
                  }}
                />
              ) : (
                <td
                  key={"1"}
                  dangerouslySetInnerHTML={{
                    __html: tmp1[0] != "None" ? tmp1[idx] : null,
                  }}
                />
              )}
              {idx == 0 ? (
                <th
                  key={"2"}
                  dangerouslySetInnerHTML={{
                    __html: tmp2[0] != "None" ? tmp2[idx] : null,
                  }}
                />
              ) : (
                <td
                  key={"2"}
                  dangerouslySetInnerHTML={{
                    __html: tmp2[0] != "None" ? tmp2[idx] : null,
                  }}
                />
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
