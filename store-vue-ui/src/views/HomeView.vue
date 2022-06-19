<script setup lang="ts">
import TheTopBarVue from '@/components/Layouts/TheTopBar.vue';
</script>

<template>
  <main class="w-full h-full flex flex-col">
    <section class="header w-full h-16 bg-red">
      <TheTopBarVue />
    </section>
    <section class="w-full flex flex-row p-4 mt-8">
      <div class="left w-1/2 flex flex-col gap-4 mt-8">
        <h2 class="w-full h-4 text-green-400 flex items-center relative">CREATIVE DATA ANALYSIS</h2>
        <h3 class=" ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum laborum, excepturi repellat quae.</h3>
      </div>
      <div class="right w-1/2">
        <img src="@/assets/retail.jpeg" alt="" class=" rounded-md object-cover w-full contrast-125">
      </div>
    </section>
  </main>
</template>

<style scoped>

</style>