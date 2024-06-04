import React from "react";

export default function MainBody(props) {
  // Have to wait until data is actually loaded
  if (!props.text0 || !props.text1 || !props.text2) return <h1>Incomplete</h1>;

  const tmp0 = props.text0.split("\n");
  const tmp1 = props.text1.split("\n");
  const tmp2 = props.text2.split("\n");

  return (
    <table>
      <tbody>
        {tmp0.map((_, idx) => {
          return (
            <tr key={idx}>
              <td key={"0"}>{tmp0[idx]}</td>
              <td key={"1"}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: tmp1.length == tmp0.length && tmp1[idx],
                  }}
                />
              </td>
              <td key={"2"}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: tmp2.length == tmp0.length && tmp2[idx],
                  }}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
// dangerouslySetInnerHTML={{__html: data}}
{
  /* <td key={"2"}>{tmp2.length == tmp0.length && tmp2[idx]}</td> */
}
