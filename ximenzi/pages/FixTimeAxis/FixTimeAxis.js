var simpleLib = require('../libs/simple-lib.js');
var route = "pages/FixTimeAxis/FixTimeAxis";


var axisList = [
    {
        axisSuccessTime: "2016-12-29 19:23",
        axisIsCurrent: false,
        status:false,
        name: "维修完成",
        
    },
    {
        axisSuccessTime: "2016-12-29 19:23",
        axisIsCurrent: true,
        status:true,
        name: "已定备件",
    },
    {
        axisSuccessTime: "2016-12-29 19:23",
        axisIsCurrent: false,
        status:true,
        name: "工程师现场维修中",
    },
    {
        axisSuccessTime: "2016-12-29 19:23",
        axisIsCurrent: false,
        status:true,
        name: "工程师张三在途中",
    },
    {
        axisSuccessTime: "2016-12-29 19:23",
        axisIsCurrent: false,
        status:true,
        name: "工程师张三预计1小时后上门预计1小时后上后上门预计1小时后上门",
    },
    {
        axisSuccessTime: "2016-12-29 19:23",
        axisIsCurrent: false,
        status:true,
        name: "工程师调派中",
    },
    {
        axisSuccessTime: "2016-12-29 19:23",
        axisIsCurrent: false,
        status:true,
        name: "人工报价确认中",
    },
    {
        axisSuccessTime: "2016-12-29 19:23",
        axisIsCurrent: false,
        status:true,
        name: "故障远程已解决",
    },
    {
        axisSuccessTime: "2016-12-29 19:23",
        axisIsCurrent: false,
        status:true,
        name: "技术澄清中",
    },
]; 

var initAxisList = function () {
    simpleLib.setData(route, {
        states: axisList
    });
};



var onload = function () {
    console.log("onload")
    initAxisList();
};

Page({
  data:{
      
  },
  
  onLoad:onload,
});