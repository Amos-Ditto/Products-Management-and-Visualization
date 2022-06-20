<script setup lang="ts">
import TheTopBarVue from '@/components/Layouts/TheTopBar.vue';
</script>

<template>
  <main class="w-full h-full flex flex-col">
    <section class="header w-full h-16 bg-red">
      <TheTopBarVue />
    </section>
    <section class="content w-full flex flex-row p-4 mt-8">
      <div class="left w-1/2 h-full flex flex-col gap-4 mt-8 p-4">
        <div class="title h-4 w-full flex justify-center items-center relative gap-2">
          <div class="illustration w-1/12 relative"></div>
          <h2 class="text-green-500 text-sm">CREATIVE DATA ANALYSIS</h2>
        </div>
        <div class="context mt-2 w-full flex flex-col items-center">
          <h2 class=" text-3xl w-full indent-12 flex items-center antialiased leading-relaxed md:w-10/12 md:text-4xl xl:text-5xl">
            Lets handle your Products and Data.
          </h2>
          <h3 class=" leading-relaxed antialiased mt-12 w-10/12 text-md">
            It's crafted to group and categorize your products and data with simplicity and all modern approaches.
            It's is usable, robust and scalable software.
          </h3>
          <div class="buttons mt-4 p-2 w-1/2 flex justify-start">
            <button class="bg-gray-900 text-slate-50 py-2 px-4 text-base rounded-full">Get Started</button>
          </div>
        </div>
      </div>
      <div class="right w-1/2 h-full p-4">
        <img src="@/assets/img/undraw_all_the_data_re_hh4w.svg" alt="" class=" rounded-md object-cover w-full h-full contrast-125">
      </div>
    </section>
  </main>
</template>

<style scoped>

.content {
  height: 74vh;
}
.illustration::after {
  position: absolute;
  content: '';
  top: 0%;
  left: 0%;
  width: 100%;
  height: 1.5px;
  background: rgb(74 222 128);
}
</style>