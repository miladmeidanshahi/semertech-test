<template>
  <u-card :ui="{ body: { padding: 'p-4' } }">
    <u-accordion
      :ui="{
        item: { padding: '' }
      }"
      :items="items"
    >
      <template #default="{ item, open }">
        <UButton
          color="gray"
          variant="ghost"
          :ui="{
            rounded: 'rounded-none',
            padding: ''
          }"
        >
          <span class="text-gray-700 truncate">{{ item.label }}</span>

          <template #trailing>
            <UIcon
              name="i-heroicons-chevron-right-20-solid"
              class="w-5 h-5 ms-auto transform transition-transform duration-200"
              :class="[open && 'rotate-90']"
            />
          </template>
        </UButton>
      </template>

      <template #sorts>
        <u-radio-group
          v-model="productFilter.sort"
          :ui-radio="{
            wrapper: 'mt-4 relative flex items-center',
            label: 'text-xs font-medium text-gray-500'
          }"
          :options="options"
          color="rose"
          @update:model-value="fetchProductByCategory"
        />
      </template>
    </u-accordion>
  </u-card>
</template>

<script setup>
const { products, productFilter, getProducts } = useProductService()

const items = [{
  slot: 'sorts',
  label: 'مرتب سازی',
  defaultOpen: true
}]

const options = [
  {
    label: 'تعداد: کم به زیاد',
    value: 'desc'
  },
  {
    label: 'تعداد: زیاد به کم',
    value: 'asc'
  }
]

async function fetchProductByCategory () {
  const { data } = await getProducts({ query: { sort: productFilter.value.sort } })

  products.value = data.value
}
</script>
