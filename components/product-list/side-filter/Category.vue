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
          :ui="{
            rounded: 'rounded-none',
            padding: ''
          }"
          color="gray"
          variant="ghost"
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

      <template #categories>
        <div class="space-y-4">
          <u-radio-group
            v-model="productFilter.category"
            :ui-radio="{
              wrapper: 'mt-4 relative flex items-center',
              label: 'text-xs font-medium text-gray-500'
            }"
            :options="options"
            color="rose"
            @update:model-value="fetchProductByCategory"
          />
        </div>
      </template>
    </u-accordion>
  </u-card>
</template>

<script setup>
const { products, productFilter, getCategories, getProductByCategory } = useProductService()

const { data: categories } = await getCategories()

const items = [{
  slot: 'categories',
  label: 'دسته بندی',
  defaultOpen: true
}]

const options = categories.value.map(category => ({ label: category, value: category }))

async function fetchProductByCategory () {
  const { data } = await getProductByCategory(productFilter.value.category, { query: { sort: productFilter.value.sort } })

  products.value = data.value
}
</script>
