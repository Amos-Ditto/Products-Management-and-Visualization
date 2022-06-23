<template>
    <main class="w-screen h-screen flex flex-row">
        <aside
            class="h-screen w-[36%] mds:w-[18%] transition-width duration-300 bg-neutral-800 text-white overflow-y-auto fixed left-0 top-0 mds:relative"
            :class="props.reducedmenu && 'w-[11%] relative'"
        >
            <slot name="aside"></slot>
        </aside>
        <section class="h-screen w-full dark:bg-neutral-800">
            <slot></slot>
        </section>
    </main>
</template>

<script setup lang="ts">
const props = defineProps<{
    reducedmenu: boolean
}>();

</script>