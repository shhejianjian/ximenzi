var simpleLib = require('../libs/simple-lib.js');
var route = "pages/Home/Home";


// 查询选项
var searchOptions = [
    {
        name: "报修",
        icon: "../../image/ScanCoding.png"
    },
    {
        name: "工单",
        icon: "../../image/sheet.png"
    },
    {
        name: "报告",
        icon: "../../image/writeReport.png",
    },
    {
        name: "故障",
        icon: "../../image/breakdown.png",
    }
];
var initSearchOptions = function () {
    simpleLib.setData(route, {
        searchOptions: searchOptions
    });
};

var searchOptionOnTap = function (event) {
    var dataset = event.currentTarget.dataset;
    var index = dataset.index;
    var searchOption = searchOptions[index];

    if(index == 0) {
        scanCode();
    } 
    if(index == 1) {
        navigateToSearchList();
    }
    if(index == 2) {

    }
    if(index == 3) {

    }

};

//扫码
var scanCode = function () {
    // wx.scanCode({
    //     success: (res) => {
            wx.navigateTo({
                url: '../EquiDetail/EquiDetail'
            })
    //         console.log(res)
    //     }
    // })
};

var navigateToSearchList = function () {
    wx.navigateTo({
        url: '../SearchList/SearchList'
    })
};

var onload = function () {
    initSearchOptions();
};

Page({
  data:{

    index:0,

    background: ['../../image/firstPage.png', '../../image/secondPage.png', '../../image/firstPage.png', '../../image/secondPage.png'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 5000,
    duration: 1200
  },
  
  onLoad:onload,
  searchOptionOnTap:searchOptionOnTap,
});

