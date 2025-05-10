import { Book } from '@/domain/entity/Books/structure/books';
import type IBooksRepository from '@/domain/repository/Books/IBooksRepository';

export default class GetBooksUseCase {
  private readonly repository: IBooksRepository

  constructor(repository: IBooksRepository) {
    this.repository = repository
  }

  getBooks(): Promise<Book[]> {
    return this.repository.getBooks()
  }
}