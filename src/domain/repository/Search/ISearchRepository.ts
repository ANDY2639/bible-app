import { SearchResponse } from "@/domain/entity/Search/structure/search"
import { SearchCriteria } from "@/domain/entity/Search/models/SearchCriteria"

export default interface ISearchRepository {
  search(criteria: SearchCriteria): Promise<SearchResponse>
}
