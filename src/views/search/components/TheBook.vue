<template>
  <div class="flex flex-row gap-4 py-2 px-1 w-full book-row-item">
    <dt class="mb-1 text-md text-blue-500">
      <!-- Book number is zero-based -->
      {{ book.index + 1 }}
    </dt>
    <dd class="text-2xl font-semibold">
      {{ book.name }}
    </dd>
  </div>
</template>

<script setup lang="ts">
import { computed, toRefs } from "vue"
import { storeToRefs } from "pinia"
import { useBibleStore } from "@/stores/bible"

const props = defineProps<{
  bookId: number
}>()
const { bookId } = toRefs(props)

const bibleStore = useBibleStore()
const { getBookByIndex } = storeToRefs(bibleStore)

const book = computed(() => {
  return getBookByIndex.value(bookId.value)
})
</script>

<style lang="scss">
:root {
  --book-item-highlight: rgba(84, 176, 243, 0.5);
}

.book-row-item:hover {
  transition: background 0.2s;
  background: var(--book-item-highlight);
  border-radius: 4.6px;

  cursor: pointer;

  @apply shadow-md;
}
</style>
