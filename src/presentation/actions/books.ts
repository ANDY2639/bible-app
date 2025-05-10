import BooksRepository from "@/data/repository/Books/BooksRepository";
import GetBooksUseCase from "@/domain/interactor/Books/GetBooksUseCase";

export const getBooks = async () => {
  const booksRepository = new BooksRepository()
  const getBooksUC = new GetBooksUseCase(booksRepository)
  const books = await getBooksUC.getBooks()
  return books
}
