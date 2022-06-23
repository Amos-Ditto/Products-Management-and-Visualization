<template>
    <LayoutVue :reducedmenu="reducedmenu" class=" w-screen overflow-y-hidden xl:overflow-x-hidden">
        <template #aside>
            <SideBar class="" @resizeSideMenu="resizeSideMenu" />
        </template>
        <template #default>
            <main class="w-full flex flex-col">
                <NavBarVue />
                <router-view></router-view>
            </main>
        </template>
    </LayoutVue>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LayoutVue from '@/components/Layout.vue';
import SideBar from '../components/Layouts/SideBar.vue';
import NavBarVue from '@/components/Layouts/NavBar.vue';
const reducedmenu = ref<boolean>(false);

const resizeSideMenu = ():void => {
    reducedmenu.value = !reducedmenu.value;
};
</script>