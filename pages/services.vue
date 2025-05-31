<template>
    <section class="min-h-screen bg-primary text-white p-8 animate-fade-in">
        <h2 class="text-4xl font-arabic font-bold mb-8 text-gold text-center">Paket Umroh Terbaik</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div v-for="(paket, index) in paketUmroh" :key="index"
                class="bg-white text-black rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition w-full max-w-xs mx-auto">
                <div class="w-full max-h-64 overflow-y-auto no-scrollbar">
                    <img :src="paket.gambar" alt="Paket Umroh" class="w-full object-contain" />
                </div>
                <div class="p-4">
                    <h3 class="text-lg md:text-xl font-bold mb-2">{{ paket.nama }}</h3>
                    <p class="text-sm mb-4">{{ paket.deskripsi }}</p>
                    <a :href="`https://wa.me/6282279741010?text=${encodeURIComponent('Assalamualaikum saya ingin tanya tentang ' + paket.nama)}`"
                        target="_blank" rel="noopener noreferrer"
                        class="block text-center w-full bg-gold text-primary font-semibold py-2 rounded-lg hover:bg-yellow-400 transition">
                        {{ paket.harga }}
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const paketUmroh = [
    {
        nama: 'Umroh Reguler 9 Hari',
        deskripsi: 'Hemat & nyaman dengan hotel bintang 4.',
        gambar: '/img/paket1.jpg',
        harga: 'Rp 29.500.000',
    },
    {
        nama: 'Umroh Plus Turki',
        deskripsi: 'Eksplor Istanbul & Madinah selama 13 hari.',
        gambar: '/img/paket2.jpg',
        harga: 'Rp 39.900.000',
    },
    {
        nama: 'Umroh VIP Bintang 5',
        deskripsi: 'Hotel dekat Masjidil Haram, fasilitas premium.',
        gambar: '/img/paket3.jpg',
        harga: 'Rp 49.000.000',
    },
];
</script>

<style scoped>
.text-gold {
    color: #D4AF37;
}

.bg-gold {
    background-color: #D4AF37;
}

.bg-primary {
    background-color: #00534D;
}

@keyframes fade-in {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in {
    animation: fade-in 0.8s ease-out;
}

.font-arabic {
    font-family: 'Aref Ruqaa Ink', serif;
}

.no-scrollbar {
    scrollbar-width: none;
    -ms-overflow-style: none;
}

.no-scrollbar::-webkit-scrollbar {
    display: none;
}
</style>
