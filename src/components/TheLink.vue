<template>
  <button
    type="button"
    data-te-ripple-init
    data-te-ripple-color="light"
    class="inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-100 hover:opacity-90 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700"
    @click="redirect"
  >
    <slot>
      {{ label }}
    </slot>
  </button>
</template>

<script setup lang="ts">
import { toRefs } from "vue"
import type { RouteLocationRaw } from "vue-router"

import router from "@/router"
import { externalRedirect } from "@/composables/link"

const props = withDefaults(
  defineProps<{
    label?: string
    external?: boolean
    to?: RouteLocationRaw | string
  }>(),
  {
    external: false,
  }
)
const { to, external } = toRefs(props)

function redirect() {
  if (to?.value) {
    if (!external.value) {
      router.push(to.value)
    } else {
      externalRedirect(to.value.toString())
    }
  }
}
</script>
