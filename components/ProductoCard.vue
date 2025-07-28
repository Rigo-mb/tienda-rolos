<template>
  <div class="border rounded-lg p-4 shadow hover:shadow-lg transition">
    <img :src="producto.imagen" alt="producto.nombre" class="w-full h-48 object-cover mb-4" />
    <h2 class="text-xl font-semibold">{{ producto.nombre }}</h2>
    <p class="text-gray-600">{{ producto.precio }}</p>
  </div>
</template>

<script setup>
defineProps({
  producto: Object
})
</script>
