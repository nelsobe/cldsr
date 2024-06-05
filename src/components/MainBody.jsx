import React from "react";
import "./MainBody.css";

export default function MainBody(props) {
  // Have to wait until data is actually loaded
  if (!props.text0 || !props.text1 || !props.text2) return <h1>Incomplete</h1>;

  console.log(props.text1);

  if (props.colors) {
    var tmp0 = props.text0.trim().split("\n");
    var tmp1 = props.text1.trim().split("\n");
    var tmp2 = props.text2.trim().split("\n");
  } else {
    var tmp0 = props.text0
      .trim()
      .replace(/tone[12345]/g, "tone6")
      .split("\n");
    var tmp1 = props.text1
      .trim()
      .replaceAll(/tone[12345]/g, "tone6")
      .split("\n");
    var tmp2 = props.text2
      .trim()
      .replaceAll(/tone[12345]/g, "tone6")
      .split("\n");
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
    marginTop: 46,
  };

  return (
    <table style={tabstyle}>
      <tbody>
        {tmp0.map((_, idx) => {
          return (
            <tr key={idx}>
              <td
                key={"0"}
                dangerouslySetInnerHTML={{
                  __html: tmp0.length == tmp0.length ? tmp0[idx] : null,
                }}
              />
              <td
                key={"1"}
                dangerouslySetInnerHTML={{
                  __html: tmp1.length == tmp0.length ? tmp1[idx] : null,
                }}
              />
              <td
                key={"2"}
                dangerouslySetInnerHTML={{
                  __html: tmp2.length == tmp0.length ? tmp2[idx] : null,
                }}
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
