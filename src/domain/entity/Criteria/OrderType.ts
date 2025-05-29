import { EnumValueObject } from "./ValueObject/EnumValueObject";

export class OrderType extends EnumValueObject<string> {
  static readonly ASC = 'asc';
  static readonly DESC = 'desc';
  static readonly NONE = 'none';

  static readonly validOrderTypes = [
    OrderType.ASC,
    OrderType.DESC,
    OrderType.NONE
  ];

  constructor(value: string) {
    super(value, OrderType.validOrderTypes);
  }

  static from(value: string): OrderType {
    return new OrderType(value);
  }

  isNone(): boolean {
    return this.value === OrderType.NONE;
  }

  protected throwErrorForInvalidValue(value: string): void {
    throw new Error(`Invalid OrderType: ${value}`);
  }
}