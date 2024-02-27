<template>
  <u-card>
    <div class="text-blue-900 font-bold text-xl mb-4">
      مشخصات فنی
    </div>

    <div class="space-y-3">
      <div
        v-for="(spec, index) in specs"
        :key="index"
        class="flex flex-wrap md:flex-nowrap gap-3"
      >
        <div
          class="flex items-center basis-full md:basis-1/5 bg-[#F5F7FA] py-3 px-4 text-gray-600 text-sm font-medium rounded-ss-2xl rounded-es-2xl rounded-se-md rounded-ee-md"
          v-text="spec.label"
        />
        <div
          class="basis-full md:basis-4/5 bg-[#F5F7FA] py-3 px-4 text-gray-800 text-sm font-bold rounded-ee-2xl rounded-se-2xl rounded-ss-md rounded-es-md"
          v-html="spec.value"
        />
      </div>
    </div>
  </u-card>
</template>

<script setup>
const specs = [
  {
    label: 'قیمت',
    value: '۲۸,۰۰۰,۰۰۰ تومان'
  },
  {
    label: 'توضیحات',
    value: `
      سنسورهای تشخیص موانع: دارای سنسورهای اولتراسونیک برای تشخیص موانع در مسیر درب<br>
      توقف خودکار: در صورت تشخیص موانع، درب به صورت خودکار توقف و باز نمی‌شود<br>
      کلید اضطراری: دارای کلید اضطراری برای قطع فوری تغذیه و توقف درب
    `
  },
  {
    label: 'دسته بندی',
    value: 'کشویی'
  },
  {
    label: 'رتبه',
    value: 2
  },
  {
    label: 'تعداد',
    value: 5
  }
]
</script>
