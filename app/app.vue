<template>
  <div class="min-h-screen flex flex-col justify-between">
    <Navbar />
    
    <main class="flex-1 px-6 py-10">
      <NuxtPage />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<style>
/* Estilos globales si necesitas */
</style>
