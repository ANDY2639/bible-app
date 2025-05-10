import { Book } from '@/domain/entity/Book/structure/book';
import type IBooksRepository from '@/domain/repository/Book/IBooksRepository';

export default class GetBookUseCase {
  private readonly repository: IBooksRepository

  constructor(repository: IBooksRepository) {
    this.repository = repository
  }

  getBook(book: string): Promise<Book> {
    return this.repository.getBook(book)
  }
}