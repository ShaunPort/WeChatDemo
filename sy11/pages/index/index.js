var common=require('../../utils/common.js')
var isEnd=false
var currentPage=1
Page({
  data:{
    loading:false,
    loadMoreText:'加载更多',
    newsList:[]
  },
  goToDetail:function(e){
    let id=e.currentTarget.dataset.id;
    common.goToDetail(id)
  },
  loadMore:function(){
    if(!isEnd&&!this.data.loading){
      this.setData({loading:true})
      setTimeout(()=>{
        this.getNewsListByPage(currentPage)
        this.setData({loading:false})
      },1000)
    }
  },
  getNewsListByPage:function(page){
    var that=this
    wx.request({
      url: common.getNewsList,
      data:{page:page},
      success:function(res){
        let total=res.data.total
        console.log(res.data.list)
        let list=that.data.newsList.concat(res.data.list)
        that.setData({
          newsList:list,
          total:total
        })
        if(list.length==total){
          isEnd=true
          that.setData({loadMoreText:'已无更多'})
        }else{currentPage++}
      }
    })
  },
  onLoad:function(options){
    this.getNewsListByPage(1)
  },
})