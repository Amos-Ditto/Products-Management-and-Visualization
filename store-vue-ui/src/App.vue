<template>
  <main class="h-screen w-screen overflow-x-hidden bg-zinc-5">
    <section class="w-full h-full bg-inherit">
      <RouterView />
    </section>
    <Teleport to="body">
      <MainAuth />
    </Teleport>
  </main>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import MainAuth from "./components/MainAuth.vue";

</script>

<style lang="css">
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
}
</style>
