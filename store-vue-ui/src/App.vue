<template>
  <main class="h-screen w-screen overflow-x-hidden bg-zinc-5" :class="isDark ? 'dark' : ''">
    <section class="w-full h-full bg-inherit">
      <RouterView />
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from "vue-router";

const isDark = ref<boolean>(true);

</script>

<style lang="css">
/* @import "@/assets/base.css"; */
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  box-sizing: border-box;
  margin: 0%;
  padding: 0%;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei",Arial,sans-serif;
  font-size: 15px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
