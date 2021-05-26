// pages/game/game.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    answer:0,
    count:0,
    tip:'',
    x:-1,
    isGameStart:true
  },
  /**
   * 自定义--初始化
   */
  initial:function() {
    this.setData({
      answer:Math.round(Math.random()*100),
      count:0,
      tip:'',
      x:-1,
      isGameStart:true
    })
  },
  /**
   * 自定义--猜数字过程
   */
  guess:function(){
    var x=this.data.x
    var answer=this.data.answer
    var count=this.data.count
    var tip=this.data.tip
    if(x<0||x>100){
      wx.showToast({
        title: '请输入0-100之间的数字！',
      })
    }else if(x>answer){
      count=count+1;
      tip+='\n第'+count+'回合大了！'
    }else if(x<answer){
      count=count+1;
      tip+='\n第'+count+'回合小了！'
    }else if(x==answer){
      this.setData(
        {
          isGameStart:false
        }
      )
    }
    if(count==8){
      this.setData({
        isGameStart:false
      })
    }
    this.setData({
      count:count,
      tip:tip,
      x:x
    })
  },
  /**
   * 自定义--获取数字输入
   */
  reStart:function(){
    this.initial()
  },
  /**
   * 自定义--返回主菜单
   */
  back:function(){
    wx.navigateTo({
      url: '/pages/index/index',
    })
  },
  /**
   * 自定义--获取数字输入
   */
  getNumber:function(e){
    console.log('捕获'+e.detail.value)
    this.setData({
      x:e.detail.value
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initial()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})