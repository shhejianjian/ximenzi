var simpleLib = require('../libs/simple-lib.js');
var route = "pages/FixSuccess/FixSuccess";



var onload = function () {
    console.log("onload")
};

var navigateToFixPage = function () {
    // wx.navigateTo({
    //     url: '../testInputFixInfo/testInputFixInfo'
    // })
    wx.navigateBack({
      delta: 3, // 回退前 delta(默认为1) 页面
    })
};

Page({
  data:{

  },
  
  onLoad:onload,
  navigateToFixPage:navigateToFixPage,
});