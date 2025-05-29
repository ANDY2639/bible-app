import { Collection } from "./Collection";
import { Filter, filterParams } from "./Filter";

export class Filters extends Collection<Filter> {
  constructor(filters: Filter[] = []) {
    super(filters);
  }

  static fromPrimitives(values: filterParams[]): Filters {
    const filters = values.map(Filters.filterBuilder());
    return new Filters(filters);
  }

  private static filterBuilder(): (values: filterParams) => Filter {
    return (values) => Filter.fromPrimitives(values);
  }

  add(filter: Filter): Filters {
    return new Filters([...this._items, filter]);
  }

  filters(): Filter[] {
    return this._items;
  }

  serialize(): string {
    return this._items.reduce((acc, filter) => {
      const serialized = filter.serialize();
      return acc ? `${acc}^${serialized}` : serialized;
    }, '');
  }

  protected type(): string {
    return 'Filter';
  }
}
