export abstract class StringValueObject {
  constructor(protected readonly _value: string) {}

  public value(): string {
    return this._value;
  }
}
