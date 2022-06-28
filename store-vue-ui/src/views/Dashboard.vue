<template>
    <LayoutVue :reducedmenu="reducedmenu" class=" w-screen overflow-y-hidden xl:overflow-x-hidden">
        <template #aside>
            <SideBar class="" @resizeSideMenu="resizeSideMenu" />
        </template>
        <template #default>
            <main class="w-full flex flex-col">
                <NavBarVue @showLogin="showLoginModal"/>
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
import useConditionStore from '@/stores/conditions'

// Conditional data
const reducedmenu = ref<boolean>(false);

// Emits
// const emit = defineEmits<{
//     (event: "showLogin"): void;
// }>();

// global Store
const conditions = useConditionStore()


// Conditional methods

const resizeSideMenu = ():void => {
    reducedmenu.value = !reducedmenu.value;
};

const showLoginModal = (): void => {
    conditions.toggleAuth(conditions.$state, true);
}
</script>