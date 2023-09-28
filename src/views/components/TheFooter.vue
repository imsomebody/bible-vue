<template>
  <footer class="w-full flex flex-col">
    <small
      >Feito por humanos, na terra ‐
      <a class="underline text-blue-500" href="" @click.prevent.stop="whoami">Davi Viana</a>
      - Livre para uso -
      <a
        class="underline text-blue-500"
        href=""
        @click.prevent.stop="humanityAt(year)"
        v-tooltip.top="'Veja o que há com a humanidade atualmente'"
        >{{ year }}</a
      ></small
    >
  </footer>
</template>

<script setup lang="ts">
import { computed } from "vue"

const year = computed(() => {
  return new Date().getFullYear()
})

// sat sri akal brothers
function whoami() {
  window.open("https://www.linkedin.com/in/daviana/", "_blank")?.focus()
}

function humanityAt(year: number) {
  window.open(`https://pt.wikipedia.org/wiki/${year}`, "_blank")?.focus()
}
</script>
