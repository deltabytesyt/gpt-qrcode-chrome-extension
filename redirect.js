// chrome.tabs.create({ url: "https://www.youtube.com/@deltabytes?sub_confirmation=1"});
chrome.runtime.onInstalled.addListener(function() {
  chrome.tabs.create({ url: "https://www.youtube.com/@deltabytes?sub_confirmation=1" });
});

