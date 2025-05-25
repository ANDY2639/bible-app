import { Book } from '@/domain/entity/Book/structure/book';
import type IBookRepository from '@/domain/repository/Book/IBookRepository';

export default class GetBooksUseCase {
  private readonly repository: IBookRepository

  constructor(repository: IBookRepository) {
    this.repository = repository
  }

  getBooks(): Promise<Book[]> {
    return this.repository.getBooks()
  }
}