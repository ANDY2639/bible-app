/* eslint-disable @typescript-eslint/no-explicit-any */
import { Criteria } from "../Criteria/Criteria";
import { Filters } from "../Criteria/Filters";


export class CriteriaMysqlConverter {
  static convert(criteria: Criteria): string {
    const whereClause = this.buildWhere(criteria.filters);
    const orderClause = this.buildOrder(criteria);
    const paginationClause = this.buildPagination(criteria);

    const clauses = [whereClause, orderClause, paginationClause].filter(Boolean);
    return clauses.join(' ');
  }

  private static buildWhere(filters: Filters): string {
    if (!filters.hasFilters()) return '';

    const conditions = filters.toPrimitives().map((f: any) => {
      const field = `\`${f.field}\``;
      const value = this.formatValue(f.operator, f.value);
      const operator = this.mapOperator(f.operator);
      return `${field} ${operator} ${value}`;
    });

    return `WHERE ${conditions.join(' AND ')}`;
  }

  private static buildOrder(criteria: Criteria): string {
    const { orderBy, orderType } = criteria.order;
    if (!orderBy.value || orderType.value === 'none') return '';
    return `ORDER BY \`${orderBy.value()}\` ${orderType.value.toUpperCase()}`;
  }

  private static buildPagination(criteria: Criteria): string {
    const limit = criteria.limit ?? 0;
    const offset = criteria.offset ?? 0;
    if (limit <= 0) return '';
    return `LIMIT ${limit} OFFSET ${offset}`;
  }

  private static formatValue(operator: string, value: string): string {
    if (operator === 'CONTAINS') return `'%${value}%'`;
    if (!isNaN(Number(value))) return value;
    return `'${value}'`;
  }

  private static mapOperator(operator: string): string {
    const map: Record<string, string> = {
      EQUAL: '=',
      NOT_EQUAL: '!=',
      GT: '>',
      LT: '<',
      GTE: '>=',
      LTE: '<=',
      CONTAINS: 'LIKE',
    };
    return map[operator] || '=';
  }
}
