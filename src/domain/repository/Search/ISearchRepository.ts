import { Parameters, SearchResponse } from "@/domain/entity/Search/structure/search"
import { Version } from "@/domain/entity/Version/structure/version"

export default interface ISearchRepository {
  search(versionUrl: Version["uri"], params: Parameters): Promise<SearchResponse>
}
