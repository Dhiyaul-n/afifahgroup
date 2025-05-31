<template>
    <section class="min-h-screen bg-primary text-white py-16 px-6 animate-fade-in" aria-label="Contact Section">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-5xl font-extrabold mb-4 text-gold text-center">Kontak Kami</h2>
            <p class="mb-12 max-w-2xl mx-auto text-center text-lg leading-relaxed">
                Hubungi kami untuk info lebih lanjut atau booking perjalanan. Tim kami siap membantu Anda 24/7.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                <!-- Contact Info -->
                <div class="border border-gold rounded-xl p-8 space-y-8">
                    <h3 class="text-2xl font-bold mb-4 text-gold">Informasi Kontak</h3>
                    <div class="space-y-4">
                        <div class="flex items-center space-x-4">
                            <svg class="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 12H8m0 0l4 4m-4-4l4-4" />
                            </svg>
                            <a href="mailto:info@afifahgroup.com" class="hover:underline">info@afifahgroup.com</a>
                        </div>
                        <div class="flex items-center space-x-4">
                            <svg class="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 10h1l1 2 4-4 5 5 3-3 2 2v1a2 2 0 01-2 2h-1l-2-2-2 2H7a4 4 0 01-4-4v-1z" />
                            </svg>
                            <a href="tel:+6281312345678" class="hover:underline">+62 813-1234-5678</a>
                        </div>
                    </div>

                    <!-- Social Media -->
                    <div class="pt-8">
                        <h3 class="text-2xl font-bold mb-4 text-gold">Ikuti Kami</h3>
                        <div class="flex space-x-4">
                            <a href="https://facebook.com/afifahgroup" target="_blank" class="social-icon">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M22 12a10 10 0 10-11.6 9.9v-7h-2v-2.9h2v-2.2c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.9h2.6l-.4 2.9h-2.2v7A10 10 0 0022 12z">
                                    </path>
                                </svg>
                            </a>
                            <a href="https://instagram.com/afifahgroup" target="_blank" class="social-icon">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M7 2C4.8 2 3 3.8 3 6v12c0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4H7zm0 2h10c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.5a1 1 0 110 2 1 1 0 010-2z">
                                    </path>
                                </svg>
                            </a>
                            <a href="https://wa.me/6281312345678" target="_blank" class="social-icon">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M20.5 3.5A11.94 11.94 0 0012 0C5.4 0 .1 5.2 0 11.6c0 2 .5 3.9 1.4 5.6L0 24l6.1-1.6A11.8 11.8 0 0012 24c6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.5-8.5zm-8.4 18a9.9 9.9 0 01-5.1-1.4l-.4-.2-3.6.9.9-3.5-.2-.4A9.7 9.7 0 012.1 12C2.2 6.8 6.7 2.3 12 2.3c2.7 0 5.1 1 7 2.9a9.7 9.7 0 012.9 7c0 5.3-4.4 9.7-9.7 9.7z">
                                    </path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.text-gold {
    color: #d4af37;
}

.bg-primary {
    background-color: #00534d;
}

.border-gold {
    border-color: #d4af37;
}

.social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background-color: rgba(255, 255, 255, 0.1);
    border: 2px solid #d4af37;
    border-radius: 9999px;
    color: #d4af37;
    transition: all 0.3s ease;
}

.social-icon:hover {
    background-color: #d4af37;
    color: #00534d;
    transform: scale(1.1);
    box-shadow: 0 0 12px #d4af37;
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
