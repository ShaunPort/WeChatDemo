var common=require('../../utils/common.js')
Page({
  data:{
    swiperImg:[
      {src:'https://www.ojc.zj.cn/UploadFile/202105/20210520092352135.jpg'},
      {src:'https://www.ojc.zj.cn/UploadFile/202105/202105170842579903_sy.JPG'},
      {src:'https://www.ojc.zj.cn/UploadFile/202105/202105141614558190_sy.jpg'}
    ]
  },
  goToDetail:function(e){
    let id=e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../detail/detail?id='+id,
    })
  },
  onLoad:function(options){
    let list=common.getNewsList()
    this.setData({newsList:list})
  }
})