//React
import React from "react";
import { createRoot } from "react-dom/client";
import refreshOnUpdate from "virtual:reload-on-update-in-view";

//Third-Party
import axios from 'axios'

//Components
import CommentMain from "@src/pages/popup/mainPopups/CommentMain"
import IndexPopup from "@src/pages/popup/defaultPopups/LoginPopup"

//Utils
import { getLocalStorage, setLocalStorage } from "../utils/localstorage" 
import { getCurrentTab } from "../utils/chromeFunctions"

//Models
import { UserInfo } from "../../models/UserInfo";
import { ViewComment } from "@src/models/Apis";

refreshOnUpdate("pages/popup");

async function init() {

  //init
  //로그인 localstorage 확인 후 없으면 google login render
    //google login 성공 시 홈 화면 렌더
  //있으면 홈 화면 렌더

  const appContainer = document.querySelector("#app-container");
  if (!appContainer) {
    throw new Error("Can not find AppContainer");
  }
  const root = createRoot(appContainer);

  let userInfo: UserInfo = getLocalStorage("userInfo")
  console.log(userInfo)

  if(!userInfo?.isLogin) {
    console.log("def")
    loadGoogleLogin(root)
  } else {
    loadMainPopup(root) 
  }

}

async function loadMainPopup(root) {
  
  /*
  const currentTab = await getCurrentTab()
  let response = await axios.post("https://us-central1-seongjuns-ahoy.cloudfunctions.net/viewComments", {
    //url: currentTab.url
    url: "https://cho.sh/r/26A488"
  })
  let content: ViewComment | string | null = response?.data?.response

  console.log(currentTab.url)
  console.log(content)


  let state = content == "no such link exists. please check again." ? [] : content.comments.map(u => ({
    user: u.writerId,
    content: u.content
  }))
  */
  let props = [{
    writerId: 1,
    comment: "hi"
  }]

  root.render(
    <div>
      <CommentMain commentData={props}/>
      <div>
        <button onClick={()=>{
          loadGoogleLogin(root)
        }}>
            login status management
        </button>
      </div>
    </div>
  )
}

async function loadGoogleLogin(root) {
  root.render(<IndexPopup/>)
}

init();
