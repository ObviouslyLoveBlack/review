<template>
  <van-icon name="apps-o" size="40" @click="showPopup" />
  <van-popup
    v-model:show="show"
    :closeable="true"
    position="left"
    :style="{ height: '100%', width: '60%' }"
  >
    <view class="nav-menu"> 内容 </view>
  </van-popup>
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
import { onMounted, ref } from "vue";
import $ from "jquery";
let show = ref(false);
const showPopup = () => {
  show.value = true;
};
function UserInfo() {
  getUserInfo().then((res) => {
    console.log(res);
  });
}
onMounted(() => {
  // UserInfo();
});
function move() {
  $("html,body").css({
    position: "fixed",
    top: -scroll,
  });
}
function remove(scroll) {
  $("html,body").css({
    position: "static",
  });
  $(window).scrollTop(scroll);
  window.scrollTo({
    top: scroll,
    behavior: "smooth",
  });
}
</script>
<style lang="scss" scoped>
.two-swipe {
  border-top: 1px solid #eaeaea;
}
.my-swipe {
  // margin-top: .625rem;
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
.nav-menu {
  position: absolute;
  top: 10%;
  left: 20%;
}
</style>
