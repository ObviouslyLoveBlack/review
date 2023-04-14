<template>
  <div class="style-content">
    <div class="style-head">
      <Header></Header>
    </div>
    <div class="style-main">
      <router-view />
    </div>
    <div class="style-footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<script setup>
import Header from "@/layout/header/index.vue";
import Footer from "@/layout/footer/index.vue";
</script>

<style lang="scss" scoped>
.style-content {
  display: flex;
  flex-direction: column;
  .style-head {
    width: 100%;
    height: 4.25rem;
    z-index: 100 !important;
  }
  .style-main {
    flex-grow: 1;
  }
}
</style>