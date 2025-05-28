/* eslint-disable @typescript-eslint/no-explicit-any */
import { Criteria } from "../Criteria/Criteria";
import { Filters } from "../Criteria/Filters";
import { Order } from "../Criteria/Order";

export class CriteriaConverter {
  static toJSON(criteria: Criteria) {
    return {
      filters: criteria.filters.toPrimitives(),
      order: criteria.order.toPrimitives(),
      limit: criteria.limit,
      offset: criteria.offset
    };
  }

  static fromJSON(json: any): Criteria {
    const filters = Filters.fromValues(
      (json.filters || []).map((f: any) => {
        const map = new Map<string, string>();
        map.set("field", f.field);
        map.set("operator", f.operator);
        map.set("value", f.value);
        return map;
      })
    );
    const order = Order.fromValues(json.order?.orderBy, json.order?.orderType);
    return new Criteria(filters, order, json.limit, json.offset);
  }
}
