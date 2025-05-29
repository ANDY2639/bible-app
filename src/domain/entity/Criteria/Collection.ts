export abstract class Collection<T> implements Iterable<T> {
  protected readonly _items: T[];
  protected abstract type(): string;

  constructor(items: T[]) {
    this._items = items;
  }

  [Symbol.iterator](): Iterator<T> {
    let index = 0;
    const items = this._items;
    return {
      next(): IteratorResult<T> {
        if (index < items.length) {
          return { value: items[index++], done: false };
        }
        return { value: undefined, done: true };
      }
    };
  }

  count(): number {
    return this._items.length;
  }

  protected items(): T[] {
    return this._items;
  }
}
