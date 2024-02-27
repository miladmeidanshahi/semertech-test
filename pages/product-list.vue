<template>
  <div class="py-6">
    <product-list-applied-filter />
    <div class="flex flex-wrap md:flex-nowrap gap-6">
      <div class="basis-full md:basis-1/4">
        <product-list-side-filter-side-bar />
      </div>
      <div class="basis-full md:basis-3/4">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6">
          <!-- this is for example to see skeleton -->
          <template v-if="loading">
            <u-card
              v-for="n in 6"
              :key="n"
            >
              <u-skeleton class="w-full aspect-square" />
              <u-skeleton class="h-4 my-4" />
              <u-skeleton class="rounded-2xl h-10" />
            </u-card>
          </template>

          <template v-else>
            <div
              v-for="product in products"
              :key="product.id"
            >
              <product-list-card v-bind="product" />
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})

const { products, getProducts } = useProductService()

const loading = ref(true)

const { data } = await getProducts()

products.value = data.value

setTimeout(() => (loading.value = false), 1000)
</script>
