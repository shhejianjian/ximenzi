var simpleLib = require('../libs/simple-lib.js');
var route = "pages/EquiDetail/EquiDetail";

//上传照片
var changePhoto = function (event) {
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
          console.log(res)
        }
    })
};
//打工程师电话
var callEngineerTelephone = function (e){
    
        wx.makePhoneCall({
            phoneNumber: "13262892516" 
        })
    
};
//打经理电话
var callManagerTelephone = function (e){
    
        wx.makePhoneCall({
            phoneNumber: "13262892511"
        })
    
};
var onload = function () {
    console.log("onload")
};

var navigateToFixPage = function () {
    wx.navigateTo({
        url: '../InputFixInfo/InputFixInfo'
    })
};

Page({
  data:{

  },
  
  onLoad:onload,
  navigateToFixPage:navigateToFixPage,
  changePhoto:changePhoto,
  callEngineerTelephone:callEngineerTelephone,
  callManagerTelephone:callManagerTelephone
});
