var asset = /assets\/css\/themes\/(.*?)\.css/;
$.each(chrome.runtime.getManifest().web_accessible_resources,function(_,v) {
	var reg = asset.exec(v);
	if (!reg) {return;}
	var option = document.createElement("option");
	$(option).html(reg[1]);
	$("select").append(option);
});

chrome.storage.sync.get("theme",function(val) {
	$("select").val(val.theme || "Default");
});

$("select").change(function() {
	chrome.storage.sync.set({"theme": $(this).val()});
});