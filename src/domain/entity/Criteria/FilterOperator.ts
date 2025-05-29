import { EnumValueObject } from "./ValueObject/EnumValueObject";

export class FilterOperator extends EnumValueObject<string> {
  static readonly EQUAL = '=';
  static readonly NOT_EQUAL = '!=';
  static readonly GT = '>';
  static readonly LT = '<';
  static readonly CONTAINS = 'CONTAINS';
  static readonly NOT_CONTAINS = 'NOT_CONTAINS';

  static readonly validOperators = [
    FilterOperator.EQUAL,
    FilterOperator.NOT_EQUAL,
    FilterOperator.GT,
    FilterOperator.LT,
    FilterOperator.CONTAINS,
    FilterOperator.NOT_CONTAINS
  ];

  constructor(value: string) {
    super(value, FilterOperator.validOperators);
  }

  static from(value: string): FilterOperator {
    return new FilterOperator(value);
  }

  isContaining(): boolean {
    return (
      this.value === FilterOperator.CONTAINS ||
      this.value === FilterOperator.NOT_CONTAINS
    );
  }

  protected throwErrorForInvalidValue(value: string): void {
    throw new Error(`Invalid FilterOperator: ${value}`);
  }
}
