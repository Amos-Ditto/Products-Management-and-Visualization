<template>
    <main>
        <div class="content-group first-col">
            <h3>About settings dropdown</h3>
        </div>
        <div class="content-group">
            <button class="sign-in" @click="showLoginModal">Sign In</button>
        </div>
        <div class="content-group">
            <button class="sign-up">Sign Up</button>
        </div>
    </main>
</template>

<script setup lang="ts">
const emit = defineEmits<{
    (event: "showLogin"): void;
}>();

const showLoginModal = (): void => {
    emit("showLogin");
};

</script>
<style scoped>
@tailwind components;
@tailwind utilities;


@layer components {
    main {
        @apply w-[250px] ms:w-[350px] min-h-[50px] bg-slate-100 z-[1] flex flex-col rounded-b absolute bottom-[-1.5rem] right-[-0.4rem] translate-y-full p-2;
    }
    .content-group {
        @apply min-h-[2rem] p-1 flex items-center justify-center;
    }
    .first-col {
        @apply border-b border-neutral-600 bg-white rounded-t;
    }
    .content-group button {
        @apply w-[80%] px-4 py-1 rounded mt-2 text-white font-bold text-base hover:scale-x-105;
        transition: transform 300ms ease;
    }
    .content-group .sign-in {
        @apply bg-green-500;
    }
    .content-group .sign-up {
        @apply bg-blue-500;
    }
}
</style>