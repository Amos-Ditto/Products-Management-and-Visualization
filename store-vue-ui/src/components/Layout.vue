<template>
    <main class="w-full h-full flex flex-row">
        <aside class="h-full w-1/8 bg-slate-800 text-white">
            <slot name="aside">

            </slot>
        </aside>
        <section class="h-full">
            <slot>

            </slot>
        </section>
    </main>
</template>