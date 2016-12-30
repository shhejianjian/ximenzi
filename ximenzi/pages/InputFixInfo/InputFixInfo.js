var simpleLib = require('../libs/simple-lib.js');
var route = "pages/InputFixInfo/InputFixInfo";



var onload = function () {
    console.log("onload")
};
// 当设备状态改变
var bindPickerChange = function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
};
var navigateToFixPage = function () {
    wx.navigateTo({
      url: '../FixSuccess/FixSuccess'
    })
};

Page({
  data:{
    array: ['宕机', '部分运转', '应用服务'],
    index:0,
  },
  
  onLoad:onload,
  navigateToFixPage:navigateToFixPage,
  bindPickerChange:bindPickerChange,
});