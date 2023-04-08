import { reauthenticateWithRedirect } from "firebase/auth";
import React, { useState } from "react";
import CommentItem from "./CommentItem"


const CommentMain = (props, states) => {
    return (
        <div>
            <CommentItem commentData={props.commentData}>
            </CommentItem>
        </div>
    )
};

export default CommentMain;
