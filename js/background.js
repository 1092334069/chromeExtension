var userIdStr = ''
var token = ''

function parseChromeData(data) {
    $.ajax({
        url: 'http://aisqueezepage.com:8090/api/tool/chromeToWeipage',
        type: 'post',
        data: {
            chromeData: JSON.stringify(data)
        },
        dataType: 'JSON',
        success: function(res) {
            if (res && res.code === 200 && res.data){
                insertWeipage({
                    name: '1',
                    describes: '',
                    cover: 'http://hbimg.b0.upaiyun.com/2e5bbdfd2c380c468fe9b05f985b890b35cf74d519a98-WPlKO2_fw236',
                    pageName: '1',
                    data: {
                        weipage: {
                            name: '',
                            describes: '',
                            cover: '',
                            pageName: '',
                            backgroundColor: res.data.style.backgroundColor || '',
                            interfaceList: [],
                            scrollEvent: {
                                eventList: []
                            },
                            countEvent: {
                                eventList: []
                            }
                        },
                        pluginList: res.data.pluginList,
                        interfaceTree: []
                    }
                }, function(res) {
                    if (res && res.code === 200) {
                        console.log('解析成功')
                    } else {
                        userIdStr = ''
                        token = ''
                    }
                }, function() {
                    console.log('解析失败')
                })
            }
            console.log(res)
        },
        error: function() {
            console.log('解析失败')
        }
    })
}

function insertWeipage(param, callback, errorCallback) {
    $.ajax({
        url: 'http://aisqueezepage.com:8090/api/weipage/insert',
        type: 'post',
        data: {
            name: param.name,
            describes: param.describes,
            cover: param.cover,
            pageName: param.pageName,
            data: JSON.stringify(param.data)
        },
        dataType: 'JSON',
        success: function(res) {
            if (res && res.code === 200 && res.data) {
                callback(res.data)
            } else if (res) {
                errorCallback(res.message)
            } else {
                errorCallback()
            }
        },
        error: function() {
            errorCallback()
        }
    })
}

var actionInfo = {
    checkIsLogin: function() {
        if (userIdStr && token) {
            return true
        } else {
            return false
        }
    },
    login: function(phone, code, callback) {
        $.ajax({
            url: 'http://aisqueezepage.com:8090/api/login/phoneCode',
            type: 'post',
            data: {
                phone: phone,
                code: code
            },
            dataType: 'JSON',
            success: function(res) {
                console.log(res)
                if (res.code === 200) {
                    userIdStr = res.data.userIdStr
                    token = res.data.token
                    callback()
                }
            }
        })
    },
    collectCut: function() {
        this.commonEvent('collectCut', '', function(res) {
            console.log(res)
            if (res) {
                parseChromeData(res)
            }
        })
    },
    collectAll: function() {
        this.commonEvent('collectAll', '', function(res) {
            console.log(res)
            if (res) {
                parseChromeData(res)
            }
        })
    },
    commonEvent: function(event, data, callback) {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            console.log(tabs)
            chrome.tabs.sendRequest(tabs[0].id, {
                event,
                data
            }, callback)
        })
    }
}
