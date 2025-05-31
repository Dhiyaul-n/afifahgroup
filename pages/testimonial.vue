<template>
    <section class="min-h-screen bg-primary text-white p-8 animate-fade-in">
        <h2 class="text-4xl font-bold mb-6 text-gold">Testimoni Jamaah</h2>
        <p>Testimoni pelanggan tentang pengalaman bersama Afifah Group.</p>
    </section>
</template>

<style scoped>
.text-gold {
    color: #D4AF37;
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
</style>
