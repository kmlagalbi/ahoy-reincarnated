import React from 'react';


export default function GoogleButton(){
    console.log("loaded")

    function handleClick() {
        console.log("clicked")
        chrome.identity.getAuthToken({interactive: true}, function(token) {
          console.log(token);
        });
    }

    return (
        <div>
            <button onClick={handleClick}>Google SignIn</button>
            <div id="friendDiv"></div>
        </div>
    )


}