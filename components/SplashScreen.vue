<template>
    <transition name="fade">
        <div v-if="visible"
            class="fixed inset-0 flex flex-col justify-center items-center z-50 text-white bg-gradient-to-tr from-[#08131c] to-[#325052]">
            <img src="/img/logo.png" alt="DNJ Logo" class="w-52 h-52 object-contain animate-pulse" />
        </div>
    </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const emit = defineEmits(['close'])
const visible = ref(true)  // << ini yang belum ada

onMounted(() => {
    setTimeout(() => {
        visible.value = false  // hide komponen di dalam
        emit('close')
    }, 2000)
})
</script>



<style scoped>
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
</style>
