var simpleLib = require('../libs/simple-lib.js');
var route = "pages/SearchList/SearchList";


var billList = [
    {
        billStatus: "技术澄清中",
        billNumber: "000000001",
        billStartTime: "12-28 12:23",
        billSuccessTime: "2016-12-29",
        billPerson: "王五",
        billEquipType:"核磁共振设备",
        isHidden:false,
    },
    {
        billStatus: "人工报价确认中",
        billNumber: "000000002",
        billStartTime: "12-28 13:23",
        billSuccessTime: "2016-12-29",
        billPerson: "赵六",
        billEquipType:"核磁共振设备",
        isHidden:true,
    },
    {
        billStatus: "工程师调派中",
        billNumber: "000000003",
        billStartTime: "12-28 12:43",
        billSuccessTime: "2016-12-29",
        billPerson: "钱七",
        billEquipType:"核磁共振设备",
        isHidden:true,
    },
    {
        billStatus: "维修完成",
        billNumber: "000000004",
        billStartTime: "12-28 12:33",
        billSuccessTime: "2016-12-29",
        billPerson: "李四",
        billEquipType:"核磁共振设备",
        isHidden:true,
    }
]; 

var initBillList = function () {
    if(simpleLib.getGlobalData().isAddNewSheet){
        billList[0].isHidden = false;
    } else {
        billList[0].isHidden = true;
    }
    simpleLib.setData(route, {
        billLists: billList
    });
};

var navigateToDetail = function (e) {
    var index = e.currentTarget.dataset.index;
    if(index == 0){
        simpleLib.getGlobalData().isAddNewSheet = false;
    }
    wx.navigateTo({
      url: '../FixTimeAxis/FixTimeAxis'
    })
};


var onload = function () {
    
    initBillList();
    // simpleLib.setData(route,{
    //     isHiddenPoint:simpleLib.getGlobalData().isAddNewSheet
    // })
};

var onShow = function (){
    initBillList();
};

Page({
  data:{
    //   isHiddenPoint:false,
  },
  
  onLoad:onload,
  onShow:onShow,
  navigateToDetail:navigateToDetail,
});