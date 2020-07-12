chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && tab.active) {
    chrome.tabs.executeScript(null, { file: 'libs/jquery.js' }, function () {
      chrome.tabs.executeScript(null, { file: 'src/content.js' });
    });
  }
});
