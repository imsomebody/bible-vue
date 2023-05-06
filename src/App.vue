<script setup lang="ts">
import { useBibleStore } from "./stores/bible";
import { onBeforeMount } from "vue-demi";
import { RouterView } from "vue-router"

import BaseLayout from "./layouts/BaseLayout.vue"

const bibleStore = useBibleStore()

onBeforeMount(async () => {
  await bibleStore.refresh()
})
</script>

<template>
  <BaseLayout>
    <RouterView />
  </BaseLayout>
</template>
