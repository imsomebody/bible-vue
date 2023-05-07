<template>
  <Card class="grow-1 navbar sticky">
    <template v-slot:content>
      <span class="flex flex-row items-center">
        <label class="flex flex-row gap-2 items-center">
          <h5 class="text-xl">Biblia</h5>
          <span class="text-blue-600"> ONLINE </span>
        </label>
        <div class="ml-auto">
          <Button
            @click="seeGithub"
            v-tooltip.left="'Visite o projeto no GitHub'"
            icon="pi pi-github"
            rounded
            outlined
            aria-label="Github"
          />
        </div>
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
import { externalRedirect } from "@/composables/link"

import Card from "primevue/card"
import Button from "primevue/button"
import vTooltip from "primevue/tooltip"

function seeGithub() {
  externalRedirect("https://github.com/imsomebody/bible-vue")
}
</script>
