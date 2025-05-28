import { EnumValueObject } from "../ValueObject/EnumValueObject";

export enum Operator {
  EQUAL = 'EQUAL',
  NOT_EQUAL = 'NOT_EQUAL',
  GT = 'GT',
  GTE = 'GTE',
  LT = 'LT',
  LTE = 'LTE',
  CONTAINS = 'CONTAINS',
  NOT_CONTAINS = 'NOT_CONTAINS',
}

const OperatorStringMap: Record<Operator, string> = {
  [Operator.EQUAL]: '=',
  [Operator.NOT_EQUAL]: '!=',
  [Operator.GT]: '>',
  [Operator.GTE]: '>=',
  [Operator.LT]: '<',
  [Operator.LTE]: '<=',
  [Operator.CONTAINS]: 'CONTAINS',
  [Operator.NOT_CONTAINS]: 'NOT_CONTAINS'
};

export class FilterOperator extends EnumValueObject<Operator> {
  constructor(value: Operator) {
    super(value, Object.values(Operator));
  }

  //Esto es simplemente otra forma de instanciar nuestra clase
  //La usamos cuando queremos hacer logica extra en nuestra instanciación
  public static fromValue(value: string): FilterOperator {
    for (const operatorValue of Object.values(Operator)) {
      if (value === operatorValue.toString()) {
        return new FilterOperator(operatorValue);
      }
    }

    throw new Error(`The filter operator ${value} is invalid`);
  }

  public operator() {
    return OperatorStringMap[this.value]
  }

  //Condicional que evalua si mi operador es positivo
  public isPositive(): boolean {
    return this.value !== Operator.NOT_EQUAL && this.value !== Operator.NOT_CONTAINS;
  }

  //Implementación de nuestro EnumValueObject
  protected throwErrorForInvalidValue(value: Operator): void {
    throw new Error(`The filter operator ${value} is invalid`);
  }

  //Instancio la clase con el operador =
  public static equal() {
    return this.fromValue(Operator.EQUAL);
  }
}
