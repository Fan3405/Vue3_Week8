<template style="padding-right=0px">
  <!-- 結帳完轉回首頁padding-right會跑出17px，可能是AOS關係，所以在template設定padding-right=0px -->
  <RouterView />
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
// 在 mounted 生命週期鉤子中初始化 AOS 庫，這個程式碼會在 App.vue 元件渲染完成後執行。由於 App.vue 是所有頁面的父元件，因此這個程式碼會對所有頁面產生效果。
export default {
  mounted() {
    AOS.init();
  },
};
</script>

<style lang="scss"></style>
