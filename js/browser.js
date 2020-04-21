'use strict';

function pageReady() {
  var bg = chrome.extension.getBackgroundPage()

  function initBrowser() {
    if (bg.actionInfo.checkIsLogin()) {
      $('.login').addClass('hidden')
      $('.menu').removeClass('hidden')
    } else {
      $('.menu').addClass('hidden')
      $('.login').removeClass('hidden')
    }
  }

  $('#collectCut').click(function() {
    bg.actionInfo.collectCut()
    window.close()
  })

  $('#collectAll').click(function() {
    bg.actionInfo.collectAll()
    window.close()
  })

  $('#loginBtn').click(function() {
    var phone = $('#phone').val().trim()
    var code = $('#code').val().trim()
    bg.actionInfo.login(phone, code, function() {
      initBrowser()
    })
  })

  initBrowser()
}

document.addEventListener('DOMContentLoaded', pageReady)
