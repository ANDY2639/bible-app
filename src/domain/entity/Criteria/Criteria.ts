import { Order } from "./Order";
import { Filters } from "./Filters";
import { Filter, filterParams } from "./Filter";
import { InvalidCriteria } from "./InvalidCriteria";

export class Criteria {
  constructor(
    private readonly filters: Filters,
    private readonly order: Order,
    private readonly pageSize?: number,
    private readonly pageNumber?: number
  ) {
    if (this.pageNumber !== undefined && this.pageSize === undefined) {
      throw new InvalidCriteria();
    }
  }

  public static fromPrimitives(
    filters: filterParams[],
    orderBy?: string,
    orderType?: string,
    pageSize?: number,
    pageNumber?: number
  ): Criteria {
    return new Criteria(
      Filters.fromPrimitives(filters),
      Order.fromPrimitives(orderBy, orderType),
      pageSize,
      pageNumber
    );
  }

  public static withFilters(filters: filterParams[]): Criteria {
    return Criteria.fromPrimitives(filters);
  }

  public hasFilters(): boolean {
    return this.filters.count() > 0;
  }

  public hasOrder(): boolean {
    return !this.order.isNone();
  }

  public plainFilters(): Filter[] {
    return this.filters.filters();
  }

  public getFilters(): Filters {
    return this.filters;
  }

  public getOrder(): Order {
    return this.order;
  }

  public getPageSize(): number | undefined {
    return this.pageSize;
  }

  public getPageNumber(): number | undefined {
    return this.pageNumber;
  }

  public serialize(): string {
    return [
      this.filters.serialize(),
      this.order.serialize(),
      this.pageSize ?? 'none',
      this.pageNumber ?? 'none'
    ].join('~~');
  }

  public hasPagination(): boolean {
    return this.pageSize !== undefined && this.pageNumber !== undefined;
  }
}
