<template>
    <LayoutVue :reducedmenu="reducedmenu" class=" w-screen overflow-y-hidden xl:overflow-x-hidden">
        <template #aside>
            <SideBar class="" @resizeSideMenu="resizeSideMenu" />
        </template>
        <main class="h-screen">
            <router-view></router-view>
        </main>
    </LayoutVue>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LayoutVue from '@/components/Layout.vue';
import SideBar from '../components/Layouts/SideBar.vue';
const reducedmenu = ref<boolean>(false);

const resizeSideMenu = ():void => {
    reducedmenu.value = !reducedmenu.value;
    console.log(reducedmenu.value);
    
};
</script>