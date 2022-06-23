<template>
    <header class="w-full bg-slate-100 h-14 flex items-center justify-between pl-1 pr-2">
        <div class="right h-full flex items-center justify-center px-1 border-r border-zinc-400">
            <div class="i-mdi-drag text-4xl" />
        </div>
        <div class="left h-full flex items-center justify-center gap-x-2.5 px-2 py-1.5">
            <div class="warning h-full flex items-center justify-center relative px-2 bg-slate-50 rounded-sm">
                <div class="i-mdi-alert text-3xl cursor-pointer hover:scale-110" />
                <span class="flex justify-center items-center absolute top-0 right-1 p-2 w-[1.4rem] h-[1.4rem] rounded-lg bg-yellow-600 text-slate-100">0</span>
            </div>
            <div class="notification h-full flex items-center justify-center relative px-2 bg-slate-50 rounded-sm">
                <div class="i-mdi-bell text-3xl cursor-pointer hover:scale-110" />
                <span class="flex justify-center items-center absolute top-0 right-1 p-2 w-[1.4rem] h-[1.4rem] rounded-lg bg-green-500 text-slate-100">0</span>
            </div>
            <div class="setting h-full flex items-center justify-center relative px-2 bg-slate-50 rounded-sm">
                <div class="i-mdi-cog text-3xl cursor-pointer transition-rotate hover:rotate-90" />
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>

</script>