<template>
    <header class="w-full bg-slate-100 h-14 flex items-center justify-between pl-1 pr-2 shadow-zinc-100">
        <div class="right h-full flex items-center justify-center px-1 border-r border-zinc-400">
            <div class="i-mdi-drag text-4xl cursor-pointer" />
        </div>
        <div class="left h-full flex items-center justify-center gap-x-2.5 px-2 py-1.5">
            <div class="warning">
                <div class="i-mdi-alert text-3xl cursor-pointer hover:scale-110" />
                <span class="bg-yellow-600">0</span>
            </div>
            <div class="notification">
                <div class="i-mdi-bell text-3xl cursor-pointer" />
                <span class="bg-green-500">0</span>
            </div>
            <div class="setting">
                <div class="i-mdi-cog text-3xl cursor-pointer transition-rotate hover:rotate-90" @click="showSetting" />
                <Transition name="popup" @enter="enter" @after-enter="afterEnter" @leave="leave">
                    <Settings v-show="showsetting" @show-login="showLoginModal" />
                </Transition>
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Settings from "../notifications/Settings.vue";

// Transition data
const showsetting = ref<boolean>(false);

// Conditional emits
const emit = defineEmits<{
    (event: "showLogin"): void;
}>();

const showSetting = (): void => {
    showsetting.value = !showsetting.value;
}

// Transition methods 
const enter = (el: HTMLElement): void => {
    el.style.height = "auto";
    let height = getComputedStyle(el).height;
    el.style.height = '0';
    getComputedStyle(el);
    setTimeout(() => {el.style.height = height});
};
const afterEnter = (el: HTMLElement): void => {
    el.style.height = "auto";
};
const leave = (el: HTMLElement): void => {
    el.style.height = getComputedStyle(el).height;
    getComputedStyle(el);
    setTimeout(() => {el.style.height = '0'});
};

// Conditional displays

const showLoginModal = ():void => {
    showsetting.value = false;
    emit("showLogin");
};
</script>

<style scoped>
@tailwind components;
@tailwind utilities;


@layer components {
    .notification , .setting, .warning {
        @apply h-full flex items-center justify-center relative px-2 bg-slate-50 rounded-sm;
    }
    .notification span, .warning span{
        @apply flex justify-center items-center absolute top-0 right-1 p-2 w-[1.4rem] h-[1.4rem] rounded-lg text-slate-100;
    }
}
.notification .i-mdi-bell:hover {
    animation: shake 0.82s cubic-bezier(.36, .07, .19, .97) infinite;
    transform: translate3d(0, 0,0);
    backface-visibility: hidden;
    perspective: 1000px;
}

@keyframes shake {
    10%, 90% {
        transform: translate3d(-1px, 0, 0);
    }
    20%, 80% {
        transform: translate3d(2px, 0, 0);
    }
    30%, 50%, 70% {
        transform: translate3d(-4px, 0, 0);
    }
    40%, 60% {
        transform: translate3d(4px, 0, 0);
    }
}

/* Transition animations */
.popup-enter-from , .popup-leave-to {
    opacity: 0;
}
.popup-enter-active , .popup-leave-active {
    transition: height 200ms ease-in-out, opacity 350ms ease;
    overflow: hidden;
}
</style>