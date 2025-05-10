import { Book } from "@/domain/entity/Book/structure/book";
import BooksRepository from "@/data/repository/Book/BooksRepository";
import GetBookUseCase from "@/domain/interactor/Book/GetBookUseCase";
import GetBooksUseCase from "@/domain/interactor/Book/GetBooksUseCase";

const booksRepository = new BooksRepository()

export const getBooks = async (): Promise<Book[]> => {
  const getBooksUC = new GetBooksUseCase(booksRepository)
  const books = await getBooksUC.getBooks()
  return books
}

export const getBook = async (bookParam: string): Promise<Book> => {
  const getBookUC = new GetBookUseCase(booksRepository)
  const book = await getBookUC.getBook(bookParam)
  return book
}
