<template>
  <u-card :ui="CardConfig">
    <nuxt-img
      :src="$attrs.image"
      class="w-full rounded-2xl object-contain"
    />

    <div
      :title="$attrs.title"
      class="text-blue-900 text-sm font-bold truncate ... my-4"
      v-text="$attrs.title"
    />

    <u-button
      size="lg"
      class="border-slate-50"
      color="white"
      block
      :ui="{ rounded: 'rounded-2xl' }"
    >
      <span class="text-rose-500">مشاهده جزئیات</span>
      <svg
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.8332 13.28L6.48656 8.9333C5.97323 8.41997 5.97323 7.57997 6.48656 7.06664L10.8332 2.71997"
          stroke="#E20054"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </u-button>
  </u-card>
</template>

<script setup>
const CardConfig = {
  body: { padding: 'p-3' },
  header: { padding: 'p-3' },
  divide: '',
  rounded: 'rounded-3xl'
}
</script>

<style scoped lang="sass">
img
  aspect-ratio: 16/11
</style>
