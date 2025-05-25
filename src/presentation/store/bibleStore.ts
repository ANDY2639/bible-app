import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
import { Book } from "@/domain/entity/Book/structure/book"
import { Version } from "@/domain/entity/Version/structure/version"

type State = {
  books: Book[]
  versions: Version[]
}

type Actions = {
  setBooks: (books: Book[]) => void
  setVersions: (versions: Version[]) => void
}

export const useBibleStore = create<State & Actions>()(
  devtools(
    persist(
      set => ({
        books: [],
        versions: [],
        setBooks: (books: Book[]) => {
          set(() => ({ books }))
        },
        setVersions: (versions: Version[]) => {
          set(() => ({ versions }))
        },
      }),
      { name: "bible-store" }
    )
  )
)
