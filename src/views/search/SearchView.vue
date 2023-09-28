<template>
  <dl
    class="w-full text-gray-900 divide-gray-200 dark:text-white dark:divide-gray-700 flex flex-col gap-3 items-center"
  >
    <span class="controls w-full">
      <span class="p-float-label grow-1">
        <InputText name="search" v-model="searchTerm" class="w-full" />
        <label for="search">Pesquisar</label>
      </span>
    </span>
    <TheBook
      v-for="book in getBooks"
      :key="`book-${book.index}`"
      v-bind="{ bookId: book.index }"
      @click="seeBook(book.index)"
    ></TheBook>
  </dl>
</template>

<script setup lang="ts">
import Fuse from "fuse.js"
import TheBook from "./components/TheBook.vue"
import InputText from "primevue/inputtext"

import { storeToRefs } from "pinia"
import { useBibleStore } from "@/stores/bible"
import { useRouter } from "vue-router"
import { computed, ref } from "vue"

const bibleStore = useBibleStore()
const { books } = storeToRefs(bibleStore)
const router = useRouter()

const searchTerm = ref("")

const getBooks = computed(() => {
  if (searchTerm.value.length) {
    const fuse = new Fuse(books.value, {
      keys: ["abbrev", "name"],
      threshold: 0.55,
      shouldSort: true,
    })

    return fuse.search(searchTerm.value).map(({ item }) => item)
  }

  return books.value
})

function seeBook(bookId: number) {
  router.push({
    name: "book",
    params: {
      bookId,
    },
  })
}
</script>
