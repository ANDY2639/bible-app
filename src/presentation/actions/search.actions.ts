import { Version } from "@/domain/entity/Version/structure/version"
import SearchUseCase from "@/domain/interactor/Search/SearchUseCase"
import SearchRepository from "@/data/repository/Search/SearchRepository"
import { Parameters, SearchResponse } from "@/domain/entity/Search/structure/search"

const searchRepository = new SearchRepository()

export const getSearch = async (versionUrl: Version["uri"], params: Parameters): Promise<SearchResponse> => {
  const searchUC = new SearchUseCase(searchRepository)
  const response = await searchUC.search(versionUrl, params)
  return response
}
