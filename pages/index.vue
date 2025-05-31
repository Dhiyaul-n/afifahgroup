<template>
    <section class="min-h-screen bg-primary text-white font-sans">
        <!-- Hero Section -->
        <div class="container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center">
            <!-- Text Area -->
            <div class="flex-1 space-y-6 text-center md:text-left">
                <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gold animate-fade-in">
                    Perjalanan Umroh & Haji<br />
                    yang Nyaman dan Terpercaya
                </h1>
                <p
                    class="text-base sm:text-lg max-w-xl mx-auto md:mx-0 leading-relaxed animate-fade-in delay-150 text-white/90">
                    Afifah Group hadir untuk mendampingi Anda dan keluarga dalam ibadah
                    umroh dan haji dengan pelayanan profesional, amanah, serta fasilitas
                    terbaik.
                </p>

                <div class="flex flex-col sm:flex-row justify-center md:justify-start gap-4 animate-fade-in">
                    <NuxtLink to="/services"
                        class="btn-gold px-6 py-3 rounded-lg font-semibold transition-colors transition-transform duration-700 ease-in-out hover:bg-gold hover:text-primary hover:scale-105">
                        Lihat Layanan Kami
                    </NuxtLink>
                    <NuxtLink to="/contact"
                        class="border border-gold text-gold px-6 py-3 rounded-lg font-semibold transition duration-700 ease-in-out hover:bg-gold hover:text-primary hover:scale-105">
                        Hubungi Kami
                    </NuxtLink>
                </div>
            </div>

            <!-- Image Area -->
            <div class="flex-1 animate-fade-in delay-500 mt-6 md:mt-0">
                <img src="/img/kaabah.jpg" alt="Kaaba Makkah"
                    class="rounded-2xl shadow-2xl mx-auto w-full max-w-sm sm:max-w-md md:max-w-full hover:scale-105 transition duration-500" />
            </div>
        </div>

        <!-- Why Choose Us Section -->
        <section class="bg-white text-primary py-16">
            <div class="container mx-auto px-6 text-center max-w-4xl space-y-8">
                <h2 class="text-3xl font-bold mb-4 text-primary">Kenapa Memilih Afifah Group?</h2>
                <p class="text-lg leading-relaxed mb-12">
                    Kami memberikan layanan terbaik agar perjalanan ibadah Anda lancar dan
                    penuh keberkahan.
                </p>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-10 text-center" role="list">
                    <div class="space-y-4">
                        <!-- Ikon shield untuk Keamanan -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto w-16 h-16 text-primary" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                        <h3 class="font-semibold text-xl text-primary">Aman dan Terpercaya</h3>
                        <p class="text-gray-600">
                            Tim profesional yang berpengalaman dan terpercaya dalam mengatur perjalanan ibadah.
                        </p>
                    </div>
                    <div class="space-y-4">
                        <!-- Ikon support (headset) -->
                        <svg class="mx-auto w-16 h-16 text-primary dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M14.079 6.839a3 3 0 0 0-4.255.1M13 20h1.083A3.916 3.916 0 0 0 18 16.083V9A6 6 0 1 0 6 9v7m7 4v-1a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1Zm-7-4v-6H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1Zm12-6h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1v-6Z" />
                        </svg>
                        <h3 class="font-semibold text-xl text-primary">Layanan 24/7</h3>
                        <p class="text-gray-600">
                            Kami siap membantu Anda kapan saja sebelum, saat, dan setelah perjalanan.
                        </p>
                    </div>
                    <div class="space-y-4">
                        <!-- Ikon hotel/fasilitas -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto w-16 h-16 text-primary"
                            fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                                d="M2.535 11A3.981 3.981 0 0 0 2 13v4a1 1 0 0 0 1 1h2v1a1 1 0 1 0 2 0v-1h10v1a1 1 0 1 0 2 0v-1h2a1 1 0 0 0 1-1v-4c0-.729-.195-1.412-.535-2H2.535ZM20 9V8a4 4 0 0 0-4-4h-3v5h7Zm-9-5H8a4 4 0 0 0-4 4v1h7V4Z" />
                        </svg>
                        <h3 class="font-semibold text-xl text-primary">Fasilitas Terbaik</h3>
                        <p class="text-gray-600">
                            Fasilitas hotel, transportasi, dan panduan ibadah yang nyaman dan lengkap.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Packages Section -->
        <section class="bg-primary text-white py-16">
            <div class="container mx-auto px-6 max-w-6xl">
                <h2 class="text-3xl font-bold text-gold mb-10 text-center">Paket Umroh & Haji Kami</h2>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div
                        class="bg-white text-primary rounded-xl shadow-lg p-6 hover:shadow-2xl transition cursor-pointer">
                        <h3 class="text-xl font-semibold mb-2">Paket Umroh Reguler</h3>
                        <p class="mb-4 text-gray-700">
                            Paket lengkap dengan fasilitas standar, cocok untuk Anda yang
                            ingin ibadah dengan budget bersahabat.
                        </p>
                        <ul class="list-disc list-inside text-gray-700 mb-4">
                            <li>Hotel 3-4 bintang</li>
                            <li>Transportasi nyaman</li>
                            <li>Panduan berpengalaman</li>
                        </ul>
                        <p class="font-bold text-lg">Mulai dari Rp 25 juta</p>
                    </div>

                    <div
                        class="bg-white text-primary rounded-xl shadow-lg p-6 hover:shadow-2xl transition cursor-pointer">
                        <h3 class="text-xl font-semibold mb-2">Paket Umroh VIP</h3>
                        <p class="mb-4 text-gray-700">
                            Fasilitas premium untuk kenyamanan maksimal dan pelayanan khusus
                            selama ibadah.
                        </p>
                        <ul class="list-disc list-inside text-gray-700 mb-4">
                            <li>Hotel 5 bintang</li>
                            <li>Transportasi eksklusif</li>
                            <li>Panduan VIP & layanan ekstra</li>
                        </ul>
                        <p class="font-bold text-lg">Mulai dari Rp 40 juta</p>
                    </div>

                    <div
                        class="bg-white text-primary rounded-xl shadow-lg p-6 hover:shadow-2xl transition cursor-pointer">
                        <h3 class="text-xl font-semibold mb-2">Paket Haji Reguler</h3>
                        <p class="mb-4 text-gray-700">
                            Paket lengkap dengan pendampingan resmi dan layanan terbaik selama
                            ibadah haji.
                        </p>
                        <ul class="list-disc list-inside text-gray-700 mb-4">
                            <li>Pendampingan resmi</li>
                            <li>Hotel nyaman dekat Masjidil Haram</li>
                            <li>Transportasi & bimbingan ibadah</li>
                        </ul>
                        <p class="font-bold text-lg">Mulai dari Rp 90 juta</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section class="bg-white text-primary py-16">
            <div class="container mx-auto px-6 max-w-4xl">
                <h2 class="text-3xl font-bold mb-12 text-center">Apa Kata Mereka</h2>
                <div class="space-y-10">
                    <blockquote class="border-l-4 border-gold pl-6 italic text-gray-700">
                        “Pelayanan Afifah Group sangat memuaskan. Saya dan keluarga bisa
                        fokus ibadah tanpa khawatir urusan teknis. Highly recommended!”
                        <br /><span class="block mt-2 font-semibold">– Bapak Ahmad</span>
                    </blockquote>

                    <blockquote class="border-l-4 border-gold pl-6 italic text-gray-700">
                        “Pendampingan selama perjalanan haji sangat profesional dan ramah.
                        Membuat ibadah saya terasa lebih khusyuk dan berkesan.”
                        <br /><span class="block mt-2 font-semibold">– Ibu Siti</span>
                    </blockquote>
                </div>
            </div>
        </section>

        <!-- Call to Action -->
        <section class="bg-primary text-white text-center py-16 px-6">
            <h2 class="text-3xl font-bold mb-4">Siap Berangkat Ibadah?</h2>
            <p class="max-w-xl mx-auto mb-8">
                Hubungi kami sekarang untuk konsultasi gratis dan paket terbaik sesuai
                kebutuhan Anda.
            </p>
            <NuxtLink to="/contact" class="btn-gold px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition">
                Hubungi Kami
            </NuxtLink>
        </section>
    </section>
</template>

<style scoped>
.bg-primary {
    background-color: #00534d;
}

.text-primary {
    color: #00534d;
}

.text-gold {
    color: #d4af37;
}

.btn-gold {
    background-color: #d4af37;
    color: #00534d;
    font-weight: 600;
}

.btn-gold:hover {
    background-color: #c49f2e;
}

/* Simple fade-in animation */
@keyframes fadeIn {
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
    animation: fadeIn 0.8s ease forwards;
    opacity: 0;
}

.animate-fade-in.delay-150 {
    animation-delay: 0.15s;
}

.animate-fade-in.delay-300 {
    animation-delay: 0.3s;
}

.animate-fade-in.delay-400 {
    animation-delay: 0.4s;
}

.animate-fade-in.delay-500 {
    animation-delay: 0.5s;
}
</style>
