import { setup, mock } from "mockjs";
const getRegExpUrl = function (relativeUrl) {
  return RegExp(relativeUrl + ".*");
};

setup({
    timeout:'100'
})

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