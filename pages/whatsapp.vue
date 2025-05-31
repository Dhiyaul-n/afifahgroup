// /pages/whatsapp.vue
<template>
    <div class="min-h-screen flex items-center justify-center bg-primary text-white font-arabic">
        <p class="text-lg">Mengarahkan ke WhatsApp...</p>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

onMounted(() => {
    const paket = route.query.paket || ''
    const nomor = '6282279741010'
    const pesan = `Assalamualaikum saya ingin tanya tentang ${paket}`
    const waLink = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`

    setTimeout(() => {
        window.location.href = waLink
    }, 800)
})
</script>

<style scoped>
.bg-primary {
    background-color: #00534D;
}

.font-arabic {
    font-family: 'Aref Ruqaa Ink', serif;
}
</style>
    