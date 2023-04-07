<template>
  <van-tabbar v-model="active" route>
  <van-tabbar-item to="/">
    <span>首页</span>
    <template #icon="props">
      <img :src="props.active ? icon.active : icon.inactive" />
    </template>
  </van-tabbar-item>
  <van-tabbar-item to="/billboard" icon="search">榜单</van-tabbar-item>
  <van-tabbar-item to="/my" icon="setting-o">我的</van-tabbar-item>
</van-tabbar>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const active = ref(0);
    const icon = {
      active: 'https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png',
      inactive:
        'https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png',
    };
    return {
      icon,
      active,
    };
  },
};
</script>

<style>

</style>