import React, { useState } from "react";

const CommentItem = (props, states) => {

  const rows = props.commentData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.writerId}</td>
        <td>{row.comment}</td>
      </tr>
    )
  })
    
  return (
    <table>
      <tbody>{rows}</tbody>
    </table>
  )
};

export default CommentItem;
