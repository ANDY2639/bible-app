import IBooksRepository from "@/domain/repository/Book/IBooksRepository";
import axBible from "@/data/provider/axios/axiosBible";
import { Book } from "@/domain/entity/Book/structure/book";
import { bookAdapter, booksAdapter } from "@/data/adapters/Book";
import createError from "@/domain/entity/ApiError/structure/createError";

export default class BooksRepository implements IBooksRepository {
  async getBooks(): Promise<Book[]> {
    try {
      const { data } = await axBible.get("/books");
      return booksAdapter(data);
    } catch (error) {
      throw createError(error);
    }
  }

  async getBook(bookName: string): Promise<Book> {
    try {
      const { data } = await axBible.get(`/book/${bookName}`);
      return bookAdapter(data);
    } catch (error) {
      throw createError(error);
    }
  }
}