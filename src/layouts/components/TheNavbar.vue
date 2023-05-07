<template>
  <Card class="grow-1 navbar sticky">
    <template v-slot:content>
      <span class="flex flex-row gap-2 items-center">
        <h5 class="text-xl">Biblia</h5>
        <span class="text-blue-600"> ONLINE </span>
      </span>
    </template>
  </Card>
</template>

<style lang="scss">
.navbar {
  .p-card-body {
    padding: 0rem 1rem;
  }

  border-radius: 0px;
}
</style>

<script setup lang="ts">
import Card from "primevue/card"
</script>
