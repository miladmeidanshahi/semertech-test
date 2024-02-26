<template>
  <div class="py-6">
    <product-list-applied-filter />
    <div class="flex flex-wrap md:flex-nowrap gap-6">
      <div class="basis-full md:basis-1/4">
        <product-list-side-filter-side-bar />
      </div>
      <div class="basis-full md:basis-3/4">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6">
          <div
            v-for="product in products"
            :key="product.id"
          >
            <product-list-card v-bind="product" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { products, getProducts } = useProductService()

definePageMeta({
  layout: 'default'
})

const { data } = await getProducts()

products.value = data.value
</script>
