<template>
    <LayoutVue class=" w-screen h-screen overflow-y-hidden xl:overflow-x-hidden">
        <template #aside class="h-full px-4 text-white">
            <RouterLink :to="{ name:'homeview' }">LandingPage</RouterLink>
        </template>
        <main class="h-full">
            <router-view></router-view>
        </main>
    </LayoutVue>
</template>

<script setup lang="ts">
import LayoutVue from '@/components/Layout.vue';


</script>