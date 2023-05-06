<script setup lang="ts">
import { RouterView } from "vue-router"

import BaseLayout from "./layouts/BaseLayout.vue"
import Card from "primevue/card"
</script>

<template>
  <BaseLayout>
    <RouterView />
  </BaseLayout>
</template>

