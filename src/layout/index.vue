<template>
  <view class="style-content">
   <view class="style-head">
    <Header></Header>
  </view>
  <view class="style-main">
    <router-view />
  </view>
  <view class="style-footer">
    <Footer></Footer>
  </view>
  </view>
</template>

<script setup>
import Header from "@/layout/header/index.vue";
import Footer from "@/layout/footer/index.vue";
</script>

<style lang="scss" scoped>
.style-content{
   display: flex;
   flex-direction: column;
   .style-head{
    // position: sticky;
    // top: 0;
      width: 100%;
      height: 4.25rem;
      z-index: 9;
   }
   .style-main{
      flex-grow: 1;
   }
}
</style>