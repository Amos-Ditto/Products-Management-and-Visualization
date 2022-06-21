<template>
    <nav class="sidebar flex flex-col w-full justify-start items-start">
        <div class="logo w-full h-12 sm:h-14 flex flex-row items-center justify-center gap-1 sm:gap-4 bg-neutral-700">
            <IconEcosystem class=" scale-125 sm:scale-150"/>
            <h4 class=" text-lg sm:text-2xl font-semibold sm:font-bold">Sto<span class=" text-green-500">re</span></h4>
        </div>
        <RouterLink :to="{ name:'homeview' }">LandingPage</RouterLink>
        <button>click</button>
    </nav>
</template>

<script setup lang="ts">
import IconEcosystem from "../icons/IconEcosystem.vue";

</script>