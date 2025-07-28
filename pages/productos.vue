<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold mb-6">Nuestros productos</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <ProductoCard
        v-for="producto in productos"
        :key="producto.id"
        :producto="producto"
      />
    </div>
  </div>
</template>

<script setup>
import ProductoCard from '~/components/ProductoCard.vue'

const productos = [
  { id: 1, nombre: 'Camiseta Negra', precio: '$25', imagen: 'https://via.placeholder.com/300x300' },
  { id: 2, nombre: 'Hoodie Blanco', precio: '$40', imagen: 'https://via.placeholder.com/300x300' },
  { id: 3, nombre: 'Gorra Azul', precio: '$15', imagen: 'https://via.placeholder.com/300x300' },
]
</script>
