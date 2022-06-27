<template>
    <main class="w-full flex flex-col bg-inherit">
        <div class="title w-full">
            <h3 class="text-base font-bold underline underline-offset-1">Log In</h3>
        </div>
        <div class="input-fields w-[100%] flex justify-center items-center flex-col mt-3">
            <div class="input-field w-full flex flex-col px-4 gap-1">
                <label for="email" class="text-sm">Email</label>
                <input type="text" id="email" class="w-full h-[2.8rem] border-neutral-300 border rounded outline-none px-2 text-[18px] italic tracking-wide">
            </div>
            <div class="input-field w-full flex flex-col px-4 gap-1 mt-2">
                <label for="password" class="text-sm">Password</label>
                <input type="password" id="password" class="w-full h-[2.8rem] border-neutral-300 border rounded outline-none px-2 text-[18px] italic tracking-wide">
            </div>
            <div class="forgot w-full py-4 px-4 flex items-center justify-end mt-[-0.5rem]">
                <h3 class="mr-1 underline underline-offset-1">Forgot Password?</h3>
            </div>
            <div class="submit w-full px-4">
                <button class="w-full py-3 rounded text-white text-base font-bold bg-neutral-800 hover:bg-neutral-700 hover:scale-[1.015]">Log In</button>
            </div>
            <div class="socio-auth w-full flex items-center justify-center flex-col mt-4">
                <p class="hr relative bg-inherit text-neutral-500">
                    <span class="tracking-[3px]">--------</span> OR <span class="tracking-[3px]">--------</span>
                </p>
                <div class="submit w-full px-4 mt-2 mb-4 relative">
                    <button class="w-full py-3 px-4 rounded text-white text-base font-bold bg-neutral-800 hover:bg-neutral-700 hover:scale-[1.015] flex flex-row items-center justify-around">Join with Google</button>
                    <div class="i-mdi-google text-3xl text-white absolute top-0 left-4 translate-x-[100%] translate-y-[30%]" />
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">


</script>

<style scoped>
@tailwind components;
@tailwind utilities;
.submit button {
    transition: background-color 300ms ease, transform 300ms ease;
}

@layer components {
    .hr {
        
    }
}
</style>