import reloadOnUpdate from "virtual:reload-on-update-in-background-script";
reloadOnUpdate("pages/background");

try {
    chrome.action.onClicked.addListener(function() {
        chrome.tabs.create({url: 'index.html'});
    });

} catch (e) {
    console.error(e);
}

console.log("this is background script");