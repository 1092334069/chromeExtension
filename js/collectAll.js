(function() {
    var collectAll = function() {}

    collectAll.prototype.init = function(param, callback) {
        var dom = $('body')
        var analyDom = AnalyDom()
        callback(analyDom.getDomData(dom))
    }

    window.CollectAll = function() {
        var p = new collectAll()
        return p
    }
})()