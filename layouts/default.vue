<template>

    <head>
        <link href="https://fonts.googleapis.com/css2?family=Amiri&display=swap" rel="stylesheet" />
    </head>

    <div class="min-h-screen w-full flex flex-col bg-white text-primary font-sans">

        <!-- Menu Overlay dengan Fade -->
        <transition name="fade">
            <div v-if="menuOpen"
                class="fixed top-0 left-0 w-screen h-screen flex flex-col justify-center items-center z-50 text-white space-y-6 bg-primary">

                <!-- Close Button -->
                <button @click="closeMenu"
                    class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center focus:outline-none group"
                    aria-label="Close Menu">
                    <span class="absolute h-0.5 w-6 bg-white rounded rotate-45"></span>
                    <span class="absolute h-0.5 w-6 bg-white rounded -rotate-45"></span>
                </button>

                <!-- Menu Items -->
                <NuxtLink to="/" class="text-2xl font-semibold hover:text-gold transition" @click="closeMenu" exact>
                    Beranda</NuxtLink>
                <NuxtLink to="/services" class="text-2xl font-semibold hover:text-gold transition" @click="closeMenu">
                    Paket Umroh & Haji</NuxtLink>
                <NuxtLink to="/about" class="text-2xl font-semibold hover:text-gold transition" @click="closeMenu">
                    Tentang Kami</NuxtLink>
                <NuxtLink to="/contact" class="text-2xl font-semibold hover:text-gold transition" @click="closeMenu">
                    Kontak</NuxtLink>
            </div>
        </transition>


        <SplashScreen v-if="splashVisible" @close="hideSplash" />

        <div v-if="!splashVisible">
            <!-- Header -->
            <header class="sticky top-0 bg-opacity-90 backdrop-blur-md shadow-md z-50">
                <nav class="max-w-screen-lg mx-auto flex justify-between items-center py-3 px-4 md:px-0">
                    <!-- Logo + Title -->
                    <NuxtLink to="/" class="flex items-center space-x-3">
                        <img :src="logo" alt="Logo" class="w-12 h-12 object-contain" />
                        <span class="text-2xl tracking-wide text-black transition cursor-pointer select-none"
                            style="font-family: 'Aref Ruqaa Ink', serif; font-weight: 700;">
                            Afifah Group
                        </span>
                    </NuxtLink>

                    <!-- Desktop Menu -->
                    <div class="hidden md:flex space-x-8 text-sm text-black font-medium">
                        <NuxtLink to="/" class=" transition relative link-underline"
                            active-class="text-gold font-semibold" exact>
                            Beranda
                        </NuxtLink>
                        <NuxtLink to="/services" class=" transition relative link-underline"
                            active-class="text-gold font-semibold">
                            Paket Umroh & Haji
                        </NuxtLink>
                        <NuxtLink to="/about" class=" transition relative link-underline"
                            active-class="text-gold font-semibold">
                            Tentang Kami
                        </NuxtLink>
                        <NuxtLink to="/contact" class=" transition relative link-underline"
                            active-class="text-gold font-semibold">
                            Kontak
                        </NuxtLink>
                    </div>

                    <!-- Hamburger Button (Mobile) -->
                    <button @click="toggleMenu"
                        class="md:hidden relative w-8 h-8 flex items-center justify-center focus:outline-none group"
                        aria-label="Toggle Menu">
                        <span :class="[
                            'absolute h-0.5 w-6 bg-white rounded transition-all duration-300',
                            menuOpen ? 'rotate-45 top-3.5' : 'top-2',
                        ]"></span>
                        <span :class="[
                            'absolute h-0.5 w-6 bg-white rounded transition-all duration-300',
                            menuOpen ? 'opacity-0' : 'top-3.5',
                        ]"></span>
                        <span :class="[
                            'absolute h-0.5 w-6 bg-white rounded transition-all duration-300',
                            menuOpen ? '-rotate-45 top-3.5' : 'top-5',
                        ]"></span>
                    </button>
                </nav>
            </header>

            <!-- Main content -->
            <main class="w-full p-0 overflow-x-hidden">
                <div class="w-full flex justify-center">
                    <div class="w-full bg-gray-50 p-0 rounded-md shadow-sm">
                        <NuxtPage :transition="{ name: 'fade', mode: 'out-in' }" />
                    </div>
                </div>
            </main>

            <!-- Footer -->
            <footer class="bg-primary text-white text-center py-4 text-xs tracking-wider">
                © 2025 Afifah Group — All rights reserved
            </footer>
        </div>
    </div>
</template>

<script setup>
import SplashScreen from '~/components/SplashScreen.vue';
import { ref, watch } from "vue";
import logo from '~/public/img/logo.png'


// Splash screen visibility
const splashVisible = ref(true);

// Hamburger menu state
const menuOpen = ref(false);

// Lock scroll saat menu buka
watch(menuOpen, (val) => {
    if (val) {
        document.body.classList.add("menu-open");
    } else {
        document.body.classList.remove("menu-open");
    }
});

// Toggle menu
function toggleMenu() {
    menuOpen.value = !menuOpen.value;
}

// Close menu
function closeMenu() {
    menuOpen.value = false;
}

// Saat splash screen selesai
function hideSplash() {
    splashVisible.value = false;
}

</script>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Aref+Ruqaa+Ink:wght@400;700&display=swap');



html,
body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    width: 100%;
}

.bg-primary {
    background-color: #00534d;
}

.text-primary {
    color: #00534d;
}

.text-gold {
    color: #d4af37;
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.6s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}

/* Underline hover animasi */
.link-underline::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    bottom: -3px;
    left: 0;
    background-color: #d4af37;
    transition: width 0.3s ease;
}

.link-underline:hover::after {
    width: 100%;
}

body.menu-open {
    overflow: hidden;
}
</style>
