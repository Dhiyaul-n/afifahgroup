<template>
    <section class="min-h-screen bg-primary text-white py-20 px-6 animate-fade-in">
        <div class="max-w-7xl mx-auto">

            <!-- Heading -->
            <h2 class="text-5xl font-extrabold text-center text-gold mb-8">Tentang Afifah Group</h2>

            <!-- Deskripsi -->
            <p class="text-lg text-center max-w-3xl mx-auto mb-14 leading-relaxed">
                Afifah Group adalah biro perjalanan Umroh & Haji resmi terpercaya dengan pengalaman lebih dari 10 tahun
                melayani ribuan jamaah dari seluruh Indonesia. Kami berkomitmen memberikan pelayanan terbaik dengan
                fasilitas
                nyaman, bimbingan profesional, dan harga terjangkau.
            </p>

            <!-- Keunggulan -->
            <div class="grid md:grid-cols-3 gap-8 mb-16 text-black">
                <div class="bg-white bg-opacity-5 p-6 rounded-xl text-center backdrop-blur-md border border-gold">
                    <h3 class="text-2xl font-bold text-gold mb-2">Resmi & Berizin</h3>
                    <p class="text-sm">Memiliki izin resmi dari Kementerian Agama RI dan terdaftar di PPIU nasional.</p>
                </div>
                <div class="bg-white bg-opacity-5 p-6 rounded-xl text-center backdrop-blur-md border border-gold">
                    <h3 class="text-2xl font-bold text-gold mb-2">Pendamping Berpengalaman</h3>
                    <p class="text-sm">Didampingi mutawwif & pembimbing ibadah bersertifikat di setiap perjalanan.</p>
                </div>
                <div class="bg-white bg-opacity-5 p-6 rounded-xl text-center backdrop-blur-md border border-gold">
                    <h3 class="text-2xl font-bold text-gold mb-2">Harga Terjangkau</h3>
                    <p class="text-sm">Paket Umroh & Haji dengan harga bersahabat tanpa mengurangi kualitas layanan.</p>
                </div>
            </div>

            <!-- Galeri -->
            <div class="mb-16">
                <h3 class="text-3xl font-bold text-gold mb-6 text-center">Galeri Perjalanan</h3>
                <div class="grid md:grid-cols-3 gap-6">
                    <div class="overflow-hidden rounded-xl">
                        <img src="/img/galery.jpg" alt="Jamaah 1"
                            class="w-full h-auto object-cover hover:scale-105 transition" />
                    </div>
                    <div class="overflow-hidden rounded-xl">
                        <img src="/img/galery1.jpg" alt="Jamaah 2"
                            class="w-full h-auto object-cover hover:scale-105 transition" />
                    </div>
                    <div class="overflow-hidden rounded-xl">
                        <img src="/img/galery2.jpg" alt="Jamaah 3"
                            class="w-full h-auto object-cover hover:scale-105 transition" />
                    </div>
                </div>
            </div>

            <!-- CTA -->
            <div class="text-center mt-12">
                <h4 class="text-3xl font-bold mb-4">Ingin bergabung bersama kami?</h4>
                <p class="mb-6 text-lg">Segera daftarkan diri Anda & keluarga untuk meraih pengalaman spiritual tak
                    terlupakan.</p>
                <a href="/kontak"
                    class="inline-block bg-gold text-primary font-bold px-8 py-3 rounded-full hover:bg-yellow-500 transition">
                    Hubungi Kami Sekarang
                </a>
            </div>

        </div>
    </section>
</template>

<style scoped>
.text-gold {
    color: #D4AF37;
}

.bg-primary {
    background-color: #00534D;
}

.border-gold {
    border-color: #D4AF37;
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
</style>
