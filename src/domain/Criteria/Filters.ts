import { Filter } from "./Filter";

export class Filters {
  constructor(private readonly filters: Filter[] = []) {}

  public static fromValues(filters: Array<Map<string, string>>): Filters {
    return new Filters(filters.map(Filter.fromValues));
  }

  public static none(): Filters {
    return new Filters([]);
  }

  public hasFilters(): boolean {
    return this.filters.length > 0;
  }

  public getItems(): Filter[] {
    return this.filters;
  }

  public toPrimitives(): { field: string; operator: string; value: string }[] {
    return this.filters.map(f => ({
      field: f.field.value(),
      operator: f.operator.operator(),
      value: f.value.value()
    }));
  }
}
