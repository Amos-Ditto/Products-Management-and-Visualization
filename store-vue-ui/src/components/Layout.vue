<template>
    <main class="w-screen h-screen flex flex-row">
        <aside class="h-screen w-[28%] mds:w-[20%] bg-neutral-800 text-white overflow-y-auto fixed left-0 top-0 mds:relative">
            <slot name="aside">

            </slot>
        </aside>
        <section class="h-screen">
            <slot>

            </slot>
        </section>
    </main>
</template>