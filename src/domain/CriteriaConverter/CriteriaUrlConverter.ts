import { Criteria } from "../Criteria/Criteria";
import { Filters } from "../Criteria/Filters";
import { Order } from "../Criteria/Order";

export class CriteriaUrlConverter {
  static toURLSearchParams(criteria: Criteria): URLSearchParams {
    const params = new URLSearchParams();
    criteria.filters.getItems().forEach((f, i) => {
      params.append(`filters[${i}][field]`, f.field.value());
      params.append(`filters[${i}][operator]`, f.operator.value);
      params.append(`filters[${i}][value]`, f.value.value());
    });
    if (criteria.order.orderBy.value()) {
      params.append("orderBy", criteria.order.orderBy.value());
      params.append("orderType", criteria.order.orderType.value);
    }
    if (criteria.limit !== undefined) params.append("limit", criteria.limit.toString());
    if (criteria.offset !== undefined) params.append("offset", criteria.offset.toString());
    return params;
  }

  static fromURLSearchParams(params: URLSearchParams): Criteria {
    const filtersArr: Array<Map<string, string>> = [];
    let i = 0;
    while (params.has(`filters[${i}][field]`)) {
      const map = new Map<string, string>();
      map.set("field", params.get(`filters[${i}][field]`) ?? "");
      map.set("operator", params.get(`filters[${i}][operator]`) ?? "");
      map.set("value", params.get(`filters[${i}][value]`) ?? "");
      filtersArr.push(map);
      i++;
    }
    const filters = Filters.fromValues(filtersArr);
    const order = Order.fromValues(params.get("orderBy") ?? undefined, params.get("orderType") ?? undefined);
    const limit = params.get("limit") ? parseInt(params.get("limit")!) : undefined;
    const offset = params.get("offset") ? parseInt(params.get("offset")!) : undefined;
    return new Criteria(filters, order, limit, offset);
  }
}
