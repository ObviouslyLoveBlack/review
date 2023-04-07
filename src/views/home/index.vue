<template>
  <van-swipe class="my-swipe" :autoplay="4000" indicator-color="white">
    <van-swipe-item>1</van-swipe-item>
    <van-swipe-item>2</van-swipe-item>
    <van-swipe-item>3</van-swipe-item>
    <van-swipe-item>4</van-swipe-item>
  </van-swipe>
  <view class="two-swipe">
    <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
      <template #indicator="{ active, total }">
        <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
      </template>
    </van-swipe>
  </view>
</template>

<script setup>
import { getUserInfo } from "@/api/tool.js";
import { onMounted } from "vue";
function UserInfo() {
  getUserInfo().then((res) => {
    console.log(res);
    // obj = res.data
  });
}
onMounted(() => {
  UserInfo();
});
</script>
<style lang="scss" scoped>
.two-swipe {
  border-top: 1px solid #eaeaea;
}
.my-swipe {
  &:last-child {
    border-top: 0.0625rem solid #eaeaea;
  }
  .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
}

.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
</style>
