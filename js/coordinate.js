(function() {
    var coordinate = function() {
        this.ignoreNodeList = ['SCRIPT', 'STYLE', 'VIDEO', 'AUDIO', 'CANVAS']
    }

    coordinate.prototype.getCoordinateData = function(initDom) {
        var domData = this.parseCoordinate(0, initDom)
        console.log(domData)
        return domData
    }

    // 解析坐标
    coordinate.prototype.parseCoordinate = function(count, dom) {
        if (count > 10000000 || this.isIgnoreNode(dom)) {
            return false
        }

        var domCoordinate = {
            selector: dom,
            site: {
                top: dom.offset().top,
                right: dom.outerWidth() + dom.offset().left,
                bottom: dom.outerHeight() + dom.offset().top,
                left: dom.offset().left
            },
            childList: []
        }

        if (dom.children().length) {
            for (var i = 0; i < dom.children().length; i++) {
                var child = this.parseCoordinate(count++, dom.children().eq(i))
                if (child) {
                    domCoordinate.childList.push(child)
                }
            }
        }

        // 当子元素尺寸大于父元素尺寸时判断出有内滚动条的情况，需方向修复坐标尺寸
        let right = parseInt(domCoordinate.site.right)
        let bottom = parseInt(domCoordinate.site.bottom)
        for (let i = 0; i < domCoordinate.childList.length; i++) {
            if (right < domCoordinate.childList[i].site.right) {
                right = parseInt(domCoordinate.childList[i].site.right)
            }
            if (bottom < domCoordinate.childList[i].site.bottom) {
                bottom = parseInt(domCoordinate.childList[i].site.bottom)
            }
        }
        domCoordinate.site.right = right
        domCoordinate.site.bottom = bottom

        return domCoordinate
    }

    // 检测忽略节点
    coordinate.prototype.isIgnoreNode = function(dom) {
        if (!dom.length) {
            return true
        }
        for (var i = 0; i < this.ignoreNodeList.length; i++) {
            if (dom[0].nodeName === this.ignoreNodeList[i]) {
                return true
            }
        }
        return false
    }

    window.Coordinate = function() {
        var p = new coordinate()
        return p
    }

})()