import { Book } from "@/domain/entity/Books/structure/books";

export default interface IBooksRepository{
  getBooks(): Promise<Book[]>
}