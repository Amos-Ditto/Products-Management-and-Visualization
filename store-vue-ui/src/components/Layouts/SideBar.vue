<template>
    <nav class="sidebar flex flex-col w-full justify-start items-start overflow-y-hidden mb-8">
        <div class="logo w-full h-12 sm:h-14 flex flex-row items-center justify-center gap-1 sm:gap-5 bg-neutral-700">
            <IconEcosystem class="logo-img scale-110 sm:scale-150"/>
            <h4 class=" text-lg sm:text-2xl font-bold sm:font-extrabold">Sto<span class=" text-green-500">re</span></h4>
        </div>
        <section class="flex flex-col w-full items-start mt-12 overflow-y-auto overflow-x-hidden">
            <RouterLink :to="{ name:'homeview' }" class="link flex flex-col w-full relative bg-neutral-900" @click="mainLinks">
                <div class="main-link flex flex-row items-center w-full h-14  gap-2 px-3 bg-neutral-800 hover:bg-neutral-700 duration-200">
                    <div class="i-mdi-home text-xl sm:text-2xl" />
                    <p class=" sm:font-bold text-base sm:text-base">Dashboard</p>
                </div>
            </RouterLink>
            <RouterLink :to="{ name:'products' }" class="link flex flex-col w-full relative bg-neutral-900">
                <div class="main-link relative flex flex-row items-center w-full h-14  gap-2 px-3 bg-neutral-800 hover:bg-neutral-700 duration-200" @click="showProducts">
                    <div class="i-mdi-folder text-xl sm:text-2xl" />
                    <p class=" sm:font-bold text-base">Products</p>
                    <div class="i-mdi-chevron-right text-sm sm:text-xl absolute right-2" />
                </div>
                <transition name="dropdown-menu" @enter="enter" @after-enter="afterEnter" @leave="leave">
                    <div class="sub-links w-full flex items-end justify-end flex-col" v-show="menutoggle.products">
                        <button
                            class=" w-[90%] sm:w-[86%] h-10 text-xs font-bold border-l border-neutral-700 text-left px-7 hover:bg-neutral-800 relative"
                        >Add</button>
                        <button
                            class=" w-[90%] sm:w-[86%] h-10 text-xs font-bold border-l border-neutral-700 text-left px-7 hover:bg-neutral-800 relative"
                        >Delete</button>
                    </div>
                </transition>
            </RouterLink>
            <RouterLink to="/" class="link flex flex-col w-full relative bg-neutral-900">
                <div class="main-link flex flex-row items-center w-full h-14  gap-1 sm:gap-2 px-1 sm:px-4 bg-neutral-800 hover:bg-neutral-700 duration-200">
                    <div class="i-mdi-home text-sm sm:text-2xl" />
                    <p class=" sm:font-bold text-xs sm:text-base">Dashboard</p>
                </div>
            </RouterLink>
        </section>
    </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import IconEcosystem from "../icons/IconEcosystem.vue";

interface toggleSideMenu {
    products: boolean;
    sales: boolean;
};

// reactive Data 

const menutoggle = ref<toggleSideMenu>({'products': false, 'sales': false});

// sidemenu transitions methods

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

// methods

const showProducts = ():void => {
    menutoggle.value.products = !menutoggle.value.products;
};
const mainLinks = ():void => {
    if (menutoggle.value.products == true) {
        menutoggle.value.products = false;
    }
};

</script>


<style scoped>

/* Transitions */

.dropdown-menu-enter-active, .dropdown-menu-leave-active {
    transition: height 400ms ease-in-out;
    overflow: hidden;
}
nav section {
    min-height: 200px;
}
.logo .logo-img {
    transition: transform 250ms ease;
}
.logo h4 {
    transition: font 250ms ease;   
}
p {
    transition: font 250ms ease;
}
.link {
    min-height: 3.5rem;
}
.main-link {
    transition-property: background;
}
.main-link::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 4px;
    background-color: #386641;
    visibility: hidden;
}
a:hover .main-link::before {
    visibility: visible;
}
.router-link-active .main-link::before {
    visibility: visible;
}
.router-link-active .main-link {
    background-color: rgb(64 64 64);
}
.i-mdi-chevron-right {
    transition: transform 300ms ease;
}
.router-link-active .i-mdi-chevron-right {
    transform: rotate(90deg);
}

@keyframes dropdown {
    0% {
        height: 0%;
    }
    50% {
        height: 50%;
    }
    100% {
        height: 100%;
    }
}
.sub-links button::before {
    position: absolute;
    content: '';
    left: 0%;
    top: 50%;
    background-color: rgb(64 64 64);
    width: 1.3rem;
    height: 1px;
}

</style>