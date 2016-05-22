chrome.storage.sync.get("theme",function(val) {
	if (val.theme != "Default" && val.theme != undefined) {
		var css = document.createElement("link");
		css.setAttribute("rel","stylesheet");
		css.setAttribute("href","chrome-extension://" + chrome.runtime.id + "/assets/css/themes/" + val.theme + ".css")
		document.getElementsByTagName("head")[0].appendChild(css);
	}
});