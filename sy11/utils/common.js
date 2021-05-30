// 服务器域名地址
var baseUrl='http://10.238.67.10/myNews/index.php/Home'
//http://127.0.0.1/myNews/index.php/Home/Index/getNewsList
// 获取新闻列表接口
var getNewsList = baseUrl+'/Index/getNewsList'

// 根据新闻ID获取新闻内容接口
var getNewsById=baseUrl+'/Index/getNewsById'

// 跳转新闻浏览页面
function goToDetail(id){
  wx.navigateTo({
    url: '../detail/detail?id='+id,
  })
}

module.exports={
  getNewsList:getNewsList,
  getNewsById:getNewsById,
  goToDetail:goToDetail
}