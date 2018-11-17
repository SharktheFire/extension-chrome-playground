chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({ color: "#3aa757" }, function() {
    console.log("The color is green.");
  });
  chrome.alarms.create("FEIERABEND", Object.assign({ when: Date.now() + 1 }));
});

chrome.alarms.onAlarm.addListener(function() {
  chrome.storage.sync.set({ color: "#3aa757" }, function() {
    console.log("HEHEHEHHEH");
  });
});
