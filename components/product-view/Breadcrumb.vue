<template>
  <u-breadcrumb
    :ui="{
      active: 'text-gray-500'
    }"
    :links="links"
  />
</template>

<script setup>
const route = useRoute()
const attrs = useAttrs()

const links = [
  {
    icon: 'i-heroicons-home',
    to: ''
  },
  {
    label: 'لیست محصولات‌',
    to: '/product-list'
  },
  {
    label: attrs.title
  }
]
</script>
