<template>
  <u-card :ui="{ body: { padding: 'p-4' } }">
    <div class="font-medium text-sm text-gray-700">
      فیلتر و جستجو
    </div>

    <div class="relative">
      <u-input
        v-model="search"
        :ui="{ rounded: 'rounded-xl' }"
        type="search"
        size="lg"
        color="rose"
        class="my-4"
      >
        <template #leading>
          <svg
            viewBox="5.25 5.25 13.4998 13.4998"
            width="13.4998"
            height="13.4998"
            class="fill-rose-500"
          >
            <path d="M 5.25 11.334 C 5.25 9.708 5.972 8.092 7.032 7.032 C 8.092 5.972 9.708 5.25 11.334 5.25 C 12.96 5.25 14.576 5.972 15.635 7.032 C 16.695 8.092 17.417 9.708 17.417 11.334 C 17.417 12.692 16.913 14.043 16.13 15.069 L 18.53 17.47 C 18.823 17.763 18.823 18.237 18.53 18.53 C 18.237 18.823 17.763 18.823 17.47 18.53 L 15.069 16.13 C 14.043 16.913 12.692 17.417 11.334 17.417 C 9.708 17.417 8.092 16.695 7.032 15.635 C 5.972 14.576 5.25 12.96 5.25 11.334 Z M 8.093 14.575 C 8.963 15.445 10.014 15.917 11.334 15.917 C 12.619 15.917 13.649 15.469 14.506 14.642 C 14.526 14.617 14.547 14.593 14.57 14.57 C 14.593 14.547 14.617 14.526 14.642 14.506 C 15.469 13.649 15.917 12.619 15.917 11.334 C 15.917 10.014 15.445 8.963 14.575 8.093 C 13.704 7.222 12.653 6.75 11.334 6.75 C 10.014 6.75 8.963 7.222 8.093 8.093 C 7.222 8.963 6.75 10.014 6.75 11.334 C 6.75 12.653 7.222 13.704 8.093 14.575 Z" />
          </svg>
        </template>
      </u-input>
    </div>

    <u-button
      :ui="{ rounded: 'rounded-xl' }"
      size="lg"
      color="rose"
      block
      label="جستجو"
      @click="searchInProducts"
    />
  </u-card>
</template>

<script setup>
const { products, productFilter, getProducts } = useProductService()

const search = ref(null)

async function fetchProducts () {
  const { data } = await getProducts()

    products.value = data.value
}

async function searchInProducts () {
  if (!search.value) {
    fetchProducts()

    return
  }

  productFilter.value.search = search.value
  products.value = products.value.filter(({ title }) => title.toLowerCase().includes(search.value))
}

watch(
  () => productFilter.value.search,
  (value) => search.value = value
)
</script>
