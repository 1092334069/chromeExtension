var collectCut = CollectCut()
var collectAll = CollectAll()
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
	console.log(request)
    switch(request.event) {
        case 'collectCut' : collectCut.init(request.data, sendResponse); break;
        case 'collectAll' : collectAll.init(request.data, sendResponse); break;
        default: console.log('can not find the event')
    }
})