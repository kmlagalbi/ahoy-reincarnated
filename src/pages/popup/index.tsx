import React from "react";
import { createRoot } from "react-dom/client";
import "@pages/popup/index.css";
import Popup from "@pages/popup/Popup";

import Comment from "@pages/popup/Comment"
import GoogleButton from "@pages/popup/GoogleLogin"
import IndexPopup from "@pages/popup/IndexPopup"

import refreshOnUpdate from "virtual:reload-on-update-in-view";

import axios from 'axios'

refreshOnUpdate("pages/popup");

async function init() {
  const appContainer = document.querySelector("#app-container");
  if (!appContainer) {
    throw new Error("Can not find AppContainer");
  }
  const root = createRoot(appContainer);

  root.render(<IndexPopup/>)

  /*
  async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  }

  const currentTab = await getCurrentTab()

  let content: any = await axios.post("https://us-central1-seongjuns-ahoy.cloudfunctions.net/viewComments", {
    url: currentTab.url//"https://cho.sh/r/26A488"
  })
  content = content.data.response
  console.log(content)

  //구글 로그인 버튼
  //root.render(<GoogleButton/>)

  if(content == "no such link exists. please check again.") {
    root.render(<div>nothing</div>)
  } else {

    const state = content.comments.map(u => ({
      user: u.writerId,
      content: u.content,
      ago: 0
    }))
  
    //sample
    const comment = [
      {
        user: "양소은",
        content: "덕행이오빠 뭐해",
        ago: 0
      }
    ]
  
    root.render(<Comment commentData={state}/>);
  }
  */


}

init();
