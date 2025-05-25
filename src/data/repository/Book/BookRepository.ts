import axBible from "@/data/provider/axios/axiosBible";
import { Book } from "@/domain/entity/Book/structure/book";
import { bookAdapter, booksAdapter } from "@/data/adapters/Book";
import IBookRepository from "@/domain/repository/Book/IBookRepository";
import createError from "@/domain/entity/ApiError/structure/createError";

export default class BookRepository implements IBookRepository {
  async getBooks(): Promise<Book[]> {
    try {
      const { data } = await axBible.get("/api/books");
      return booksAdapter(data);
    } catch (error) {
      throw createError(error);
    }
  }

  async getBook(bookName: string): Promise<Book> {
    try {
      const { data } = await axBible.get(`/api/book/${bookName}`);
      return bookAdapter(data);
    } catch (error) {
      throw createError(error);
    }
  }
}