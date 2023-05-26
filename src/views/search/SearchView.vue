<template>
  <dl
    class="w-full text-gray-900 divide-gray-200 dark:text-white dark:divide-gray-700 flex flex-col gap-3 items-center"
  >
    <TheBook
      v-for="book in books"
      :key="`book-${book.index}`"
      v-bind="{ bookId: book.index }"
    ></TheBook>
  </dl>
</template>

<script setup lang="ts">
import TheBook from "./components/TheBook.vue"
import { storeToRefs } from "pinia"
import { useBibleStore } from "@/stores/bible"

const bibleStore = useBibleStore()
const { books } = storeToRefs(bibleStore)
</script>
