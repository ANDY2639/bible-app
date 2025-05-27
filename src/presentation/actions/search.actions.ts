import SearchUseCase from "@/domain/interactor/Search/SearchUseCase"
import SearchRepository from "@/data/repository/Search/SearchRepository"
import { SearchCriteria } from "@/domain/entity/Search/models/SearchCriteria"
import { Parameters, SearchResponse } from "@/domain/entity/Search/structure/search"

export const getSearch = async (version: string, params: Parameters): Promise<SearchResponse> => {
  const repository = new SearchRepository(version)
  const searchUC = new SearchUseCase(repository)
  const response = await searchUC.execute(new SearchCriteria(params))
  return response
}
