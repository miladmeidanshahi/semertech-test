<template>
  <div class="py-6">
    <product-list-applied-filter />
    <div class="grid grid-cols-3 gap-x-4 gap-y-6">
      <div
        v-for="product in products"
        :key="product.id"
      >
        <product-list-card v-bind="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})

const { pending, data: products } = await useFetch('https://fakestoreapi.com/products')
</script>
