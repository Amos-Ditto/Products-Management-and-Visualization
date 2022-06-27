<template>
  <main class="h-screen w-screen overflow-x-hidden bg-zinc-5">
    <section class="w-full h-full bg-inherit">
      <RouterView v-slot="{ Component }">
        <Transition name="fade">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </section>
    <Teleport to="body">
      <Transition name="auth">
        <MainAuth @close-auth="closeModal" v-show="showauth" />
      </Transition>
    </Teleport>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from "vue-router";
import MainAuth from "./components/MainAuth.vue";

// Transition data
const showauth = ref<boolean>(true);


// Component methods

const closeModal = (): void => {
  showauth.value = false;
}

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

/* Page transitions */

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 350ms ease-out;
}

.auth-enter-from, .auth-leave-to {
  opacity: 0;
  transform: scale(0.4);
}
.auth-enter-active, .auth-leave-active {
  transition: transform 300ms ease, opacity 300ms ease;
}
</style>
