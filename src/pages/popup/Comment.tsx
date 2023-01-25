import React, { useState } from "react";


const Comment = (props, states) => {

  /* state 테스트
  const [counterList, setCounterList] = useState<number[]>([props.commentData.map(r => parseInt(r.ago))]);
  setInterval(
    () => setCounterList(counterList.map(r => r++)),
    1000
  );
  */

  const rows = props.commentData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.user}</td>
        <td>{row.content}</td>
      </tr>
    )
  })
    
  return (
    <table>
      <tbody>{rows}</tbody>
    </table>
  )
};

export default Comment;
