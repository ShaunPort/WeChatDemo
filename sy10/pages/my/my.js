Page({
  data: {
    num: 0,
    newsList:[]
  },
  getMyInfo: function(){
    let info={};
    let that=this
    wx.getUserProfile({
      desc: '获取用户信息',
      success:function(e){
        info=e.userInfo
        console.log(info)
        that.setData({
          isLogin:true,
          src:info.avatarUrl,
          nickName:info.nickName
        })
        that.getMyFavorites()
      }
    })
  },
  getMyFavorites:function(){
    console.log(wx.getStorageInfoSync())
    let info=wx.getStorageInfoSync()
    console.log(info)
    let keys=info.keys;
    let num=0;
    let myList=[];
    for(var i=0;i<keys.length;i++){
      let obj=wx.getStorageSync(keys[i]);
      if(obj.toString()=='[object Object]'){
        console.log(obj)
        myList.push(obj)
        num++;
      }
    }
    this.setData({
      newsList:myList,
      num:num
    });
  },
  goToDetail:function(e){
    let id=e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../detail/detail?id='+id
    })
  },
  onShow:function(){
    if(this.data.isLogin){
      this.getMyFavorites()
    }
  }
})