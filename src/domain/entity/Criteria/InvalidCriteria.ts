export class InvalidCriteria extends Error {
  constructor() {
    super('Page size is required when page number is defined');
    this.name = 'InvalidCriteria';

    // Esto es útil cuando se transpila a ES5 o se usan entornos antiguos
    Object.setPrototypeOf(this, InvalidCriteria.prototype);
  }
}
