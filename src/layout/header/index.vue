<template>
  <div>
    <div class="regular">
      <div class="head-style">
        <font-awesome-icon
          :icon="isIcon ? 'bars' : 'times'"
          class="icon"
          @click="changeIcon"
        />
        <img src="../../assets/logo.png" alt="零束" />
      </div>
    </div>
    <van-popup v-model:show="navShow" position="left">
      <view
        class="nav-style"
        :class="navShow ? 'tl-show' : ''"
      >
        <ul>
          <li
            v-for="(action, index) in menuList"
            :key="index"
            :class="active === action.path ? 'active' : ''"
            @click="nav(action)"
          >
            <a href="javascript:;">{{ action.title }}</a>
          </li>
        </ul>
      </view>
    </van-popup>
    <!-- <transition v-if="false" name="nav-animate" appear> </transition> -->
  </div>
</template>

<script setup>
import {
  ref,
  reactive,
  onMounted,
  computed,
  toRaw,
  onUpdated,
  watch,
  watchEffect,
} from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
let isIcon = ref(true);
let navShow = ref(false);
let menuList = ref([]);
let toHeight = ref(0);
let active = ref('')
const store = useStore();
const route = useRoute();
const router = useRouter();
const { routerNav } = store.getters;
const changeIcon = () => {
  isIcon.value = false;
  navShow.value = !navShow.value;
};
const getActiveNav = computed(() => {
  return store.getters.activeNav;
});
const nav = (action) => {
  router.push({
    path: toRaw(action).path,
  });
  navShow.value = false;
  isIcon.value = true;
};
onUpdated(() => {
  menuList.value = toRaw(routerNav);
});
const close =((e)=>{
  console.log(e);
})
watch(
  [getActiveNav,navShow],
  (newVal, oldVal) => {
    active.value = newVal[0]
    isIcon.value = !newVal[1]
  },
  { immediate: true, deep: true }
);
</script>
<style lang="scss" scoped>
.regular {
  width: 100%;
  position: fixed;
  z-index: 100;
  .head-style {
    display: flex;
    height: 4.25rem;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border-bottom: 1px solid #eaeaea;
    background: #fff;
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
:deep(.van-popup) {
  width: 80% !important;
  height: 100% !important;
  z-index: 99 !important;
  top: 52% !important;
  border-bottom: 1px solid #eaeaea;
}

:deep(.van-overlay) {
  z-index: 99 !important;
  top: 4.25rem;
}
html,
body {
  position: relative;
}
.nav-style {
  width: 100%;
  background: #fff;
  position: absolute;
  top: 3.625rem;
  left: 0px;
  ul {
    box-sizing: border-box;
    padding-top: 20px;
    overflow: hidden;
    li {
      padding: 0px 1.25rem;
      width: 100%;
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
// <style lang="scss">
//   .van-overlay {
//     position: fixed;
//     top: 4.25rem !important;
//     left: 0;
//     width: 10%;
//     height: 10%;
//     z-index: 8 !important;
//   }
//   .van-popup--left{
//     top: 60% !important;
//   }
//
</style>