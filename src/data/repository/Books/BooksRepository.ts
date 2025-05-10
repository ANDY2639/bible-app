import IBooksRepository from "@/domain/repository/Books/IBooksRepository";
import axBible from "@/data/provider/axios/axiosBible";
import { Book } from "@/domain/entity/Books/structure/books";
import { booksAdapter } from "@/data/adapters/Books/booksAdapter";

export default class BooksRepository implements IBooksRepository {
  async getBooks(): Promise<Book[]> {
    const { data } = await axBible.get("/books");
    return booksAdapter(data);
  }
}