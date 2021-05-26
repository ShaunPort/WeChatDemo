// index.js
// 获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    timeSend:0,
    old:"",
    danmu:"",
    ssrc:'https://arch.ahnu.edu.cn/__local/E/6C/37/13B4CE38CB5CC5A7ED8AAC42513_AF624E7C_6C08600C.mp4?e=.mp4',
    list:[
      {text:'沈家仕先生口述校史实录',
      src:'https://arch.ahnu.edu.cn/__local/E/6C/37/13B4CE38CB5CC5A7ED8AAC42513_AF624E7C_6C08600C.mp4?e=.mp4'},
      {text:'周瑞萼先生口述校史实录',
      src:'https://arch.ahnu.edu.cn/__local/F/F6/D0/4B7D485496AC7811F032463D5DE_2F0A82D6_6EB22AFB.mp4?e=.mp4'},
      {text:'袁延毅先生口述校史实录',
      src:'https://arch.ahnu.edu.cn/__local/E/05/ED/1BAB68F36DD4E8ED38C1D268F43_84A49CED_727AB6DC.mp4?e=.mp4'},{text:'姚国荣先生口述校史实录',
      src:'https://arch.ahnu.edu.cn/__local/4/81/A0/7B9C21B01D74E1832748BB9F0D5_FCA6036F_6DAD68A5.mp4?e=.mp4'}
    ]
  },
  /**
   * 自定义函数--随机颜色
   */
  getRandomColor:function(){
    let rgb=[]
    for(let i=0;i<3;i++){
      let color=Math.floor(Math.random()*256).toString(16)
      color=color.length==1?'0'+color:color
      rgb[i]=color
    }
    return '#'+rgb.join('')
  },
  /**
   * 自定义函数--获得弹幕文字
   */
  sendDanmu:function(){
    let that=this
    let now=(new Date()).valueOf()
    console.log(now)
    if(that.data.old!=that.data.danmu||now-that.data.timeSend>3000){
      this.ctx.sendDanmu({
        text:that.data.danmu,
        color:this.getRandomColor()
      })
      that.data.old=that.data.danmu
      that.data.timeSend=now
    }else if(that.data.old==that.data.danmu&&now-that.data.timeSend<3000){
      that.data.timeSend=now
      wx.showToast({
        title: '请不要刷屏2333'
      })
    }
  },
  /**
   * 自定义函数--获得弹幕文字
   */
  getDanmu:function(e){
    this.setData({
      danmu:e.detail.value
    })
  },
  /**
   * 自定义函数--播放视频
   */
  playVideo:function(e){
    this.ctx.stop()
    this.setData({
      ssrc:e.currentTarget.dataset.src
    })
    console.log(e.currentTarget.dataset.src)
    this.ctx.play()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.ctx=wx.createVideoContext('myVideo')
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