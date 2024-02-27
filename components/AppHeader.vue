<template>
  <header class="bg-white rounded-b-3xl shadow-sm sticky top-0 z-10">
    <u-container>
      <nav
        class="flex items-center justify-between sm:h-28 p-4 sm:p-0"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <u-button
            size="lg"
            class="text-rose-500 hover:text-rose-700 hover:bg-rose-50 block sm:hidden"
            square
            variant="outline"
            @click="drawer = !drawer"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 12H14"
                stroke="#E20054"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 8H14"
                stroke="#E20054"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 4H14"
                stroke="#E20054"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </u-button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <nuxt-link
            v-for="{ to, label, icon } in menus"
            :key="label"
            :to="to"
            class="flex items-center text-gray-900 hover:text-rose-500"
            active-class="text-rose-500"
          >
            {{ label }}
          </nuxt-link>
        </div>
        <div class="flex lg:flex-1 lg:justify-end">
          <u-button
            size="lg"
            class="px-6 bg-rose-500 hover:bg-rose-700 hidden sm:flex"
            variant="solid"
            :ui="{ rounded: 'rounded-full' }"
          >
            تماس
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2em"
              height="1.2em"
              viewBox="0 0 24 24"
            ><g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ><path
              stroke-dasharray="64"
              stroke-dashoffset="64"
              d="M8 3C8.5 3 10.5 7.5 10.5 8C10.5 9 9 10 8.5 11C8 12 9 13 10 14C10.3943 14.3943 12 16 13 15.5C14 15 15 13.5 16 13.5C16.5 13.5 21 15.5 21 16C21 18 19.5 19.5 18 20C16.5 20.5 15.5 20.5 13.5 20C11.5 19.5 10 19 7.5 16.5C5 14 4.5 12.5 4 10.5C3.5 8.5 3.5 7.5 4 6C4.5 4.5 6 3 8 3Z"
            ><animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.6s"
              values="64;0"
            /></path><path
              stroke-dasharray="4"
              stroke-dashoffset="4"
              d="M14 7.04404C14.6608 7.34734 15.2571 7.76718 15.7624 8.27723M16.956 10C16.6606 9.35636 16.2546 8.77401 15.7624 8.27723"
              opacity="0"
            ><set
              attributeName="opacity"
              begin="0.7s"
              to="1"
            /><animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.7s"
              dur="0.2s"
              values="4;8"
            /></path><path
              stroke-dasharray="10"
              stroke-dashoffset="10"
              d="M20.748 9C20.3874 7.59926 19.6571 6.347 18.6672 5.3535M15 3.25203C16.4105 3.61507 17.6704 4.3531 18.6672 5.3535"
              opacity="0"
            ><set
              attributeName="opacity"
              begin="1s"
              to="1"
            /><animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="1s"
              dur="0.2s"
              values="10;20"
            /></path></g></svg>
          </u-button>

          <u-button
            size="lg"
            class="text-rose-500 hover:text-rose-700 hover:bg-rose-50 block sm:hidden"
            square
            variant="outline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2em"
              height="1.2em"
              viewBox="0 0 24 24"
            ><g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ><path
              stroke-dasharray="64"
              stroke-dashoffset="64"
              d="M8 3C8.5 3 10.5 7.5 10.5 8C10.5 9 9 10 8.5 11C8 12 9 13 10 14C10.3943 14.3943 12 16 13 15.5C14 15 15 13.5 16 13.5C16.5 13.5 21 15.5 21 16C21 18 19.5 19.5 18 20C16.5 20.5 15.5 20.5 13.5 20C11.5 19.5 10 19 7.5 16.5C5 14 4.5 12.5 4 10.5C3.5 8.5 3.5 7.5 4 6C4.5 4.5 6 3 8 3Z"
            ><animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.6s"
              values="64;0"
            /></path><path
              stroke-dasharray="4"
              stroke-dashoffset="4"
              d="M14 7.04404C14.6608 7.34734 15.2571 7.76718 15.7624 8.27723M16.956 10C16.6606 9.35636 16.2546 8.77401 15.7624 8.27723"
              opacity="0"
            ><set
              attributeName="opacity"
              begin="0.7s"
              to="1"
            /><animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.7s"
              dur="0.2s"
              values="4;8"
            /></path><path
              stroke-dasharray="10"
              stroke-dashoffset="10"
              d="M20.748 9C20.3874 7.59926 19.6571 6.347 18.6672 5.3535M15 3.25203C16.4105 3.61507 17.6704 4.3531 18.6672 5.3535"
              opacity="0"
            ><set
              attributeName="opacity"
              begin="1s"
              to="1"
            /><animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="1s"
              dur="0.2s"
              values="10;20"
            /></path></g></svg>
          </u-button>
        </div>
      </nav>
    </u-container>

    <!-- Mobile menu, show/hide based on menu open state. -->
    <div
      v-show="drawer"
      role="dialog"
      aria-modal="true"
    >
      <div class="fixed inset-0 z-10" />
      <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm">
        <div class="flex items-center justify-between">
          <a
            href="#"
            class="-m-1.5 p-1.5"
          >
            <span class="sr-only">Your Company</span>
          </a>
          <u-button
            variant="link"
            class="-m-2.5 rounded-md p-2.5 text-gray-700 hover:text-gray-500"
            @click="drawer = false"
          >
            <span class="sr-only">Close menu</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </u-button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <nuxt-link
                v-for="{ to, label, icon } in menus"
                :key="label"
                :to="to"
                class="flex items-center text-gray-900 hover:text-rose-500"
              >
                {{ label }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const drawer = ref(false)

const menuIcons = {
  productList: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20" > <path fill="currentColor" d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4M7.65 13.979H5.706V7.723H7.65zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973m8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699z" /> </svg>',
  getAdvice: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20" > <path fill="currentColor" d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4M7.65 13.979H5.706V7.723H7.65zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973m8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699z" /> </svg>',
  faq: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20" > <path fill="currentColor" d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4M7.65 13.979H5.706V7.723H7.65zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973m8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699z" /> </svg>',
  contactUs: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20" > <path fill="currentColor" d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4M7.65 13.979H5.706V7.723H7.65zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973m8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699z" /> </svg>'
}

const menus = [
  {
    to: '/product-list',
    label: 'لیست محصولات',
    icon: menuIcons.productList
  },
  {
    to: '',
    label: 'دریافت مشاوره',
    icon: menuIcons.getAdvice
  },
  {
    to: '',
    label: 'سوالات متداول',
    icon: menuIcons.faq
  },{
    to: '',
    label: 'تماس باما',
    icon: menuIcons.contactUs
  }
]
</script>
