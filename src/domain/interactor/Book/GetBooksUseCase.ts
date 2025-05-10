import { Book } from '@/domain/entity/Book/structure/book';
import type IBooksRepository from '@/domain/repository/Book/IBooksRepository';

export default class GetBooksUseCase {
  private readonly repository: IBooksRepository

  constructor(repository: IBooksRepository) {
    this.repository = repository
  }

  getBooks(): Promise<Book[]> {
    return this.repository.getBooks()
  }
}