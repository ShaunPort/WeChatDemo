// pages/detail/detail.js
var common = require('../../utils/common.js')
Page({
  // 添加到收藏夹
  addFavorites: function(){
    let article = this.data.article
    wx.setStorageSync(article.id,article)
    this.setData({isAdd:true})
  },
  //取消收藏
  cancelFavorites:function(){
    let article=this.data.article
    wx.removeStorageSync(article.id)
    this.setData({isAdd:false})
  },
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取页面跳转来时携带的数据
    let id = options.id
    //检查当前新闻是否在收藏夹中
    var article=wx.getStorageSync(id)
    //已存在
    if(article!=''){
      this.setData({
        article:article,
        isAdd:true
      })
    }
    else{
      let result=common.getNewDetail(id)
      
      if(result.code=='200'){
        this.setData({
          article:result.news,
          isAdd:false
        })
      }
    }
  }
})