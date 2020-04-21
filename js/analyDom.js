/**
 * 页面节点分析
 */
(function() {
    var defaultStyle = {
        alignContent: 'normal',
        alignItems: 'normal',
        alignSelf: 'auto',
        alignmentBaseline: 'auto',
        all: '',
        animation: 'none 0s ease 0s 1 normal none running',
        animationDelay: '0s',
        animationDirection: 'normal',
        animationDuration: '0s',
        animationFillMode: 'none',
        animationIterationCount: '1',
        animationName: 'none',
        animationPlayState: 'running',
        animationTimingFunction: 'ease',
        backdropFilter: 'none',
        backfaceVisibility: 'visible',
        background: 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box',
        backgroundAttachment: 'scroll',
        backgroundBlendMode: 'normal',
        backgroundClip: 'border-box',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        backgroundImage: 'none',
        backgroundOrigin: 'padding-box',
        backgroundPosition: '0% 0%',
        backgroundPositionX: '0%',
        backgroundPositionY: '0%',
        backgroundRepeat: 'repeat',
        backgroundRepeatX: '',
        backgroundRepeatY: '',
        backgroundSize: 'auto',
        baselineShift: '0px',
        blockSize: '950px',
        border: '0px none rgb(102, 102, 102)',
        borderBlockEnd: '0px none rgb(102, 102, 102)',
        borderBlockEndColor: 'rgb(102, 102, 102)',
        borderBlockEndStyle: 'none',
        borderBlockEndWidth: '0px',
        borderBlockStart: '0px none rgb(102, 102, 102)',
        borderBlockStartColor: 'rgb(102, 102, 102)',
        borderBlockStartStyle: 'none',
        borderBlockStartWidth: '0px',
        borderBottom: '0px none rgb(102, 102, 102)',
        borderBottomColor: 'rgb(102, 102, 102)',
        borderBottomLeftRadius: '0px',
        borderBottomRightRadius: '0px',
        borderBottomStyle: 'none',
        borderBottomWidth: '0px',
        borderCollapse: 'separate',
        borderColor: 'rgb(102, 102, 102)',
        borderImage: 'none',
        borderImageOutset: '0px',
        borderImageRepeat: 'stretch',
        borderImageSlice: '100%',
        borderImageSource: 'none',
        borderImageWidth: '1',
        borderInlineEnd: '0px none rgb(102, 102, 102)',
        borderInlineEndColor: 'rgb(102, 102, 102)',
        borderInlineEndStyle: 'none',
        borderInlineEndWidth: '0px',
        borderInlineStart: '0px none rgb(102, 102, 102)',
        borderInlineStartColor: 'rgb(102, 102, 102)',
        borderInlineStartStyle: 'none',
        borderInlineStartWidth: '0px',
        borderLeft: '0px none rgb(102, 102, 102)',
        borderLeftColor: 'rgb(102, 102, 102)',
        borderLeftStyle: 'none',
        borderLeftWidth: '0px',
        borderRadius: '0px',
        borderRight: '0px none rgb(102, 102, 102)',
        borderRightColor: 'rgb(102, 102, 102)',
        borderRightStyle: 'none',
        borderRightWidth: '0px',
        borderSpacing: '0px 0px',
        borderStyle: 'none',
        borderTop: '0px none rgb(102, 102, 102)',
        borderTopColor: 'rgb(102, 102, 102)',
        borderTopLeftRadius: '0px',
        borderTopRightRadius: '0px',
        borderTopStyle: 'none',
        borderTopWidth: '0px',
        borderWidth: '0px',
        bottom: 'auto',
        boxShadow: 'none',
        boxSizing: 'border-box',
        breakAfter: 'auto',
        breakBefore: 'auto',
        breakInside: 'auto',
        bufferedRendering: 'auto',
        captionSide: 'top',
        caretColor: 'rgb(102, 102, 102)',
        clear: 'none',
        clip: 'auto',
        clipPath: 'none',
        clipRule: 'nonzero',
        color: 'rgb(102, 102, 102)',
        colorInterpolation: 'srgb',
        colorInterpolationFilters: 'linearrgb',
        colorRendering: 'auto',
        columnCount: 'auto',
        columnFill: 'balance',
        columnGap: 'normal',
        columnRule: '0px none rgb(102, 102, 102)',
        columnRuleColor: 'rgb(102, 102, 102)',
        columnRuleStyle: 'none',
        columnRuleWidth: '0px',
        columnSpan: 'none',
        columnWidth: 'auto',
        columns: 'auto auto',
        contain: 'none',
        content: 'normal',
        counterIncrement: 'none',
        counterReset: 'none',
        cursor: 'auto',
        cx: '0px',
        cy: '0px',
        d: 'none',
        direction: 'ltr',
        display: 'block',
        dominantBaseline: 'auto',
        emptyCells: 'show',
        fill: 'rgb(0, 0, 0)',
        fillOpacity: '1',
        fillRule: 'nonzero',
        filter: 'none',
        flex: '0 1 auto',
        flexBasis: 'auto',
        flexDirection: 'row',
        flexFlow: 'row nowrap',
        flexGrow: '0',
        flexShrink: '1',
        flexWrap: 'nowrap',
        float: 'none',
        floodColor: 'rgb(0, 0, 0)',
        floodOpacity: '1',
        font: '',
        fontDisplay: '',
        fontFamily: '',
        fontFeatureSettings: 'normal',
        fontKerning: 'auto',
        fontOpticalSizing: 'auto',
        fontSize: '12px',
        fontStretch: '100%',
        fontStyle: 'normal',
        fontVariant: 'normal',
        fontVariantCaps: 'normal',
        fontVariantEastAsian: 'normal',
        fontVariantLigatures: 'normal',
        fontVariantNumeric: 'normal',
        fontVariationSettings: 'normal',
        fontWeight: '400',
        gap: 'normal',
        grid: 'none / none / none / row / auto / auto',
        gridArea: 'auto / auto / auto / auto',
        gridAutoColumns: 'auto',
        gridAutoFlow: 'row',
        gridAutoRows: 'auto',
        gridColumn: 'auto / auto',
        gridColumnEnd: 'auto',
        gridColumnGap: 'normal',
        gridColumnStart: 'auto',
        gridGap: 'normal normal',
        gridRow: 'auto / auto',
        gridRowEnd: 'auto',
        gridRowGap: 'normal',
        gridRowStart: 'auto',
        gridTemplate: 'none / none / none',
        gridTemplateAreas: 'none',
        gridTemplateColumns: 'none',
        gridTemplateRows: 'none',
        height: 'auto',
        hyphens: 'manual',
        imageRendering: 'auto',
        inlineSize: '0px',
        isolation: 'auto',
        justifyContent: 'normal',
        justifyItems: 'normal',
        justifySelf: 'auto',
        left: 'auto',
        letterSpacing: 'normal',
        lightingColor: 'rgb(255, 255, 255)',
        lineBreak: 'auto',
        lineHeight: 'normal',
        listStyle: 'outside none disc',
        listStyleImage: 'none',
        listStylePosition: 'outside',
        listStyleType: 'disc',
        margin: '0px',
        marginBlockEnd: '0px',
        marginBlockStart: '0px',
        marginBottom: '0px',
        marginInlineEnd: '0px',
        marginInlineStart: '0px',
        marginLeft: '0px',
        marginRight: '0px',
        marginTop: '0px',
        marker: 'none',
        markerEnd: 'none',
        markerMid: 'none',
        markerStart: 'none',
        mask: 'none',
        maskType: 'luminance',
        maxBlockSize: 'none',
        maxHeight: 'none',
        maxInlineSize: 'none',
        maxWidth: 'none',
        maxZoom: '',
        minBlockSize: '0px',
        minHeight: '0px',
        minInlineSize: '0px',
        minWidth: '0px',
        minZoom: '',
        mixBlendMode: 'normal',
        objectFit: 'fill',
        objectPosition: '50% 50%',
        offset: 'none 0px auto 0deg',
        offsetDistance: '0px',
        offsetPath: 'none',
        offsetRotate: 'auto 0deg',
        opacity: '1',
        order: '0',
        orientation: '',
        orphans: '2',
        outline: 'rgb(102, 102, 102) none 0px',
        outlineColor: 'rgb(102, 102, 102)',
        outlineOffset: '0px',
        outlineStyle: 'none',
        outlineWidth: '0px',
        overflow: 'visible',
        overflowAnchor: 'auto',
        overflowWrap: 'normal',
        overflowX: 'visible',
        overflowY: 'visible',
        overscrollBehavior: 'auto',
        overscrollBehaviorBlock: 'auto',
        overscrollBehaviorInline: 'auto',
        overscrollBehaviorX: 'auto',
        overscrollBehaviorY: 'auto',
        padding: '0px',
        paddingBlockEnd: '0px',
        paddingBlockStart: '0px',
        paddingBottom: '0px',
        paddingInlineEnd: '0px',
        paddingInlineStart: '0px',
        paddingLeft: '0px',
        paddingRight: '0px',
        paddingTop: '0px',
        page: '',
        pageBreakAfter: 'auto',
        pageBreakBefore: 'auto',
        pageBreakInside: 'auto',
        paintOrder: 'normal',
        perspective: 'none',
        perspectiveOrigin: '50% 50%',
        placeContent: 'normal',
        placeItems: 'normal',
        placeSelf: 'auto',
        pointerEvents: 'auto',
        position: 'static',
        quotes: '',
        r: '0px',
        resize: 'none',
        right: 'auto',
        rowGap: 'normal',
        rx: 'auto',
        ry: 'auto',
        scrollBehavior: 'auto',
        scrollMargin: '0px',
        scrollMarginBlock: '0px',
        scrollMarginBlockEnd: '0px',
        scrollMarginBlockStart: '0px',
        scrollMarginBottom: '0px',
        scrollMarginInline: '0px',
        scrollMarginInlineEnd: '0px',
        scrollMarginInlineStart: '0px',
        scrollMarginLeft: '0px',
        scrollMarginRight: '0px',
        scrollMarginTop: '0px',
        scrollPadding: 'auto',
        scrollPaddingBlock: 'auto',
        scrollPaddingBlockEnd: 'auto',
        scrollPaddingBlockStart: 'auto',
        scrollPaddingBottom: 'auto',
        scrollPaddingInline: 'auto',
        scrollPaddingInlineEnd: 'auto',
        scrollPaddingInlineStart: 'auto',
        scrollPaddingLeft: 'auto',
        scrollPaddingRight: 'auto',
        scrollPaddingTop: 'auto',
        scrollSnapAlign: 'none',
        scrollSnapStop: 'normal',
        scrollSnapType: 'none',
        shapeImageThreshold: '0',
        shapeMargin: '0px',
        shapeOutside: 'none',
        shapeRendering: 'auto',
        size: '',
        speak: 'normal',
        src: '',
        stopColor: 'rgb(0, 0, 0)',
        stopOpacity: '1',
        stroke: 'none',
        strokeDasharray: 'none',
        strokeDashoffset: '0px',
        strokeLinecap: 'butt',
        strokeLinejoin: 'miter',
        strokeMiterlimit: '4',
        strokeOpacity: '1',
        strokeWidth: '1px',
        tabSize: '8',
        tableLayout: 'auto',
        textAlign: 'start',
        textAlignLast: 'auto',
        textAnchor: 'start',
        textCombineUpright: 'none',
        textDecoration: 'none solid rgb(102, 102, 102)',
        textDecorationColor: 'rgb(102, 102, 102)',
        textDecorationLine: 'none',
        textDecorationSkipInk: 'auto',
        textDecorationStyle: 'solid',
        textIndent: '0px',
        textOrientation: 'mixed',
        textOverflow: 'clip',
        textRendering: 'auto',
        textShadow: 'none',
        textSizeAdjust: 'auto',
        textTransform: 'none',
        textUnderlinePosition: 'auto',
        top: 'auto',
        touchAction: 'auto',
        transform: 'none',
        transformBox: 'view-box',
        transformOrigin: '50% 50%',
        transformStyle: 'flat',
        transition: 'all 0s ease 0s',
        transitionDelay: '0s',
        transitionDuration: '0s',
        transitionProperty: 'all',
        transitionTimingFunction: 'ease',
        unicodeBidi: 'normal',
        unicodeRange: '',
        userSelect: 'auto',
        userZoom: '',
        vectorEffect: 'none',
        verticalAlign: 'baseline',
        visibility: 'visible',
        webkitAlignContent: 'normal',
        webkitAlignItems: 'normal',
        webkitAlignSelf: 'auto',
        webkitAnimation: 'none 0s ease 0s 1 normal none running',
        webkitAnimationDelay: '0s',
        webkitAnimationDirection: 'normal',
        webkitAnimationDuration: '0s',
        webkitAnimationFillMode: 'none',
        webkitAnimationIterationCount: '1',
        webkitAnimationName: 'none',
        webkitAnimationPlayState: 'running',
        webkitAnimationTimingFunction: 'ease',
        webkitAppRegion: 'none',
        webkitAppearance: 'none',
        webkitBackfaceVisibility: 'visible',
        webkitBackgroundClip: 'border-box',
        webkitBackgroundOrigin: 'padding-box',
        webkitBackgroundSize: 'auto',
        webkitBorderAfter: '0px none rgb(102, 102, 102)',
        webkitBorderAfterColor: 'rgb(102, 102, 102)',
        webkitBorderAfterStyle: 'none',
        webkitBorderAfterWidth: '0px',
        webkitBorderBefore: '0px none rgb(102, 102, 102)',
        webkitBorderBeforeColor: 'rgb(102, 102, 102)',
        webkitBorderBeforeStyle: 'none',
        webkitBorderBeforeWidth: '0px',
        webkitBorderBottomLeftRadius: '0px',
        webkitBorderBottomRightRadius: '0px',
        webkitBorderEnd: '0px none rgb(102, 102, 102)',
        webkitBorderEndColor: 'rgb(102, 102, 102)',
        webkitBorderEndStyle: 'none',
        webkitBorderEndWidth: '0px',
        webkitBorderHorizontalSpacing: '0px',
        webkitBorderImage: 'none',
        webkitBorderRadius: '0px',
        webkitBorderStart: '0px none rgb(102, 102, 102)',
        webkitBorderStartColor: 'rgb(102, 102, 102)',
        webkitBorderStartStyle: 'none',
        webkitBorderStartWidth: '0px',
        webkitBorderTopLeftRadius: '0px',
        webkitBorderTopRightRadius: '0px',
        webkitBorderVerticalSpacing: '0px',
        webkitBoxAlign: 'stretch',
        webkitBoxDecorationBreak: 'slice',
        webkitBoxDirection: 'normal',
        webkitBoxFlex: '0',
        webkitBoxOrdinalGroup: '1',
        webkitBoxOrient: 'horizontal',
        webkitBoxPack: 'start',
        webkitBoxReflect: 'none',
        webkitBoxShadow: 'none',
        webkitBoxSizing: 'border-box',
        webkitClipPath: 'none',
        webkitColumnBreakAfter: 'auto',
        webkitColumnBreakBefore: 'auto',
        webkitColumnBreakInside: 'auto',
        webkitColumnCount: 'auto',
        webkitColumnGap: 'normal',
        webkitColumnRule: '0px none rgb(102, 102, 102)',
        webkitColumnRuleColor: 'rgb(102, 102, 102)',
        webkitColumnRuleStyle: 'none',
        webkitColumnRuleWidth: '0px',
        webkitColumnSpan: 'none',
        webkitColumnWidth: 'auto',
        webkitColumns: 'auto auto',
        webkitFilter: 'none',
        webkitFlex: '0 1 auto',
        webkitFlexBasis: 'auto',
        webkitFlexDirection: 'row',
        webkitFlexFlow: 'row nowrap',
        webkitFlexGrow: '0',
        webkitFlexShrink: '1',
        webkitFlexWrap: 'nowrap',
        webkitFontFeatureSettings: 'normal',
        webkitFontSizeDelta: '',
        webkitFontSmoothing: 'auto',
        webkitHighlight: 'none',
        webkitHyphenateCharacter: 'auto',
        webkitJustifyContent: 'normal',
        webkitLineBreak: 'auto',
        webkitLineClamp: 'none',
        webkitLocale: 'auto',
        webkitLogicalHeight: '0px',
        webkitLogicalWidth: '375px',
        webkitMarginAfter: '0px',
        webkitMarginAfterCollapse: 'collapse',
        webkitMarginBefore: '0px',
        webkitMarginBeforeCollapse: 'collapse',
        webkitMarginBottomCollapse: 'collapse',
        webkitMarginCollapse: '',
        webkitMarginEnd: '0px',
        webkitMarginStart: '0px',
        webkitMarginTopCollapse: 'collapse',
        webkitMask: '',
        webkitMaskBoxImage: 'none',
        webkitMaskBoxImageOutset: '0px',
        webkitMaskBoxImageRepeat: 'stretch',
        webkitMaskBoxImageSlice: '0 fill',
        webkitMaskBoxImageSource: 'none',
        webkitMaskBoxImageWidth: 'auto',
        webkitMaskClip: 'border-box',
        webkitMaskComposite: 'source-over',
        webkitMaskImage: 'none',
        webkitMaskOrigin: 'border-box',
        webkitMaskPosition: '0% 0%',
        webkitMaskPositionX: '0%',
        webkitMaskPositionY: '0%',
        webkitMaskRepeat: 'repeat',
        webkitMaskRepeatX: '',
        webkitMaskRepeatY: '',
        webkitMaskSize: 'auto',
        webkitMaxLogicalHeight: 'none',
        webkitMaxLogicalWidth: 'none',
        webkitMinLogicalHeight: '0px',
        webkitMinLogicalWidth: '0px',
        webkitOpacity: '1',
        webkitOrder: '0',
        webkitPaddingAfter: '0px',
        webkitPaddingBefore: '0px',
        webkitPaddingEnd: '0px',
        webkitPaddingStart: '0px',
        webkitPerspective: 'none',
        webkitPerspectiveOrigin: '50% 50%',
        webkitPerspectiveOriginX: '',
        webkitPerspectiveOriginY: '',
        webkitPrintColorAdjust: 'economy',
        webkitRtlOrdering: 'logical',
        webkitRubyPosition: 'before',
        webkitShapeImageThreshold: '0',
        webkitShapeMargin: '0px',
        webkitShapeOutside: 'none',
        webkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
        webkitTextCombine: 'none',
        webkitTextDecorationsInEffect: 'none',
        webkitTextEmphasis: '',
        webkitTextEmphasisColor: 'rgb(102, 102, 102)',
        webkitTextEmphasisPosition: 'over right',
        webkitTextEmphasisStyle: 'none',
        webkitTextFillColor: 'rgb(102, 102, 102)',
        webkitTextOrientation: 'vertical-right',
        webkitTextSecurity: 'none',
        webkitTextSizeAdjust: '100%',
        webkitTextStroke: '',
        webkitTextStrokeColor: 'rgb(102, 102, 102)',
        webkitTextStrokeWidth: '0px',
        webkitTransform: 'none',
        webkitTransformOrigin: '50% 50% 50%',
        webkitTransformOriginX: '',
        webkitTransformOriginY: '',
        webkitTransformOriginZ: '',
        webkitTransformStyle: 'flat',
        webkitTransition: 'all 0s ease 0s',
        webkitTransitionDelay: '0s',
        webkitTransitionDuration: '0s',
        webkitTransitionProperty: 'all',
        webkitTransitionTimingFunction: 'ease',
        webkitUserDrag: 'auto',
        webkitUserModify: 'read-only',
        webkitUserSelect: 'auto',
        webkitWritingMode: 'horizontal-tb',
        whiteSpace: 'normal',
        widows: '2',
        width: '375px',
        willChange: 'auto',
        wordBreak: 'normal',
        wordSpacing: '0px',
        wordWrap: 'normal',
        writingMode: 'horizontal-tb',
        x: '0px',
        y: '0px',
        zIndex: 'auto',
        zoom: '1'
    }

    var analyDom = function() {
        this.ignoreNodeList = ['SCRIPT', 'STYLE', 'VIDEO', 'AUDIO', 'CANVAS']
    }

    analyDom.prototype.getDomData = function(initDom) {
        var domData = this.parseDomData(0, initDom)
        return domData
    }

    // 解析页面数据
    analyDom.prototype.parseDomData = function(count, dom) {
        if (count > 10000000 || this.isIgnoreNode(dom)) {
            return false
        }
        var domData = {
            nodeName: dom[0].nodeName,
            className: dom[0].className,
            style: this.getStyle(dom, dom[0].nodeName),
            data: '',
            childList: []
        }
        if (dom.children().length) {
            for (var i = 0; i < dom.children().length; i++) {
                var child = this.parseDomData(count++, dom.children().eq(i))
                if (child) {
                    domData.childList.push(child)
                }
            }
        }
        // 识别图片及其样式
        if (domData.nodeName === 'IMG') {
            domData.data = dom[0].src
            domData.style['width'] = dom[0].width
            domData.style['height'] = dom[0].height
        }
        // 识别文本框
        if (domData.nodeName === 'INPUT') {
            domData.data = dom[0].placeholder
        }
        // 识别没有标签的文本
        if (dom[0].childNodes.length > dom.children().length) {
            for (var i = 0; i < dom[0].childNodes.length; i++) {
                if (dom[0].childNodes[i].nodeName === '#text') {
                    var text = dom[0].childNodes[i].data
                    if (!this.isEmptyText(text)) {
                        domData.childList.push({
                            nodeName: 'SPAN',
                            className: dom[0].childNodes[i].className,
                            style: {},
                            data: text,
                            childList: []
                        })
                    }
                }
            }
        }
        return domData
    }

    // 检测是否空文本
    analyDom.prototype.isEmptyText = function(text) {
        var reg = new RegExp('↵','g')
        if (text === '' || text.trim() === '' || text.replace(reg,'').trim() === '') {
            return true
        }
        return false
    }

    // 检测忽略节点
    analyDom.prototype.isIgnoreNode = function(dom) {
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

    // 获取样式
    analyDom.prototype.getStyle = function(dom, nodeName) {
        if (dom.length) {
            var domStyle = {}
            var parentDom = dom.parent()
            if (parentDom.length) {
                domStyle = this.getDomStyle(dom[0], parentDom[0], nodeName)
            } else {
                domStyle = this.getDomStyle(dom[0], false, nodeName)
            }
            return this.parseStyle(domStyle)
        } else {
            return {}
        }
    }

    // 解析样式
    analyDom.prototype.parseStyle = function(style) {
        var res = {}
        for (var key in style) {
            if (key !== 'length' && key !== 'cssText' && isNaN(parseInt(key)) && style[key] !== '' && style[key] !== null) {
                res[key] = style[key]
            }
        }
        return res
    }

    analyDom.prototype.getDomStyle = function(dom, parentDom, nodeName) {
        var allStyleObj = {}
        var tempStyle = {}
        var parentStyle = {}
        var domStyle = document.defaultView.getComputedStyle(dom, null)
        if (parentDom) {
            parentStyle = document.defaultView.getComputedStyle(parentDom, null)
        }
        // 当没有父元素像素且不为默认样式 或 不等同父元素样式时才统计入样式 或 等同于父元素样式但不等同于默认样式
        for (var key in defaultStyle) {
            if ((!parentStyle[key] && defaultStyle[key] !== domStyle[key]) || (parentStyle[key] && parentStyle[key] !== domStyle[key]) || (parentStyle[key] && parentStyle[key] === domStyle[key] && parentStyle[key] !== domStyle[key])){
                tempStyle[key] = domStyle[key]
            } else if (key === 'height' || key === 'width' || key === 'position') {
                tempStyle[key] = domStyle[key]
            }
        }
        for (var key in tempStyle) {
            if (isNaN(Number(key)) && (typeof tempStyle[key] === 'string' || typeof tempStyle[key] === 'number')) {
                if (!this.checkIsIgnoreStyleParam(key)) {
                    allStyleObj[key] = tempStyle[key]
                }
            }
        }
        return this.parseStyleValue(allStyleObj, nodeName)
    }

    analyDom.prototype.parseStyleValue = function(styleObj, nodeName) {
        var tempObject = {}
        for (var key in styleObj) {
            if (key === 'backgroundImage' && styleObj[key]) {
                tempObject[key] = styleObj[key].replace('url("','').replace('")', '')
                continue
            }
            if ((key === 'border' || key === 'columnRule' || 'textDecoration') && styleObj[key].indexOf('none') > -1) {
                continue
            }
            if ((key === 'perspectiveOrigin' || key === 'transformOrigin') && !styleObj['transform']) {
                continue
            }
            if (nodeName !== 'INPUT' && key === 'caretColor') {
                continue
            }
            if (styleObj['static'] === 'static' && (key === 'top' || key === 'left' || key === 'right' || key === 'bottom' || key === 'zIndex')) {
                continue
            }
            tempObject[key] = styleObj[key]
        }
        return tempObject
    }

    analyDom.prototype.checkHalf = function(source, x, y) {
        if (source) {
            var sourceList = source.split(' ')
            if (sourceList.length > 1) {
                if (parseInt(sourceList[0]) === parseInt(x) && parseInt(sourceList[1]) === parseInt(y)) {
                    return true
                }
            }
        }
        return false
    }

    analyDom.prototype.checkIsIgnoreStyleParam = function(key) {
        var ignoreList = [
            'background',
            'backgroundPositionX',
            'backgroundPositionY',
            'blockSize',
            'borderBlockEnd',
            'borderBlockEndColor',
            'borderBlockEndStyle',
            'borderBlockEndWidth',
            'borderBlockStart',
            'borderBlockStartColor',
            'borderBlockStartStyle',
            'borderBlockStartWidth',
            'borderBottom',
            'borderBottomColor',
            'borderBottomLeftRadius',
            'borderBottomRightRadius',
            'borderBottomStyle',
            'borderBottomWidth',
            'borderColor',
            'borderInlineEnd',
            'borderInlineEndColor',
            'borderInlineEndStyle',
            'borderInlineEndWidth',
            'borderInlineStart',
            'borderInlineStartColor',
            'borderInlineStartStyle',
            'borderInlineStartWidth',
            'borderLeft',
            'borderLeftColor',
            'borderLeftStyle',
            'borderLeftWidth',
            'borderRight',
            'borderRightColor',
            'borderRightStyle',
            'borderRightWidth',
            'borderStyle',
            'borderTop',
            'borderTopColor',
            'borderTopLeftRadius',
            'borderTopRightRadius',
            'borderTopStyle',
            'borderTopWidth',
            'borderWidth',
            'columnRuleColor',
            'columnRuleStyle',
            'columnRuleWidth',
            'font',
            'fontFamily',
            'inlineSize',
            'marginBlockEnd',
            'marginBlockStart',
            'marginBottom',
            'marginInlineEnd',
            'marginInlineStart',
            'marginLeft',
            'marginRight',
            'marginTop',
            'maxInlineSize',
            'minInlineSize',
            'outlineColor',
            'outlineOffset',
            'outlineStyle',
            'outlineWidth',
            'overflowX',
            'overflowY',
            'paddingBlockEnd',
            'paddingBlockStart',
            'paddingBottom',
            'paddingInlineEnd',
            'paddingInlineStart',
            'paddingLeft',
            'paddingRight',
            'paddingTop',
            'textDecorationColor',
            'textDecorationLine',
            'textDecorationSkipInk',
            'textDecorationStyle',
            'webkitBackgroundSize',
            'webkitBorderAfter',
            'webkitBorderAfterColor',
            'webkitBorderAfterStyle',
            'webkitBorderAfterWidth',
            'webkitBorderBefore',
            'webkitBorderBeforeColor',
            'webkitBorderBeforeStyle',
            'webkitBorderBeforeWidth',
            'webkitBorderBottomLeftRadius',
            'webkitBorderBottomRightRadius',
            'webkitBorderEnd',
            'webkitBorderEndColor',
            'webkitBorderEndStyle',
            'webkitBorderEndWidth',
            'webkitBorderImage',
            'webkitBorderRadius',
            'webkitBorderStart',
            'webkitBorderStartColor',
            'webkitBorderStartStyle',
            'webkitBorderStartWidth',
            'webkitBorderTopLeftRadius',
            'webkitBorderTopRightRadius',
            'webkitColumnBreakAfter',
            'webkitColumnBreakBefore',
            'webkitColumnBreakInside',
            'webkitColumnCount',
            'webkitColumnGap',
            'webkitColumnRule',
            'webkitColumnRuleColor',
            'webkitColumnRuleStyle',
            'webkitColumnRuleWidth',
            'webkitColumnSpan',
            'webkitColumnWidth',
            'webkitColumns',
            'webkitLogicalHeight',
            'webkitLogicalWidth',
            'webkitMarginAfter',
            'webkitMarginAfterCollapse',
            'webkitMarginBefore',
            'webkitMarginBeforeCollapse',
            'webkitMarginBottomCollapse',
            'webkitMarginCollapse',
            'webkitMarginEnd',
            'webkitMarginStart',
            'webkitMarginTopCollapse',
            'webkitPaddingAfter',
            'webkitPaddingBefore',
            'webkitPaddingEnd',
            'webkitPaddingStart',
            'webkitPerspectiveOrigin',
            'webkitPerspectiveOriginX',
            'webkitPerspectiveOriginY',
            'webkitTextEmphasis',
            'webkitTextEmphasisColor',
            'webkitTextEmphasisPosition',
            'webkitTextEmphasisStyle',
            'webkitTextFillColor',
            'webkitTextSizeAdjust',
            'webkitTextStrokeColor',
            'webkitTransform',
            'webkitTransformOrigin',
            'webkitTransformOriginX',
            'webkitTransformOriginY',
            'webkitTransformOriginZ',
            'webkitTransformStyle',
            'webkitUserSelect',
            'webkitWritingMode',
            'cssText',
            'length'
        ]
        for (var i = 0; i < ignoreList.length; i++) {
            if (key === ignoreList[i]) {
                return true
            }
        }
        return false
    }

    window.AnalyDom = function() {
        var p = new analyDom()
        return p
    }

})()