import { Book, BookSchema, BooksSchema } from "@/domain/entity/Book/structure/book";

export const booksAdapter = (data: unknown): Book[] => {
  const result = BooksSchema.safeParse(data)

  if (!result.success) {
    return []
  }

  return result.data
}

export const bookAdapter = (data: unknown): Book => {
  const result = BookSchema.safeParse(data)

  if (!result.success) {
    return {} as Book
  }

  return result.data
}