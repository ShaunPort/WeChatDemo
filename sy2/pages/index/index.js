Page({

  /**
   * 页面的初始数据
   */

  data: {
    list:[
      //第1组列表
      [{text:'朋友圈',icon:'/pages/images/moments.png'}],
      //第2组列表
      [
        {text:'扫一扫',icon:'/pages/images/scan.png'},
        {text:'摇一摇',icon:'/pages/images/shake.png'}
      ],
      //第3组列表
      [
        {text:'看一看',icon:'/pages/images/topStories.png'},
        {text:'搜一搜',icon:'/pages/images/search.png'}
      ],
      //第4组列表
      [
        {text:'购物',icon:'/pages/images/shopping.png'},
        {text:'搜一搜',icon:'/pages/images/games.png'}
      ],
      //第5组列表
      [
        {text:'小程序',icon:'/pages/images/miniProgram.png'}
      ]
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.request({
      url: 'https://devapi.qweather.com/v7/weather/now',
      data: {
        location: '101210701',
        key: "e696543a4e174d0980a52fb6fb895194"
      },
      success: function (res) {
        console.log(res.data)
      }
    })
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