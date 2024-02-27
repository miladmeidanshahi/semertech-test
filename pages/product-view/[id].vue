<template>
  <div class="pt-6 pb-20">
    <div class="space-y-6">
      <product-view-breadcrumb v-bind="product" />
      <product-view-detail v-bind="product" />
      <product-view-specs v-bind="product" />
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const { getProductById } = useProductService()

const { data: product } = await getProductById(route.params.id)
</script>
