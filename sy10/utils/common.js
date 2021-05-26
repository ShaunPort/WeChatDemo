const news=[{
  id:'1',
  title:'在走动互动联动中让党史学习教育“活”起来',
  poster:'https://www.ojc.zj.cn/UploadFile/202105/20210520092352135.jpg',
  content:'　近日，一场主题为“党建引领奋斗百年路 校企共建启航新征程”的党日活动暨校企党组织结对共建签约仪式在温州城发基础公司顺利举行，双方共同签署了党建共建协议书，约定双方充分利用本单位的党建资源，共享党建工作信息，交流党建工作经验，优势互补，共同开展党建工作、项目合作等活动，实现党建与业务的双融双促，努力形成“共建组织、共抓队伍、共享资源、共谋发展”的党建工作新格局，真正让党史学习教育“活”起来。',
  add_date:'2021-5-20'
},{
  id:'2',
  title:'我校在全国第六届大学生艺术展演中荣获佳绩',
  poster:'https://www.ojc.zj.cn/UploadFile/202105/202105170842579903_sy.JPG',
  content:'日前，由教育部主办的全国第六届大学生艺术展演活动评审结果揭晓，温州理工学院设计艺术学院邹金町、刘明刚、章长才指导的《瓯窑艺术实践工作坊》荣获工作坊类二等奖。由邹金町、刘明刚完成的学生社团创新案例《高校学生实践工作坊建设》荣获美育改革创新案例三等奖。',
  add_date:'2021-5-17'
},{
  id:'3',
  title:'心启承——温州理工学院设计艺术学院2021届毕业设计展',
  poster:'https://www.ojc.zj.cn/UploadFile/202105/202105141614267026_sy.jpg',
  content:'2021年是红色的，中国共产党迎来了它的100周年生日，2021年又是彩色的，一年一度的毕业季在阳光明媚的日子里拉开了帷幕，一群群轻盈灵动的年轻身影穿梭于校园中，或欢喜或忧伤，洋溢着墨彩芬芳的创意设计作品吸引着观看者驻足观赏……',
  add_date:'2021-5-14'
}];
function getNewsList(){
  let list=[];
  for(var i=0;i<news.length;i++){
    let obj={};
    obj.id=news[i].id;
    obj.poster=news[i].poster;
    obj.add_date=news[i].add_date;
    obj.title=news[i].title;
    list.push(obj);
  }
  return list;
}
function getNewsDetail(newsID){
  let msg={
    code:'404',
    news:{}
  };
  for(var i=0;i<news.length;i++){
    if(newsID==news[i].id){
      msg.code='200';
      msg.news=news[i];
      break;
    }
  }
  return msg;
}
module.exports={
  getNewsList:getNewsList,
  getNewDetail:getNewsDetail
}