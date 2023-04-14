import { setup, mock } from "mockjs";
const getRegExpUrl = function (relativeUrl) {
  return RegExp(relativeUrl + ".*");
};

setup({
    timeout:'100'
})
const homeImage = {
    home1:require('@/assets/home/3.jpg'),
    home2:require('@/assets/home/4.jpg'),
    home3:require('@/assets/home/5.jpg'),
    home4:require('@/assets/home/6.jpg'),
    home5:require('@/assets/home/7.jpg')
}

mock(getRegExpUrl('/getUserInfo'),'get',()=>{
    return{
        status:0,
        msg:'操作成功',
        data:{
            roles:[1],
            name:'粉',
            phone:'14389549589',
            token:'hnfdks78943n87sajfkds86798'
        }
    }
})
mock(getRegExpUrl('/home/getDetailIntro'),'get',()=>{
    return{
        status:0,
        msg:'操作成功',
        data:[
            {title:'计算平台',imageUrl:homeImage.home1,content:'通过打造模块化可拓展的软硬件一体化计算平台，融合智能化交互体验与高阶自动驾驶，打造场景丰富的智能驾驶座舱，为用户带来极致驾驶体验。'},
            {title:'电子架构',imageUrl:homeImage.home2,content:'中央集中式电子电气架构纵向实现云管端一体化车云协同，横向实现深度跨域融合。'},
            {title:'软件平台',imageUrl:homeImage.home3,content:'基于SOA架构，将车云能力服务化，构建云管端一体化SOA软件平台。'},
            {title:'智能云平台',imageUrl:homeImage.home4,content:'万物连接，跨域数据融合，实现车的智能升级，为用户提供安全、便捷、丰富的场景化服务。'},
            {title:'舱驾融合数字化体验产品',imageUrl:homeImage.home5,content:'基于零束银河全栈技术底座，致力于打造自学习、自成长、自进化的智慧新物种，为用户提供全场景数字化产品和体验。'},
        ]
    }
})