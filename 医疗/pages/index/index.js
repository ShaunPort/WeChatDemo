Page({

  /**
   * 页面的初始数据
   */
  data: {
    myCard:false
  },
  goToForm:function(){
    this.setData({
      myCard:true
    })
    wx.navigateTo({
      url: '../form/form',
    })
  },
  delMyCard:function(){
    wx.removeStorageSync('myCard')
    this.setData({myCard:false})
  },
  onShow:function(){
    let myCard=wx.getStorageSync('myCard')
    if(myCard!=''){
      this.setData({myCard:myCard})
    }
  },
  makeCall:function(){
    let tel=this.data.myCard.tel
    wx.makePhoneCall({
      phoneNumber:tel
    })
  }
})