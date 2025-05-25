import { Book } from "@/domain/entity/Book/structure/book";

export default interface IBookRepository {
  getBooks(): Promise<Book[]>
  getBook(book: string): Promise<Book>
}