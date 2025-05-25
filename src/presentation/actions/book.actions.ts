import { Book } from "@/domain/entity/Book/structure/book";
import BookRepository from "@/data/repository/Book/BookRepository";
import GetBookUseCase from "@/domain/interactor/Book/GetBookUseCase";
import GetBooksUseCase from "@/domain/interactor/Book/GetBooksUseCase";

const bookRepository = new BookRepository()

export const getBooks = async (): Promise<Book[]> => {
  const getBooksUC = new GetBooksUseCase(bookRepository)
  const books = await getBooksUC.getBooks()
  return books
}

export const getBook = async (bookName: string): Promise<Book> => {
  const getBookUC = new GetBookUseCase(bookRepository)
  const book = await getBookUC.getBook(bookName)
  return book
}
