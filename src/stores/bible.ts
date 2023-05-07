import {
  useBibleData,
  type BibleBook,
  type BibleChapterDictionary,
} from "@/processing/data"
import { defineStore } from "pinia"
import { computed, ref } from "vue"

export const useBibleStore = defineStore("bible", () => {
  const bible = useBibleData()

  const books = ref<BibleBook[]>([])
  const chapters = ref<BibleChapterDictionary>({})

  const getChapterByAbbrev = computed(
    () => (abbrev: string) => chapters.value[abbrev]
  )

  async function refresh() {
    const data = await bible.createData()

    books.value = data.books
    chapters.value = data.chapters
  }

  return {
    books,
    chapters,

    getChapterByAbbrev,

    refresh,

    $reset() {
      return void 0
    },
  }
})
