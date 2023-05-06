export interface JsonBibleBook {
    abbrev: string
    name: string
    chapters: JsonBibleChapter
}

export type JsonBibleChapter = string[][]

export interface BibleBook extends JsonBibleBook {
    id: string
}