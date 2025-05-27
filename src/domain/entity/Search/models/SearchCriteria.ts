import { initialParameters, Parameters, Testament } from "../structure/search";

export class SearchCriteria {
  private readonly criteria: Parameters = initialParameters

  constructor(initial?: Parameters) {
    if (initial) {
      this.criteria = initial;
    }
  }

  setQuery(q: string): this {
    this.criteria.q = q;
    return this;
  }

  setTestament(testament: Testament): this {
    this.criteria.testament = testament;
    return this;
  }

  setTake(take: number): this {
    this.criteria.take = take;
    return this;
  }

  setPage(page: number): this {
    this.criteria.page = page;
    return this;
  }

  toQueryString(): string {
    if (!this.criteria.q) {
      throw new Error("The 'q' parameter is required.");
    }

    const params = new URLSearchParams();
    Object.entries(this.criteria).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        params.append(key, value.toString());
      }
    });

    return `?${params.toString()}`;
  }

  buildUrl(baseUrl: string): string {
    return `${baseUrl}${this.toQueryString()}`;
  }
}
