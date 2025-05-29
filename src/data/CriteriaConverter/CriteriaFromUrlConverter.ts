import qs from 'qs';
import { Criteria } from '../../domain/entity/Criteria/Criteria';
import { filterParams } from '../../domain/entity/Criteria/Filter';

export class CriteriaFromUrlConverter {
  toCriteria(url: string) {
    const parsedUrl = new URL(url);
    const parsed = qs.parse(parsedUrl.search.slice(1));

    const filters = parsed['filters'] ? parsed['filters'] : [];
    const orderBy = parsed['orderBy']?.toString() ?? undefined;
    const order = parsed['order']?.toString() ?? undefined;
    const pageSize = parsed['pageSize'] ? parseInt(parsed['pageSize'].toString(), 10) : undefined;
    const pageNumber = parsed['pageNumber'] ? parseInt(parsed['pageNumber'].toString(), 10) : undefined;

    return Criteria.fromPrimitives(
      filters as filterParams[],
      orderBy,
      order,
      pageSize,
      pageNumber
    );
  }

  toFiltersPrimitives(url: string): unknown[] {
    const parsedUrl = new URL(url);
    const params = Object.fromEntries(parsedUrl.searchParams.entries());

    return params['filters'] ? JSON.parse(params['filters']) : [];
  }
}
