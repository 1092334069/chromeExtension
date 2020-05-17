(function() {
    var drag = function(option) {
        this.option = option
    }

    drag.prototype.init = function() {
        $('body').addClass('chartapply-tool-body')
        var dom = '<div id="chartapplyToolDrag" class="chartapply-tool-drag"></div>'
        if (!$('#chartapplyToolDrag').length) {
            $('body').append(dom)
        }
        this.rebuild()
        this.bindEvent()
    }

    drag.prototype.rebuild = function() {
        $('#chartapplyToolDrag').html('').addClass('init').removeClass('disable')
    }

    drag.prototype.disable = function() {
        $('#chartapplyToolDrag').html('').addClass('disable')
    }

    drag.prototype.bindEvent = function() {
        var _this = this
        var isDrag = false
        var site = {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
        }

        $('#chartapplyToolDrag').on('touchstart', function(e) {
            var touch = e.originalEvent.targetTouches[0]
            // site.left = touch.pageX
            // site.top = touch.pageY
            site.left = touch.clientX
            site.top = touch.clientY
            isDrag = true
        })

        $('#chartapplyToolDrag').on('touchmove', function(e) {
            if (isDrag) {
                var touch = e.originalEvent.targetTouches[0]
                // site.right = touch.pageX + document.documentElement.scrollTop
                // site.bottom = touch.pageY + document.documentElement.scrollLeft
                site.right = touch.clientX
                site.bottom = touch.clientY
                _this.buildSite(site)
            }
        })

        $('#chartapplyToolDrag').on('touchend', function(e) {
            isDrag = false
            _this.buildResultPanel()
        })

        $('#chartapplyToolDrag').on('touchstart', '.success', function(e) {
            const scrollTop = parseInt(document.documentElement.scrollTop)
            const scrollLeft = parseInt(document.documentElement.scrollLeft)
            const resultSite = {
                left: parseInt(site.left) + scrollLeft,
                right: parseInt(site.right) + scrollLeft,
                top: parseInt(site.top) + scrollTop,
                bottom: parseInt(site.bottom) + scrollTop
            }
            console.log(resultSite)
            _this.option.callback(resultSite)
            _this.disable()
            e.preventDefault()
            e.stopPropagation()
        })

        $('#chartapplyToolDrag').on('touchstart', '.rebuild', function(e) {
            _this.rebuild()
            e.preventDefault()
            e.stopPropagation()
        })

        $('#chartapplyToolDrag').on('touchstart', '.cancel', function(e) {
            _this.option.callback(false)
            _this.disable()
            e.preventDefault()
            e.stopPropagation()
        })
    }

    drag.prototype.buildSite = function(site) {
        var topDiamond = this.buidlDiamond({
            top: 0,
            left: 0,
            right: 0,
            bottom: document.body.offsetHeight - site.top
        })
        var bottomDiamond = this.buidlDiamond({
            top: site.bottom,
            left: 0,
            right: 0,
            bottom: 0
        })
        var leftDiamond = this.buidlDiamond({
            top: site.top,
            left: 0,
            right: document.body.offsetWidth - site.left,
            bottom: document.body.offsetHeight - site.bottom
        })
        var rightDiamond = this.buidlDiamond({
            top: site.top,
            left: site.right,
            right: 0,
            bottom: document.body.offsetHeight - site.bottom
        })
        if ($('#chartapplyToolDrag').hasClass('init')){
            $('#chartapplyToolDrag').removeClass('init')
        }
        $('#chartapplyToolDrag').html(topDiamond + bottomDiamond + leftDiamond + rightDiamond)
    }

    drag.prototype.buidlDiamond = function(site) {
        return '<div class="diamonds" style="top:' + site.top + 'px;left:' + site.left + 'px;right:' + site.right + 'px;bottom:' + site.bottom + 'px"></div>'
    }

    drag.prototype.buildResultPanel = function() {
        $('#chartapplyToolDrag').append('<div class="tool-result"><div class="button success">确定</div><div class="button rebuild">重新截取</div><div class="button cancel">取消</div></div>')
    }

    window.Drag = function(option) {
        var p = new drag(option)
        p.init()
        return p
    }
})()