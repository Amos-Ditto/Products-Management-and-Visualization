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
            It's crafted to group and categorize your products and data with simplicity in all modern approaches.
            It's is usable, robust and scalable software.
          </h3>
          <div class="buttons mt-4 p-2 w-1/2 flex justify-start">
            <button class="bg-gray-900 text-slate-50 py-2 px-4 text-base rounded-full">Get Started</button>
          </div>
        </div>
      </div>
      <div class="right w-1/2 h-full bg-[url('@/assets/img/undraw_all_the_data_re_hh4w.svg')] bg-inherit bg-cover">
        <!-- <img src="@/assets/img/undraw_all_the_data_re_hh4w.svg" alt="" class=" rounded-md object-cover w-full h-full contrast-125 sm:h-4/5 sm:w-4/5 sm:scale-75"> -->
      </div>
    </section>
    <footer class="w-full text-gray-100 bg-zinc-900 h-28 fixed bottom-0 left-0 flex justify-center items-center gap-20 xl:gap-32">
      <div class="status h-full w-40 gap-3 flex justify-center items-center">
        <span class="text-5xl">98%</span>
        <p>data accuracy</p>
      </div>
      <div class="status h-full w-40 gap-3 leading-tight flex justify-center items-center">
        <span class="text-5xl">2.5x</span>
        <p>Handling data</p>
      </div>
    </footer>
  </main>
</template>

<script setup lang="ts">
import TheTopBarVue from '@/components/Layouts/TheTopBar.vue';

</script>


<style scoped>

.content {
  height: 74vh;
}
.illustration::after {
  position: absolute;
  content: '';
  top: 0%;
  left: 0%;
  width: 90%;
  height: 1.5px;
  background: rgb(74 222 128);
}
</style>