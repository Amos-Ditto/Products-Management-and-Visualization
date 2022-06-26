<template>
    <main class="w-full h-full fixed top-0 right-0 flex items-center justify-center text-white">
        <div class="container fixed w-[380px] min-h-[400px] bg-slate-50 rounded top-16 ms:right-14 transition-height duration-300 flex flex-col opacity-100 text-black">
            <section class="title w-full h-14 bg-slate-100 rounded flex items-center py-2 px-8 gap-4" style="font-style: oblique;">
                <IconEcosystemVue class="logo-img scale-110 sm:scale-150 text-green-600 font-extrabold"/>
                <h3 class="text-3xl font-extrabold text-black">Stor<span class=" text-green-600">e</span></h3>
            </section>
            <section class="context p-2">
                <Signup />
            </section>
        </div>
    </main>
</template>

<script setup lang="ts">
import IconEcosystemVue from './icons/IconEcosystem.vue';
import Signup from './Auth/Signup.vue';

</script>

<style scoped>
@tailwind components;
@tailwind utilities;

@layer components {
    main {
        @apply bg-dark-opacity;
    }
    .title h3 {
        -webkit-background-clip: text;
        -webkit-text-stroke: .1em transparent;
    }
}

</style>