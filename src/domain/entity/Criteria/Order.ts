import { OrderBy } from './OrderBy';
import { OrderType } from './OrderType';

export class Order {
  constructor(
    private readonly orderBy: OrderBy,
    private readonly orderType: OrderType
  ) {}

  public static createDesc(orderBy: OrderBy): Order {
    return new Order(orderBy, new OrderType('DESC'));
  }

  public static fromPrimitives(orderBy?: string, order?: string): Order {
    return !orderBy || !order
      ? Order.none()
      : new Order(new OrderBy(orderBy), OrderType.from(order))
  }

  public static none(): Order {
    return new Order(new OrderBy(''), new OrderType('none'));
  }

  public getOrderBy(): OrderBy {
    return this.orderBy;
  }

  public getOrderType(): OrderType {
    return this.orderType;
  }

  public isNone(): boolean {
    return this.orderType.isNone();
  }

  public serialize(): string {
    return `${this.orderBy.value()}.${this.orderType.value}`;
  }
}
