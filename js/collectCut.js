(function() {
    var targetDomList = []
    
    // 计算2个矩形的交集面积
    function rectangleArea(rect1, rect2) {
        if (rect1.left >= rect2.right || rect2.left >= rect1.right || rect1.bottom <= rect2.top || rect1.top >= rect2.bottom) {
            return 0
        }
        var x1 = rect1.left > rect2.left ? rect1.left : rect2.left
        var x2 = rect1.right < rect2.right ? rect1.right : rect2.right
        var y1 = rect1.bottom > rect2.bottom ? rect1.bottom : rect2.bottom
        var y2 = rect1.top < rect2.top ? rect1.top : rect2.top
        return Math.abs(x2 - x1) * Math.abs(y2 - y1)
    }
    
    // 获取目标节点
    function getTargetDomList(cutSite, coordinateData) {
        // 当坐标范围都落在截屏四个点之内时为目标节点
        var site = coordinateData.site 
        if (site.top >= cutSite.top && site.left >= cutSite.left && site.bottom <= cutSite.bottom && site.right <= cutSite.right) {
            targetDomList.push(coordinateData.selector)
        } else {
            // 当2个矩形出现重叠面积时尝试从子节点获取目标节点
            var area = rectangleArea(cutSite, site)
            if (area) {
                for (var i = 0; i < coordinateData.childList.length; i++) {
                    getTargetDomList(cutSite, coordinateData.childList[i])
                }
            }
        }
    }

    var collectCut = function() {}

    collectCut.prototype.init = function(param, callback) {
        var dom = $('body')
        var analyDom = AnalyDom()
        var coordinate = Coordinate()
        var coordinateData = coordinate.getCoordinateData(dom)

        Drag({
            callback: function(cutSite) {
                if (cutSite) {
                    targetDomList = []
                    getTargetDomList(cutSite, coordinateData)        
                    var resultData = {
                        data: "",
                        nodeName: "BODY",
                        style: {},
                        childList: []
                    }
                    for (var i = 0; i < targetDomList.length; i++) {
                        resultData.childList.push(analyDom.getDomData(targetDomList[i]))
                    }
                    callback(resultData)
                } else {
                    callback(false)
                }
            }
        })
    }

    window.CollectCut = function() {
        var p = new collectCut()
        return p
    }

})()