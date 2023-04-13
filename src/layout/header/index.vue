<template>
  <div class="regular" :class="navShow ? 'cover' : ''">
    <div class="head-style">
      <font-awesome-icon
        :icon="isIcon ? 'bars' : 'times'"
        class="icon"
        @click="changeIcon"
      />
      <img src="../../assets/logo.png" alt="零束" />
    </div>
  </div>
  <van-popup
    v-model:show="navShow"
    overlay-class="overlay"
    position="left"
    :style="{ height: '100%', width: '70%' }"
  />
  <transition v-if="false" name="nav-animate" appear>
    <view class="nav-style" v-show="navShow" :class="navShow ? 'tl-show' : ''">
      <ul>
        <li
          v-for="(action, index) in routerNav"
          :key="index"
          @click="nav(action)"
        >
          <a href="javascript:;">{{ action.title }}</a>
        </li>
        <!-- <li><a href="javascript:;">首页</a></li>
        <li><a href="javascript:;">关于零束</a></li>
        <li><a href="javascript:;">产品与解决方案</a></li>
        <li><a href="javascript:;">开发者中心</a></li>
        <li><a href="javascript:;">开发者大会</a></li>
        <li><a href="javascript:;">加入我们</a></li> -->
      </ul>
    </view>
  </transition>
</template>

<script setup>
import { setShade } from "@/utils/tool";
import { ref, reactive, onMounted, computed, toRaw, onUpdated } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import $ from "jquery";
let isIcon = ref(true);
let navShow = ref(false);
let menuList = ref([]);
let toHeight = ref(0);
const store = useStore();
const route = useRoute();
const router = useRouter();
const routerNav = store.getters.routerNav;
const changeIcon = () => {
  isIcon.value = !isIcon.value;
  navShow.value = !navShow.value;
  // setShade()
  // if(navShow.value){
  //   toHeight.value = $(window).scrollTop();
  //   move()
  // } else {
  //  remove(toHeight.value)
  // }
};
const nav = (action) => {
  router.push({
    path: toRaw(action).path,
  });
  navShow.value = false;
  isIcon.value = true;
};
onUpdated(() => {
  console.log(3);
  // menuList.value = JSON.parse(localStorage.getItem('navRouters'))
  // console.log(menuList.value);
  // console.log(routerNav);
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
/v-deep/ {
  .van-popup--left {
    top: 4.25rem;
    height: 70% !important;
  }
  .van-overlay {
    position: fixed;
    top: 4.25rem !important;
    left: 0;
    width: 10%;
    height: 10%;
    z-index: 8 !important;
  }
}
.regular {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 9;
  .head-style {
    display: flex;
    height: 4.25rem;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border-bottom: 1px solid #eaeaea;
    background: #fff;
    // position: relative;
    .icon {
      position: absolute;
      top: 1.4375rem;
      left: 1.25rem;
      font-size: 23px;
      font-weight: 400;
    }
    img {
      width: 4.1181rem;
      height: 1.6638rem;
    }
  }
}

html,
body {
  position: relative;
}
.nav-style {
  width: 80%;
  height: calc(100% - 4.25rem + 1px);
  background: #fff;
  z-index: 999;
  position: fixed;
  top: 4.25rem;
  left: 0px;
  ul {
    box-sizing: border-box;
    padding-top: 20px;
    overflow: hidden;
    li {
      padding: 0px 20px;
      width: 100%;
      // background: #4867FF;
      a {
        display: inline-block;
        width: calc(100% - 40px);
        padding: 16px 0px;
        border-bottom: 1px solid #d9d9d9;
        font-size: 14px;
        color: #333;
      }
    }
  }
}
.tl-show {
  overflow: hidden;
}
.nav-animate-enter-active {
  animation: anim linear 0.3s;
}
.cover {
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
}
.nav-animate-leave-active {
  animation: anim linear 0.2s reverse;
}
@keyframes anim {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
//   .nav-animate-enter,
//   .nav-animate-leave-to{
//     transform: translateX(-100%);
//   }
//   .nav-animate-enter-active,
//   .nav-animate-leave-active{
//     transition: linear .3s;
//   }
//   .nav-animate-enter-to,
//   .nav-animate-leave{
//     transform: translateX(0);
//   }
</style>