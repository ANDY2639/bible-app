import axBible from "@/data/provider/axios/axiosBible";
import { searchAdapter } from "@/data/adapters/Search";
import { SearchResponse } from "@/domain/entity/Search/structure/search";
import createError from "@/domain/entity/ApiError/structure/createError";
import ISearchRepository from "@/domain/repository/Search/ISearchRepository";
import { SearchCriteria } from "@/domain/entity/Search/models/SearchCriteria";

export default class SearchRepository implements ISearchRepository {
  constructor(private readonly version: string) { }

  async search(criteria: SearchCriteria): Promise<SearchResponse> {
    try {
      const { data } = await axBible.get(`${this.version}/search${criteria.toQueryString()}`);
      return searchAdapter(data)
    } catch (error) {
      throw createError(error);
    }
  }
}
