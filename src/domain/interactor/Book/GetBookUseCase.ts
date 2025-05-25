import { Book } from '@/domain/entity/Book/structure/book';
import type IBookRepository from '@/domain/repository/Book/IBookRepository';

export default class GetBookUseCase {
  private readonly repository: IBookRepository

  constructor(repository: IBookRepository) {
    this.repository = repository
  }

  getBook(bookName: string): Promise<Book> {
    return this.repository.getBook(bookName)
  }
}