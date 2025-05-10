import { Book } from "@/domain/entity/Book/structure/book";

export default interface IBooksRepository {
  getBooks(): Promise<Book[]>
  getBook(book: string): Promise<Book>
}