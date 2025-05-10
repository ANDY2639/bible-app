import IBooksRepository from "@/domain/repository/Book/IBooksRepository";
import axBible from "@/data/provider/axios/axiosBible";
import { Book } from "@/domain/entity/Book/structure/book";
import { bookAdapter, booksAdapter } from "@/data/adapters/Book";

export default class BooksRepository implements IBooksRepository {
  async getBooks(): Promise<Book[]> {
    const { data } = await axBible.get("/books");
    return booksAdapter(data);
  }

  async getBook(book: string): Promise<Book> {
    const { data } = await axBible.get(`/book/${book}`);
    return bookAdapter(data);
  }
}