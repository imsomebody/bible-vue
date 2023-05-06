import type { JsonBibleBook, JsonBibleChapter } from "@/stores/typings/bible"

export type BibleChapterDictionary = {
  [abbrev: string]: {
    book: string
    chapters: JsonBibleChapter
  }
}

export type BibleBook = Pick<JsonBibleBook, "abbrev" | "name"> & {
  index: number
}

async function getData() {
  const glob = await import("../data/pt_nvi.json")

  if (glob?.default) {
    return <JsonBibleBook[]>glob.default
  }

  throw new Error("Can't find the JSON to generate the store")
}

export function useBibleData() {
  async function createData() {
    const data = await getData()

    const books: BibleBook[] = data.map(({ abbrev, name }, index) => ({
      abbrev,
      name,
      index,
    }))

    const chapters: BibleChapterDictionary = Object.fromEntries(
      books.map((b) => [
        b.abbrev,
        {
          book: b.abbrev,
          chapters: data[b.index].chapters,
        },
      ])
    )

    return {
      books,
      chapters,
    }
  }

  return { createData }
}
