import { Book } from "@/domain/entity/Books/structure/books";

export const booksAdapter = (data: any): Book[] => {
  const books = data.map((book: any) => {
    return {
      abrev: book.abrev,
      names: book.names,
      chapters: book.chapters,
      testament: book.testament,
    }
  })

  return books
}