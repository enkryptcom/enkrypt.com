const BROWSER_NAMES = {
  chrome: "chrome",
  firefox: "firefox",
  brave: "brave",
  edge: "edge",
  opera: "opera",
};
const EXTENSION_LINKS = {
  chrome:
    "https://chrome.google.com/webstore/detail/enkrypt/kkpllkodjeloidieedojogacfhpaihoh",
  firefox: "https://addons.mozilla.org/en-US/firefox/addon/enkrypt/",
  brave:
    "https://chrome.google.com/webstore/detail/enkrypt/kkpllkodjeloidieedojogacfhpaihoh",
  edge: "https://microsoftedge.microsoft.com/addons/detail/gfenajajnjjmmdojhdjmnngomkhlnfjl",
  opera: "https://addons.opera.com/en/extensions/details/enkrypt/",
};
const TRACKING_EVENTS = {
  btnDownloadNow: ["trackEvent", "downloadNowButton", "click"],
  chrome: ["trackEvent", "navigateToChromeStore", "click"],
  firefox: ["trackEvent", "navigateToFirefoxStore", "click"],
  brave: ["trackEvent", "navigateToBraveStore", "click"],
  edge: ["trackEvent", "navigateToEdgeStore", "click"],
  opera: ["trackEvent", "navigateToOperaStore", "click"],
};

export { EXTENSION_LINKS, BROWSER_NAMES, TRACKING_EVENTS };
