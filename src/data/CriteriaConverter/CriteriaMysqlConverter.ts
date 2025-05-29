import { Criteria } from "../../domain/entity/Criteria/Criteria";
import { Filter } from "../../domain/entity/Criteria/Filter";
import { Filters } from "../../domain/entity/Criteria/Filters";


export class CriteriaMysqlConverter {
  static convert(criteria: Criteria): string {
    const whereClause = this.buildWhere(criteria.getFilters());
    const orderClause = this.buildOrder(criteria);
    const paginationClause = this.buildPagination(criteria);

    const clauses = [whereClause, orderClause, paginationClause].filter(Boolean);
    return clauses.join(' ');
  }

  private static buildWhere(filters: Filters): string {
    if (!filters.filters()) return '';

    const conditions = filters.filters().map((f: Filter) => {
      const field = `\`${f.getField().value()}\``;
      const value = this.formatValue(f.getOperator().value, f.getValue().value());
      const operator = this.mapOperator(f.getOperator().value);
      return `${field} ${operator} ${value}`;
    });

    return `WHERE ${conditions.join(' AND ')}`;
  }

  private static buildOrder(criteria: Criteria): string {
    const orderBy = criteria.getOrder().getOrderBy();
    const orderType = criteria.getOrder().getOrderType();
    if (!orderBy.value || orderType.value === 'none') return '';
    return `ORDER BY \`${orderBy.value()}\` ${orderType.value.toUpperCase()}`;
  }

  private static buildPagination(criteria: Criteria): string {
    const limit = criteria.getPageSize() ?? 0;
    const offset = criteria.getPageNumber() ?? 0;
    if (limit <= 0) return '';
    return `LIMIT ${limit} OFFSET ${offset}`;
  }

  private static formatValue(operator: string, value: string): string {
    if (operator === 'CONTAINS' || operator === 'NOT_CONTAINS') return `'%${value}%'`;
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
      NOT_CONTAINS: 'NOT LIKE',
    };
    return map[operator] || '=';
  }
}
