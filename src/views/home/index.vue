<template>
  <div class="home-partner">
    <h1>让车成为有生命的人类伙伴</h1>
  </div>
  <div class="home-solution">
    <img src="@/assets/home/2.jpg" alt="" />
    <h1>零束银河全栈技术解决方案</h1>
  </div>
  <div class="function-box">
    <div class="function-item" v-for="(action,index) in list" :key="index" :style="{backgroundImage:`url(${action.imageUrl})`}">
      <div class="function-detail">
        <h2>{{action.title}}</h2>
        <p class="detail-intro">{{action.content}}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {getDetailIntro} from '@/api/home.js'
import {onMounted,ref} from 'vue'
let list = ref([])
function detailIntro(){
   getDetailIntro().then(res=>{
      list.value = res.data
   })
}
onMounted(()=>{
   detailIntro()
})
</script>
<style lang="scss" scoped>
* {
  margin: 0px;
  padding: 0px;
}
.home-partner,
.home-solution {
  width: 23.4375rem;
  height: 16.875rem;
  position: relative;
  background-image: url("@/assets/home/1.gif");
  background-position: 42% 62%;
  background-size: 120%;
  img {
    width: 100%;
    height: 100%;
    object-position: 100% 100%;
  }
  h1 {
    width: 100%;
    // height: 2rem;
    font-size: 1.55rem;
    color: #fff;
    font-weight: 500;
    letter-spacing: 1.5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    text-align: center;
  }
}
.home-solution {
  background-image: none;
  h1 {
    color: #000;
  }
}
.function-box {
  width: 100%;
  .function-item {
    width: 23.4375rem;
    height: 378px;
    position: relative;
    background-position: 42% 100%;
    background-size: 100%;
    &:nth-child(2n){
      .function-detail{
         color: #434343;
      }
    }
    img {
      width: 100%;
      height: 100%;
    }
    .function-detail {
     position: absolute;
     top: 0px;
     left: 0px;
     padding: 30px 37px;
     color: #fff;
     h2{
      font-size: 27px;
      font-weight: 300;
     }
     p{
      margin-top: 20px;
      font-size: 13px;
      line-height: 22px;
     }
    }
  }
}
</style>
