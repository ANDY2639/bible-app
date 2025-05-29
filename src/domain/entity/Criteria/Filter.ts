import { FilterField } from "./FilterField";
import { FilterOperator } from "./FilterOperator";
import { FilterValue } from "./FilterValue";

export type filterParams = {
  field: string;
  operator: string;
  value: string;
}

export class Filter {
  constructor(
    private readonly field: FilterField,
    private readonly operator: FilterOperator,
    private readonly value: FilterValue
  ) {}

  static fromPrimitives(values: filterParams): Filter {
    return new Filter(
      new FilterField(values.field),
      FilterOperator.from(values.operator),
      new FilterValue(values.value)
    );
  }

  getField(): FilterField {
    return this.field;
  }

  getOperator(): FilterOperator {
    return this.operator;
  }

  getValue(): FilterValue {
    return this.value;
  }

  serialize(): string {
    return `${this.field.value()}.${this.operator.value}.${this.value.value()}`;
  }
}
