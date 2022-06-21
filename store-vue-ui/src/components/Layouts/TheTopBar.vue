<template>
    <header class="w-full h-full flex justify-between items-center px-4 pt-2 md:px-12 shadow-sm">
        <nav class="right flex gap-4 h-full items-center py-2">
            <div class="logo relative h-full flex justify-center items-center gap-2 ml-6">
                <IconEcosystemVue class="icon text-blue-400"/>
                <h3 class="text-xl font-extrabold ml-4">Store</h3>
            </div>
            <div class="links flex gap-6 items-center justify-start h-full ml-2 relative pt-2 md:ml-4">
                <RouterLink to="/" class="ml-4 text-sm flex items-center px-2 h-full">Home</RouterLink>
                <RouterLink to="/" class="ml-4 text-sm flex items-center px-2 h-full">Products</RouterLink>
                <RouterLink to="/" class="ml-4 text-sm flex items-center px-2 h-full">Sell</RouterLink>
                <RouterLink to="/" class="ml-4 text-sm flex items-center px-2 h-full">Admin</RouterLink>
            </div>
             <!-- hover:border-b-2 hover:border-blue-500 hover:duration-300 -->
        </nav>
        <nav class="left flex h-full justify-center items-center gap-2 pt-2">
            <button class="rounded-xl px-2 py-1 mr-4 hover:border hover:border-green-600 hover:px-2.5 hover:py-1.5 duration-300">Login</button>
            <button class=" rounded-xl px-2 py-1 border border-gray-900 hover:border-green-600 hover:px-2.5 hover:py-1.5 duration-300">Sign up</button>
        </nav>
    </header>

</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import IconEcosystemVue from '../icons/IconEcosystem.vue';

</script>

<style scoped>

a {
    transition-property: border;
    position: relative;
}
.icon {
    transform: scale(1.5);
}
@keyframes hov {
    0% {
        width: 0%;
    }
    /* 25% {
        width: 25%;
    } */
    50% {
        width: 50%;
    }
    /* 75% {
        width: 75%;
    } */
    100% {
        width: 100%;
    }
}
a::after {
    position: absolute;
    content: '';
    bottom: 0%;
    left: 0%;
    width: 100%;
    height: 0.15rem;
    background: rgb(59 130 246);
    visibility: hidden;
}
a:hover::after {
    visibility: visible;
    animation: hov 200ms;
}
.logo {
    padding: 2px 0;
    margin-top: 4px;
}
.links::before {
    position: absolute;
    content: '';
    left: 0;
    top: 0.25rem;
    width: 2px;
    height: 50%;
    transform: translate(0%, 50%);
    background: #c0c0c0;
}
button {
    transition-property: padding, border;

}
</style>