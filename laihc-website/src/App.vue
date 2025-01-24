<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
    <div class="layout">
        <header class="bg-light border-bottom">
            <Navbar />
        </header>

        <main class="container py-4">
            <RouterView />
        </main>

        <Footer />
    </div>
</template>
