import axBible from "@/data/provider/axios/axiosBible";
import { searchAdapter } from "@/data/adapters/Search";
import { Parameters, SearchResponse } from "@/domain/entity/Search/structure/search";
import createError from "@/domain/entity/ApiError/structure/createError";
import ISearchRepository from "@/domain/repository/Search/ISearchRepository";
import { Version } from "@/domain/entity/Version/structure/version";

export default class SearchRepository implements ISearchRepository {
  async search(versionUrl: Version["uri"], params: Parameters): Promise<SearchResponse> {
    try {
      const queryParams = this.buildQueryParams(params)
      const { data } = await axBible.get(`${versionUrl}/search?${queryParams}`);
      return searchAdapter(data)
    } catch (error) {
      throw createError(error);
    }
  }

  buildQueryParams(params: Parameters): string {
    const query = new URLSearchParams()

    query.append('q', params.q)

    if (params.testament) query.append('testament', params.testament)
    if (params.take) query.append('take', params.take.toString())
    if (params.page) query.append('page', params.page.toString())

    return query.toString()
  }
}
