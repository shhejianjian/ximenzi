var simpleLib = require('../libs/simple-lib.js');
var route = "pages/MyCenter/MyCenter";


var onload = function (){
    simpleLib.setData(route, {
        userinfo: simpleLib.getGlobalData().userInfo,
        iconUrl: simpleLib.getGlobalData().userInfo.avatarUrl
    });
    console.log(this.data.userinfo.avatarUrl)
};


Page({
  data:{
      userinfo:'',
      iconUrl:'',
  },
  onLoad:onload,
})