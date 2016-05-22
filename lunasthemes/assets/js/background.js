chrome.tabs.onUpdated.addListener(function(id,x,tab) {
	if (tab.url.indexOf("scriptfodder.com") != -1) {
		chrome.pageAction.show(id);
	} else {
		chrome.pageAction.hide(id);
	}
});