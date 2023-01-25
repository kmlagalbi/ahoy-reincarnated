import packageJson from "./package.json";

const manifest: chrome.runtime.ManifestV3 = {
  manifest_version: 3,
  name: packageJson.name,
  version: packageJson.version,
  description: packageJson.description,
  options_page: "src/pages/options/index.html",
  chrome_url_overrides: {
    newtab: "src/pages/newtab/index.html",
  },
  icons: {
    "128": "icon-128.png",
  },
  content_scripts: [
    {
      matches: ["http://*/*", "https://*/*", "<all_urls>"],
      js: ["src/pages/content/index.js"],
      css: ["assets/css/contentStyle.chunk.css"],
    },
  ],
  devtools_page: "src/pages/devtools/index.html",
  web_accessible_resources: [
    {
      resources: [
        "assets/js/*.js",
        "assets/css/*.css",
        "icon-128.png",
        "icon-34.png",
      ],
      matches: ["*://*/*"],
    },
  ],
background: { service_worker: "src/pages/background/firebase.js"/*"src/pages/background/index.js"*/ },
  permissions: [
    "tabs",
    "scripting",
    "activeTab",
    "identity",
    "notifications"
  ],
  action: {
    default_popup: "src/pages/popup/index.html",
    default_icon: "icon-34.png",
  },
  oauth2: {
    "client_id": "906602411317-jbm3mjkdlafs420lqh1kpp77vig4d3v3.apps.googleusercontent.com",
    "scopes": [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile"
    ]
  },
  key: "blnicbgcnbnopanppglniidcclcdhejf"
};

export default manifest;
