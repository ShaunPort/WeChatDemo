// pages/form/form.js
Page({
  data: {
    date:'0',
    ylzk:'',
    ylbj:'',
    gmfy:'',
    yy:'',
    blood:'',
    qgjz:'',
    height:'',
    weight:'',
    bloodItems:['未知','A','B','O','AB']
  },
  dateChange:function(e){
    let value=e.detail.value;
    this.setData({date:value});
  },
  bloodChange:function(e){
    let i=e.detail.value;
    this.setData({blood:this.data.bloodItems[i]});
  },
  submitForm:function(e){
    console.log(e.detail.value);
    wx.setStorageSync('myCard', e.detail.value)
    wx.navigateBack()
  },
  delMyCard:function(){
    wx.removeStorageSync('myCard')
    wx.navigateBack()
  },
  onLoad: function (options) {
    let myCard=wx.getStorageSync('myCard')
    if(myCard!=''){
      this.setData({
        date:myCard.date,
        ylzk:myCard.ylzk,
        ylbj:myCard.ylbj,
        gmfy:myCard.gmfy,
        yy:myCard.yy,
        blood:myCard.blood,
        qgjz:myCard.qgjz,
        height:myCard.height,
        weight:myCard.weight
      })
    }
  }
})