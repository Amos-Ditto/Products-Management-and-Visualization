<template>
    <LayoutVue class=" w-screen h-screen overflow-y-hidden xl:overflow-x-hidden">
        <template #aside>
            <SideBar />
        </template>
        <main class="h-full">
            <router-view></router-view>
        </main>
    </LayoutVue>
</template>

<script setup lang="ts">
import LayoutVue from '@/components/Layout.vue';
import SideBar from '../components/Layouts/SideBar.vue';


</script>