<template>
    <main class="w-full flex flex-col bg-inherit">
        <div class="title w-full">
            <h3 class="text-base font-bold underline underline-offset-1">Log In</h3>
        </div>
        <div class="input-fields w-[84%] flex justify-center items-center flex-col mt-3">
            <div class="input-field w-full flex flex-col px-4 gap-2">
                <label for="email" class="text-sm">Email</label>
                <input type="text" id="email" class="w-full h-[2.8rem] border-neutral-300 border rounded outline-none px-2 text-[18px] italic tracking-wide">
            </div>
            <div class="input-field w-full flex flex-col px-4 gap-2">
                <label for="password" class="text-sm">Password</label>
                <input type="password" id="password" class="w-full h-[2.8rem] border-neutral-300 border rounded outline-none px-2 text-[18px] italic tracking-wide">
            </div>
            <div class="forgot w-full py-4 px-4 flex items-center justify-end mt-[-0.5rem]">
                <h3 class="mr-1 underline underline-offset-1">Forgot Password?</h3>
            </div>
            <div class="submit w-[88%] px-4">
                <button class="w-full py-3 rounded text-white text-base font-bold bg-neutral-800">Log In</button>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">


</script>