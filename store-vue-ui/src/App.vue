<template>
  <main class="h-screen w-screen overflow-x-hidden bg-zinc-50" :class="isDark ? 'dark' : ''">
    <section class="w-full h-full">
      <RouterView />
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from "vue-router";

const isDark = ref<boolean>(false)

</script>

<style lang="css">
/* @import "@/assets/base.css"; */

body {
  box-sizing: border-box;
  margin: 0%;
  padding: 0%;
  /* font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; */
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
